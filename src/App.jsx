// ============================================
// 📄 App.jsx - (Day 9: React Router - Routing)
// ============================================
//
// 🧠 BÀI HỌC DAY 9: Định tuyến Đa Trang (Routing)
// Trước đây: App.jsx chứa cứng ngắc [ Header + Hero + List + Footer ]
// Hiện tại:  App.jsx trở thành một KHUNG GIAO DIỆN CHUNG (Layout Wrapper).
// Ở giữa Header và Footer sẽ là "Cái Cổng Chuyển Đổi" (Routes)
// 
// <Routes>
//    - Người dùng vào "/"       -> Load nội dung <HomePage />
//    - Người dùng vào "/saved"  -> Load nội dung <FavoritesPage />
//    - Các lỗi đánh chữ bậy bạ  -> Load nội dung 404 (Trang không tồn tại)
// </Routes>
// ============================================

import { Routes, Route } from 'react-router-dom' // 🔹 Import bộ nắn Route

// Layout Cố định (Lúc nào cũng có)
import Header from './components/Header'
import Footer from './components/Footer'

// Các Trang con (Sẽ hoán đổi cho nhau tùy URL)
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import MovieDetailPage from './pages/MovieDetailPage' // 🔹 BẠN MỚI: Import Trang Chi Tiết Phim

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header LUÔN HIỂN THỊ ở mọi trang (Không nằm trong Route) */}
      <Header />
      
      {/* 2. CHỖ HOÁN ĐỔI NỘI DUNG (Content Outlet) 
          Phần flex-grow đảm bảo chỗ này đẩy Footer xuống tận cùng nếu trang ngắn
      */}
      <div className="flex-grow">
        <Routes>
          {/* Quy định: Đường dẫn "/" sẽ mở HomePage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Quy định: Đường dẫn "/favorites" sẽ mở Trang Yêu Thích */}
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* Quy định: Dấu hai chấm ":" tạo ra Biến Động trên URL (Dynamic Route) */}
          {/* Ví dụ /movie/1 hay /movie/999 đều rơi vào trang này */}
          <Route path="/movie/:id" element={<MovieDetailPage />} />

          {/* Quy định: Bất kỳ URL rác nào (*) cũng rơi vào đây */}
          <Route path="*" element={
             <div className="text-center py-32 text-white">Lỗi 404: Không tìm thấy Trang!</div>
          } />
        </Routes>
      </div>
      
      {/* 3. Footer LUÔN HIỂN THỊ */}
      <Footer />
    </div>
  )
}

export default App
