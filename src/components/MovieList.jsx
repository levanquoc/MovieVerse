// ============================================
// 📄 MovieList.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

import MovieCard from './MovieCard'
import SectionTitle from './SectionTitle'

function MovieList({ movies, searchQuery }) {
  const movieCount = movies.length;

  return (
    // section: px-5 py-10 (40px) max-w-7xl (1280px) mx-auto
    <section className="px-5 py-10 max-w-7xl mx-auto">
      <SectionTitle 
        subtitle={
          searchQuery 
          ? `Đang tìm kiếm: "${searchQuery}" (${movieCount} kết quả)` 
          : "Những bộ phim được đánh giá cao nhất"
        }
      >
        🎬 Phim Đề Xuất
      </SectionTitle>

      {/* Grid: grid, grid-cols-[repeat(auto-fill,minmax(280px,1fr))], gap-6 (24px) */}
      {movieCount === 0 ? (
        // Empty State: text-center py-16 px-5 bg-[#1a1a2e]/40 rounded-2xl border border-dashed border-[#2a2a3e]
        <div className="text-center py-16 px-5 bg-[#1a1a2e]/40 rounded-2xl border border-dashed border-[#2a2a3e]">
          <h3 className="text-xl font-bold text-white mb-2">😔 Rất tiếc! Không tìm thấy phim nào.</h3>
          <p className="text-gray-400">Thử tìm bằng một từ khóa khác nhé.</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      )}

    </section>
  )
}

export default MovieList
