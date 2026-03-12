// ============================================
// 📄 Hero.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

import SearchBar from './SearchBar'

function Hero({ onSearch }) {
  return (
    // 🔹 Tailwind Classes:
    // text-center, py-20 (80px), px-5 (20px)
    // bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]
    // rounded-b-[40px] (bo tròn góc dưới 40px)
    <section className="text-center py-20 px-5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-b-[40px]">
      
      {/* text-5xl (48px), font-bold text-white mb-4
          drop-shadow-[0_0_20px_rgba(124,58,237,0.5)] -> Viết custom shadow trong [] */}
      <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">
        Khám phá thế giới điện ảnh 🍿
      </h2>

      {/* text-lg (18px), text-[#a0a0b0], max-w-[600px] mx-auto (chính giữa), mb-8, leading-relaxed */}
      <p className="text-lg text-[#a0a0b0] max-w-[600px] mx-auto mb-8 leading-relaxed">
        Tìm kiếm, khám phá và lưu lại những bộ phim yêu thích của bạn.
        <br />
        Hàng nghìn bộ phim đang chờ bạn!
      </p>

      {/* mt-8, px-5 */}
      <div className="mt-8 px-5">
         <SearchBar onSearch={onSearch} />
      </div>
      
    </section>
  )
}

export default Hero
