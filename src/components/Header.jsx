// ============================================
// 📄 Header.jsx - (Day 9: Navigation Links)
// ============================================

import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a2e] border-b-2 border-purple-600 sticky top-0 z-50">
      
      {/* 🔹 Dùng thẻ <Link> THAY CHO THẺ <a>
          Thẻ <a> của HTML làm Web tải lại toàn trang (Tắt/bật lại App từ đầu) ❌
          Thẻ <Link> của React Router chỉ "Lén" tráo đổi nội dung bên trong mà App vẫn chạy mượt mà ✅ */}
      <Link to="/" className="flex items-center gap-3">
        <span className="text-3xl">🎬</span>
        <h1 className="text-2xl font-bold text-white">
          Movie<span className="text-purple-600">Verse</span>
        </h1>
      </Link>

      <nav className="flex gap-6">
        {/* 🔹 <NavLink> là <Link> thông minh hơn: 
            Nó tự động bơm thêm thuộc tính `isActive` (đang active/đang mở) 
            để bạn dễ bôi mờ/đậm nút Menu cho khách dễ nhìn. 
        */}
        <NavLink 
          to="/" 
          // Cú pháp đặc biệt của NavLink: nhận vào 1 arrow function trả về chuỗi classes
          className={({ isActive }) => 
            `font-medium text-base transition-colors ${
              isActive ? "text-purple-400 font-bold" : "text-[#a0a0b0] hover:text-purple-400"
            }`
          }
        >
          Trang chủ
        </NavLink>
        
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => 
            `font-medium text-base transition-colors ${
              isActive ? "text-purple-400 font-bold" : "text-[#a0a0b0] hover:text-purple-400"
            }`
          }
        >
          Yêu thích
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
