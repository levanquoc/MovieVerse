// ============================================
// 📄 Hero.jsx - Component Hero Section (Phần giới thiệu chính)
// ============================================

import SearchBar from './SearchBar'

// 🔹 Nhận prop onSearch từ App truyền xuống để đưa tiếp cho SearchBar
function Hero({ onSearch }) {
  return (
    <section style={styles.hero}>
      <h2 style={styles.title}>
        Khám phá thế giới điện ảnh 🍿
      </h2>

      <p style={styles.subtitle}>
        Tìm kiếm, khám phá và lưu lại những bộ phim yêu thích của bạn.
        <br />
        Hàng nghìn bộ phim đang chờ bạn!
      </p>

      {/* 🔹 Chèn SearchBar vào thay cho Nút Khám Phá */}
      {/* Truyền tiếp onSearch cho SearchBar để khi người dùng nhấn Tìm nó sẽ gọi ngược lên */}
      <div style={styles.searchWrapper}>
         <SearchBar onSearch={onSearch} />
      </div>
      
    </section>
  )
}

const styles = {
  hero: {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    borderRadius: '0 0 40px 40px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px',
    textShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
  },
  subtitle: {
    fontSize: '18px',
    color: '#a0a0b0',
    maxWidth: '600px',
    margin: '0 auto 32px',
    lineHeight: '1.8',
  },
  searchWrapper: {
    marginTop: '30px',
    padding: '0 20px',
  }
}

export default Hero
