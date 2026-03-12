// ============================================
// 📄 Badge.jsx - Component nhãn dán ⭐
// ============================================
//
// 🧠 BÀI HỌC DAY 6: Conditional Rendering Nâng Cao
//
// Vấn đề:
// - Ngày 2 ta đã dùng if/else quá dài dòng để lấy màu cho Rating.
//   if (score >= 8) return '#22c55e'
//   if (score >= 6) return '#eab308'
//
// Giải pháp sạch hơn (Cleaner Code):
// 1. Dùng Object Map (Từ điển)
// 2. Tách thành một Component nhỏ chuyên biệt cho việc hiển thị "Nhãn"
//
// ============================================

function Badge({ children, type = 'rating', value }) {
  // ============================================
  // 🔹 CÁCH 1: Dùng hàm + return sớm (Giống Ngày 2)
  // Phù hợp khi logic là các KHOẢNG ĐIỀU KIỆN ( >= 8, >= 6)
  // ============================================
  const getRatingStyle = (score) => {
    if (score >= 8) return { bg: '#22c55e', text: '#ffffff' } // Xanh lá
    if (score >= 6) return { bg: '#eab308', text: '#ffffff' } // Vàng
    return                 { bg: '#ef4444', text: '#ffffff' } // Đỏ
  }

  // ============================================
  // 🔹 CÁCH 2: Dùng Switch / Biến thể (Variants)
  // Phù hợp khi các ĐIỀU KIỆN CỤ THỂ ( type === 'genre', type === 'hot' )
  // ============================================
  let currentStyle = { bg: '#374151', text: '#d1d5db' }; // Mặc định là xám

  if (type === 'rating') {
    currentStyle = getRatingStyle(value);
  } else if (type === 'genre') {
    currentStyle = { bg: 'rgba(124, 58, 237, 0.2)', text: '#a78bfa' }; // Tím nhạt
  } else if (type === 'hot') {
    currentStyle = { bg: 'rgba(239, 68, 68, 0.2)', text: '#fca5a5' }; // Đỏ nhạt
  }

  return (
    <span style={{
      ...styles.badge,
      backgroundColor: currentStyle.bg,
      color: currentStyle.text,
    }}>
      {children}
    </span>
  )
}

const styles = {
  badge: {
    display: 'inline-flex', // Để căn giữa icon và chữ
    alignItems: 'center',
    gap: '4px',
    padding: '4px 10px',
    borderRadius: '8px', // Bo hình chữ nhật tròn thay vì con nhộng
    fontWeight: '600',
    fontSize: '13px',
  }
}

export default Badge
