// ============================================
// 📄 SearchBar.jsx - Thanh tìm kiếm phim ⭐
// ============================================
//
// 🧠 BÀI HỌC DAY 5: Event Handling & Forms
//
// 1. EVENT HANDLING (Xử lý sự kiện)
// - Đặt tên prop bằng camelCase: onClick, onChange, onSubmit
// - Truyền một hàm (function), KHÔNG phải gọi hàm:
//   ✅ ĐÚNG: onClick={handleClick}
//   ❌ SAI:  onClick={handleClick()}  <- Nó sẽ chạy ngay lập tức!
//
// 2. CONTROLLED COMPONENTS (Form được kiểm soát)
// Trong HTML thường, <input> tự nhớ chữ bạn gõ.
// Trong React, ta muốn React kiểm soát toàn bộ:
// - B1: Lưu chữ đang gõ vào State (ví dụ: query)
// - B2: Gán value của input = state (value={query})
// - B3: Mỗi khi gõ (onChange), cập nhật state (setQuery)
// ============================================

import { useState } from 'react'

// Cung cấp hàm onSearch từ component Cha để nhận dữ liệu khi submit
function SearchBar({ onSearch }) {
  // ============================================
  // 🔹 STATE CHO INPUT
  // ============================================
  // Lưu từ khóa tìm kiếm. Ban đầu là rỗng.
  const [query, setQuery] = useState('')

  // ============================================
  // 🔹 EVENT HANDLERS
  // ============================================

  // Hàm xử lý khi người dùng gõ vào ô input (onChange)
  // 'e' (event object) chứa thông tin về sự kiện gõ phím
  const handleChange = (e) => {
    // Lấy nội dung đang gõ bằng e.target.value
    setQuery(e.target.value)
    
    // THỰC HÀNH: Bạn có thể log ra để xem state thay đổi liên tục
    // console.log("Đang gõ:", e.target.value)
  }

  // Hàm xử lý khi nhấn nút Submit hoặc gõ Enter trong form (onSubmit)
  const handleSubmit = (e) => {
    // ⚠️ QUAN TRỌNG: Ngăn chặn reload trang mặc định của Form HTML
    e.preventDefault()

    // Chỉ tìm kiếm nếu người dùng có gõ chữ (trim() cắt khoảng trắng dư)
    if (query.trim() !== '') {
      // Gọi hàm onSearch được truyền từ Cha, truyền lên từ khóa
      onSearch(query)
      
      // Tùy chọn: Xóa text input sau khi tìm kiếm thành công
      // setQuery('')
    }
  }

  return (
    // 🔹 Dùng thẻ <form> bao ngoài để lấy hiệu ứng bấm Enter tự submit
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      {/* ============================================
          🔹 CONTROLLED INPUT
          - value={query} -> React quyết định hiện chữ gì
          - onChange={handleChange} -> Người dùng gõ tới đâu, báo React sửa state tới đó
          ============================================ */}
      <input
        type="text"
        placeholder="Nhập tên phim cần tìm..."
        value={query}
        onChange={handleChange}
        style={styles.input}
      />
      
      <button type="submit" style={styles.button}>
        Tìm kiếm 🔍
      </button>
    </form>
  )
}

const styles = {
  formContainer: {
    display: 'flex',
    gap: '10px',
    maxWidth: '500px',
    margin: '0 auto', // Căn giữa toàn bộ thanh search
    width: '100%',
  },
  input: {
    flex: 1, // Chiếm toàn bộ phần trống còn lại
    padding: '12px 20px',
    borderRadius: '30px',
    border: '2px solid #2a2a3e',
    backgroundColor: 'rgba(26, 26, 46, 0.8)',
    color: '#ffffff',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s', // Hiệu ứng mượt khi focus
  },
  button: {
    padding: '0 24px',
    borderRadius: '30px',
    backgroundColor: '#7c3aed', // Tím
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
}

export default SearchBar
