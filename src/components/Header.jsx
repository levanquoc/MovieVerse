// ============================================
// 📄 Header.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

function Header() {
  return (
    // 🔹 Dùng className thay vì style={{...}}
    // Flexbox: flex, justify-between, items-center
    // Padding: py-4 (padding y = 16px), px-8 (padding x = 32px)
    // Colors: bg-[#1a1a2e], border-b-2, border-purple-600
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a2e] border-b-2 border-purple-600">

      {/* 🔹 Container chứa logo: flex, items-center, gap-3 */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🎬</span>

        <h1 className="text-2xl font-bold text-white">
          Movie<span className="text-purple-600">Verse</span>
        </h1>
      </div>

      {/* 🔹 Menu */}
      <nav className="flex gap-6">
        {/* text-[#a0a0b0], hover:text-purple-400 (đổi màu khi rê chuột), transition-colors */}
        <a href="#" className="text-[#a0a0b0] font-medium text-base hover:text-purple-400 transition-colors">Trang chủ</a>
        <a href="#" className="text-[#a0a0b0] font-medium text-base hover:text-purple-400 transition-colors">Phim</a>
        <a href="#" className="text-[#a0a0b0] font-medium text-base hover:text-purple-400 transition-colors">Yêu thích</a>
      </nav>
    </header>
  )
}

// ❌ ĐÃ XÓA toàn bộ block const styles = {...} 🎉 
export default Header
