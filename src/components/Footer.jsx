// ============================================
// 📄 Footer.jsx - Component Footer (Phần chân trang)
// ============================================

function Footer() {
  // 🔹 Lấy năm hiện tại tự động bằng JavaScript
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        {/* 🔹 Dấu {} trong JSX → viết JavaScript expression */}
        {/* currentYear sẽ hiển thị năm hiện tại: 2026 */}
        © {currentYear} MovieVerse. Được xây dựng với ❤️ và React.
      </p>
    </footer>
  )
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '24px',
    backgroundColor: '#1a1a2e',
    borderTop: '1px solid #2a2a3e',
    marginTop: '60px',
  },
  text: {
    color: '#6b7280',
    fontSize: '14px',
  },
}

export default Footer
