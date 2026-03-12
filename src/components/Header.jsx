// ============================================
// 📄 Header.jsx - Component Header (Thanh điều hướng)
// ============================================
// ĐÂY LÀ COMPONENT ĐẦU TIÊN BẠN TỰ VIẾT! 🎉
//
// 🧠 KHÁI NIỆM: Component là gì?
// - Component = một "mảnh ghép" giao diện có thể tái sử dụng
// - Giống như LEGO, bạn ghép nhiều component lại thành trang web
// - Mỗi component là một function trả về JSX (HTML-like syntax)
//
// 📏 QUY TẮC ĐẶT TÊN:
// - Tên component LUÔN viết HOA chữ cái đầu: Header, MovieCard, App
// - Tên file trùng tên component: Header.jsx
// ============================================

// 🔹 Function Component - cách phổ biến nhất để tạo component
// "function Header()" → khai báo component tên "Header"
// Component này trả về JSX - giao diện của header

function Header() {
  // 🔹 return (...) → trả về JSX
  // JSX trông giống HTML nhưng thực ra là JavaScript!
  return (
    // 🔹 <header> → thẻ HTML semantic cho phần header
    <header style={styles.header}>

      {/* 🔹 <div> chứa logo và tên app */}
      <div style={styles.logoContainer}>
        {/* 🔹 Emoji làm logo tạm thời */}
        <span style={styles.logoIcon}>🎬</span>

        {/* 🔹 Tên ứng dụng */}
        <h1 style={styles.logoText}>
          Movie<span style={styles.logoHighlight}>Verse</span>
        </h1>
      </div>

      {/* 🔹 Navigation - menu điều hướng */}
      <nav style={styles.nav}>
        <a href="#" style={styles.navLink}>Trang chủ</a>
        <a href="#" style={styles.navLink}>Phim</a>
        <a href="#" style={styles.navLink}>Yêu thích</a>
      </nav>
    </header>
  )
}

// ============================================
// 🎨 STYLES - CSS-in-JS (viết CSS bằng JavaScript object)
// ============================================
// Đây là cách viết CSS trực tiếp trong JS
// Sau này chúng ta sẽ chuyển sang TailwindCSS (Day 7)

const styles = {
  header: {
    display: 'flex',                    // Flexbox - xếp ngang
    justifyContent: 'space-between',    // Đẩy 2 bên
    alignItems: 'center',              // Căn giữa dọc
    padding: '16px 40px',              // Padding trên-dưới & trái-phải
    backgroundColor: '#1a1a2e',        // Nền tối
    borderBottom: '2px solid #7c3aed', // Viền dưới màu tím
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',                       // Khoảng cách giữa icon và text
  },
  logoIcon: {
    fontSize: '32px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoHighlight: {
    color: '#7c3aed',                  // Chữ "Verse" màu tím nổi bật
  },
  nav: {
    display: 'flex',
    gap: '24px',                       // Khoảng cách giữa các link
  },
  navLink: {
    color: '#a0a0b0',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',          // Hiệu ứng chuyển màu mượt
  },
}

// ============================================
// 🔹 EXPORT - "xuất" component để file khác dùng được
// ============================================
// "export default" → xuất mặc định, khi import không cần {}
// Ví dụ: import Header from './Header'  ← không cần {}

export default Header
