// ============================================
// 📄 MovieList.jsx - Phiên bản LỌC PHIM (Day 5) ⭐
// ============================================
//
// 🧠 BÀI HỌC: Render danh sách RỖNG (Empty State)
//
// Khi bạn truyền dữ liệu từ cha xuống con, 
// nếu không có dữ liệu (mảng rỗng), ta cần phải
// báo cho người dùng biết (vd: "Không tìm thấy phim!")
//
// ============================================

import MovieCard from './MovieCard'
import SectionTitle from './SectionTitle'

// 🔹 Thay vì lấy toàn bộ sampleMovies từ trong file
// 🔹 Ta sẽ NHẬN mảng phim từ Cha (App) qua Props
function MovieList({ movies, searchQuery }) {
  
  // 🔹 ĐẾM SỐ PHIM NHẬN ĐƯỢC
  const movieCount = movies.length;

  return (
    <section style={styles.section}>
      <SectionTitle 
        // Thay đổi subtitle dựa trên việc đang tìm hay đang xem tất cả
        subtitle={
          searchQuery 
          ? `Đang tìm kiếm: "${searchQuery}" (${movieCount} kết quả)` 
          : "Những bộ phim được đánh giá cao nhất"
        }
      >
        🎬 Phim Đề Xuất
      </SectionTitle>

      {/* ============================================
          🔹 KIỂM TRA MẢNG RỖNG (Empty State)
          - Nếu movieCount === 0 -> Hiển thị text "Không tìm thấy"
          - Nếu có phim -> Vẽ ra cái Grid như ngày 3
          ============================================ */}
      {movieCount === 0 ? (
        <div style={styles.emptyState}>
          <h3>😔 Rất tiếc! Không tìm thấy phim nào.</h3>
          <p>Thử tìm bằng một từ khóa khác nhé.</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {/* Lặp qua danh sách phim TỪ PROPS */}
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

const styles = {
  section: {
    padding: '40px 20px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: 'rgba(26, 26, 46, 0.4)',
    borderRadius: '16px',
    border: '1px dashed #2a2a3e',
  }
}

export default MovieList
