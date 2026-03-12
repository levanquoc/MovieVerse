// ============================================
// 📄 App.jsx - (Day 8: useEffect & Side Effects)
// ============================================
//
// 🧠 BÀI HỌC DAY 8: useEffect (Giải quyết Side Effects)
//
// Vấn đề: 
// Từ trước đến giờ ta lấy `sampleMovies` trực tiếp (Synchronous).
// Thực tế, gọi API lấy phim mất từ 1-3 giây (Asynchronous).
// Nếu gọi API trực tiếp trong thân Component -> React sẽ gọi lại API 
// mỗi lần render (khi ta gõ chữ tìm kiếm) -> Treo máy! Lỗi vô hạn!
// 
// Giải pháp: Dùng `useEffect`
// useEffect(hàm_xử_lý, [mảng_phụ_thuộc])
// - Nếu mảng [] rỗng: Chỉ chạy 1 LẦN DUY NHẤT khi 컴 (Component) vừa bật lên.
// - Đây là nơi lý tưởng để Gọi API lấy dữ liệu đầu tiên!
// ============================================

import { useState, useEffect } from 'react' // 🔹 Import useEffect
import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner' // 🔹 Import Spinner
import { sampleMovies } from './data/sampleMovies'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // 🔹 STATE MỚI: Dữ liệu phim (ban đầu là rỗng)
  const [movies, setMovies] = useState([])
  
  // 🔹 STATE MỚI: Trạng thái đang tải chờ API (loading)
  const [isLoading, setIsLoading] = useState(true)

  // ============================================
  // 🔹 USE EFFECT: Gọi "Fake API" tự động 1 lần
  // ============================================
  useEffect(() => {
    // 1. Giả lập việc gọi máy chủ mất 1.5 giây (1500ms)
    console.log("App.jsx: Lần đầu tiên App bật lên -> Bắt đầu FETCH DATA...")
    
    const timer = setTimeout(() => {
        // 2. Sau 1.5s, lấy được dữ liệu -> Lưu vào State movies
        setMovies(sampleMovies)
        
        // 3. Tắt trạng thái Loading
        setIsLoading(false)
        console.log("App.jsx: FETCH DATA XONG! Cập nhật State...")
    }, 1500)

    // (Tùy chọn) 4. Cleanup function: Dọn dẹp bộ đếm khi Component bị hủy (rất quan trọng khi đổi trang web dài hạn)
    return () => clearTimeout(timer)
    
  }, []) // ⚠️ MẢNG RỖNG: Cực kỳ quan trọng để nó chỉ chạy 1 lần. Nếu bỏ đi, nó chạy vô hạn lần!


  const handleSearch = (keyword) => {
    setSearchQuery(keyword)
  }

  // 🔹 Lọc trên biến `movies` (State) thay vì sampleMovies tĩnh
  const filteredMovies = movies.filter((movie) => 
     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <Header />
      <Hero onSearch={handleSearch} />
      
      {/* 🔹 KỸ THUẬT RẼ NHÁNH: Đang Loading thì hiện Vòng xoay, Xong rồi mới hiện Danh sách */}
      {isLoading ? (
         <LoadingSpinner />
      ) : (
         <MovieList movies={filteredMovies} searchQuery={searchQuery} />
      )}
      
      <Footer />
    </div>
  )
}

export default App
