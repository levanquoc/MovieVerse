// ============================================
// 📄 SectionTitle.jsx - Component tiêu đề section
// ============================================
//
// 🧠 BÀI HỌC: "children" prop — Prop đặc biệt
//
// "children" là nội dung BÊN TRONG thẻ component:
//   <SectionTitle>🎬 Phim Đề Xuất</SectionTitle>
//                 ↑________________↑
//                 Đây chính là children!
//
// children có thể là: text, JSX, component khác, hoặc kết hợp.
// Dùng children khi component chỉ cần "bọc" nội dung bên trong.
// ============================================

function SectionTitle({ children, subtitle }) {
  // 🔹 children: nội dung chính (bắt buộc)
  // 🔹 subtitle: mô tả phụ (tùy chọn)
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{children}</h2>
      {/* 🔹 Chỉ hiện subtitle nếu được truyền */}
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '15px',
    color: '#6b7280',
    marginTop: '6px',
  },
}

export default SectionTitle
