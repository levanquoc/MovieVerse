// ============================================
// 📄 pages/MovieDetailPage.jsx - Trang Chi Tiết Phim
// ============================================
//
// 🧠 BÀI HỌC DAY 10: Dynamic Routes & useParams
// - useParams() là một Hook của React Router giúp "bắt" lấy 
//   các biến động trên thanh URL (ví dụ: `:id`).
// ============================================

import { useParams, Link } from 'react-router-dom'
import { sampleMovies } from '../data/sampleMovies'
import Badge from '../components/Badge'

function MovieDetailPage() {
  // 1. Dùng useParams() để "vớt" lấy biền 'id' từ URL (như ta đã định nghĩa trong App.jsx)
  // Lưu ý: params lấy từ URL LUÔN LÀ DẠNG CHUỖI (String), ví dụ "1", "2"
  const { id } = useParams()

  // 2. Đi tìm bộ phim có id trùng khớp trong data
  // Dùng Number(id) để ép kiểu "1" (chuỗi) thành 1 (số nguyên) cho dễ so sánh
  const movie = sampleMovies.find(m => m.id === Number(id))

  // 3. Xử lý trường hợp người dùng gõ URL bậy (VD: /movie/999)
  if (!movie) {
    return (
      <div className="text-center py-32 text-white">
        <h2 className="text-3xl font-bold mb-4">Lỗi 404: Không tìm thấy phim!</h2>
        <Link to="/" className="text-purple-400 hover:text-purple-300 underline">
          Quay lại Trang Chủ
        </Link>
      </div>
    )
  }

  // 4. Nếu tìm thấy phim, hiển thị giao diện chi tiết
  return (
    // min-h-[80vh] để đẩy footer xuống tránh web lơ lửng
    <main className="max-w-6xl mx-auto px-5 py-10 min-h-[80vh]">
      
      {/* Nút Quay lại */}
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <span>← Quắn lại Trang Chủ</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-10 bg-[#1a1a2e] p-6 md:p-10 rounded-3xl border border-[#2a2a3e] shadow-2xl">
        
        {/* Cột trái: Poster Ảnh lớn */}
        <div className="md:w-1/3">
           <img 
             src={movie.poster} 
             alt={movie.title} 
             className="w-full rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] object-cover"
           />
        </div>

        {/* Cột phải: Thông tin chi tiết */}
        <div className="md:w-2/3 flex flex-col justify-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
             {movie.title}
           </h1>

           <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-gray-400 text-lg">📅 {movie.year}</span>
              <Badge type="genre text-lg">🎭 {movie.genre || "Chưa phân loại"}</Badge>
              <Badge type="rating" value={movie.rating}>
                 ⭐ {movie.rating?.toFixed(1) || "N/A"}
              </Badge>
           </div>
           
           <h3 className="text-2xl font-semibold text-white mb-3">Tóm tắt nội dung</h3>
           <p className="text-gray-300 text-lg leading-relaxed mb-8">
             {movie.overview || "Đang cập nhật nội dung cho bộ phim này..."}
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
