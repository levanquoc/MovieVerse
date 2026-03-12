// ============================================
// 📄 pages/MovieDetailPage.jsx - (Day 11: Real Detail API)
// ============================================

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { movieService } from '../services/api'
import Badge from '../components/Badge'
import LoadingSpinner from '../components/LoadingSpinner'

function MovieDetailPage() {
  const { id } = useParams()
  
  // 🔹 STATE MỚI: Chỉ lưu MỘT BỘ PHIM
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // 1️⃣ BẮT ĐẦU GỌI API THEO ID KHI VÀO TRANG
  useEffect(() => {
    // Luôn reset state khi chuẩn bị lấy phim mới
    setIsLoading(true)
    setError(null)
    
    // Hàm async gọi Data
    const fetchMovie = async () => {
       try {
         // Truyền id vào hàm gõ cửa TMDB
         const data = await movieService.getMovieDetail(id)
         setMovie(data)
       } catch (err) {
         console.error("Lỗi lấy chi tiết phim:", err)
         // API báo 404 thì xuất lỗi này
         setError("Không tìm thấy bộ phim. Có thể nó đã bị xóa khỏi Vũ trụ điện ảnh!")
       } finally {
         setIsLoading(false)
       }
    }
    
    fetchMovie()
  }, [id]) // ⚠️ CHÚ Ý: Đưa 'id' vào mảng. Nếu Khách chuyển từ phim 1 sang phim 2 nhanh, React bốc lại Data mới ngay!


  // Rẽ nhánh Loading
  if (isLoading) return <LoadingSpinner />

  // Rẽ nhánh Lỗi
  if (error || !movie) {
    return (
      <div className="text-center py-32 text-white">
        <h2 className="text-3xl font-bold mb-4">Lỗi: {error || 'Không tìm thấy phim'}</h2>
        <Link to="/" className="text-purple-400 hover:text-purple-300 underline">
          Quay lại Trang Chủ
        </Link>
      </div>
    )
  }

  // 🔹 Giao diện Chính khi tải thành công
  return (
    <main className="max-w-6xl mx-auto px-5 py-10 min-h-[80vh]">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <span>← Quắn lại Trang Chủ</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-10 bg-[#1a1a2e] p-6 md:p-10 rounded-3xl border border-[#2a2a3e] shadow-2xl">
        <div className="md:w-1/3">
           <img 
             src={movie.poster} 
             alt={movie.title} 
             className="w-full rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] object-cover"
           />
        </div>

        <div className="md:w-2/3 flex flex-col justify-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
             {movie.title}
           </h1>

           <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-gray-400 text-lg">📅 {movie.year}</span>
              <Badge type="genre text-lg">🎭 {movie.genre}</Badge>
              <Badge type="rating" value={movie.rating}>
                 ⭐ {movie.rating?.toFixed(1) || "N/A"}
              </Badge>
           </div>
           
           <h3 className="text-2xl font-semibold text-white mb-3">Tóm tắt nội dung</h3>
           <p className="text-gray-300 text-lg leading-relaxed mb-8">
             {movie.overview}
           </p>

           <div className="flex gap-4 mt-auto">
             <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                🔥 Đặt vé ngay
             </button>
             <button className="bg-[#2a2a3e] hover:bg-[#373754] text-white font-bold py-3 px-8 rounded-xl transition-colors">
                ❤️ Yêu thích
             </button>
           </div>
        </div>
      </div>
    </main>
  )
}

export default MovieDetailPage
