// ============================================
// 📄 pages/FavoritesPage.jsx - Trang Phim Yêu Thích 
// ============================================

import SectionTitle from '../components/SectionTitle'

function FavoritesPage() {
  return (
    <main className="px-5 py-20 max-w-7xl mx-auto min-h-[60vh]">
      <SectionTitle subtitle="Danh sách những bộ phim bạn đã thả tim ❤️">
        Phim Yêu Thích Của Bạn
      </SectionTitle>

      {/* 🔹 Tạm thời để trống. Sang Day 21 (LocalStorage) ta mới có chỗ lưu thật sự */}
      <div className="text-center py-20 px-5 bg-[#1a1a2e]/40 rounded-2xl border border-dashed border-[#2a2a3e] mt-10">
        <h3 className="text-xl font-bold text-white mb-2">Chưa có bộ phim yêu thích nào</h3>
        <p className="text-gray-400">Hãy về Trang Chủ và thả tim cho phim bạn thích nhé!</p>
      </div>
    </main>
  )
}

export default FavoritesPage
