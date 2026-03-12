// ============================================
// 📄 pages/HomePage.jsx - (Day 11: Real API Data)
// ============================================

import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import MovieList from '../components/MovieList'
import LoadingSpinner from '../components/LoadingSpinner'

// 🔹 BẠN MỚI: Import Service thay vì Data Cứng (sampleMovies)
import { movieService } from '../services/api'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // 🔹 BẠN MỚI: Báo lỗi nếu API sập
  const [error, setError] = useState(null)

  // 1️⃣ Lấy Phim Mặc Định (Popular) khi MỚI VÀO TRANG
  useEffect(() => {
    // Vì useEffect không cho phép hàm async trực tiếp 
    // bên ngoài, ta tạo một hàm hốt data bên trong và gọi nó ngay
    const fetchInitialMovies = async () => {
      try {
        setIsLoading(true)
        // Bắt đầu HÚT DATA từ Internet:
        const data = await movieService.getPopular()
        setMovies(data)
      } catch (err) {
        console.error("Lỗi lấy phim:", err)
        setError("Không thể kết nối đến máy chủ phim. Vui lòng thử lại sau.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialMovies()
  }, []) // Mảng rỗng = Chạy 1 LẦN

  // 2️⃣ Xử lý khi người dùng ấn nút Tìm Kiếm trên thẻ Hero
  const handleSearch = async (keyword) => {
    setSearchQuery(keyword)
    
    // Bật Loading trước khi tìm
    setIsLoading(true)
    setError(null)
    
    try {
       // NẾU Ô TÌM KIẾM TRỐNG XÓA -> Tải lại danh sách phổ biến
       if (!keyword.trim()) {
           const data = await movieService.getPopular()
           setMovies(data)
           return
       }
       
       // NẾU CÓ CHỮ -> Liên hệ API tìm kiếm
       const searchResults = await movieService.searchMovies(keyword)
       setMovies(searchResults)

    } catch (err) {
       console.error("Lỗi tìm kiếm:", err)
       setError("Lỗi khi tìm kiếm phim.")
    } finally {
       setIsLoading(false)
    }
  }

  // 🔹 Không cần filter bằng máy tính của khách nữa vì Máy Chủ (API) đã filter dùm qua Search rồi!
  // const filteredMovies = movies.filter(...) -> XÓA

  return (
    <main>
      <Hero onSearch={handleSearch} />
      
      {/* 🔹 Hiển thị Lỗi (Error Message) nếu có */}
      {error && (
        <div className="text-center py-10 bg-red-900/30 text-red-400 max-w-2xl mx-auto rounded-xl mt-8">
           <p className="font-bold text-xl">⚠️ Oops!</p>
           <p>{error}</p>
        </div>
      )}

      {/* Hiển thị Loading hoặc kết quả */}
      {isLoading ? (
         <LoadingSpinner />
      ) : (
         !error && <MovieList movies={movies} searchQuery={searchQuery} />
      )}
    </main>
  )
}

export default HomePage
