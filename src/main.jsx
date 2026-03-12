// ============================================
// 📄 main.jsx - Entry Point (Điểm vào) của ứng dụng React
// ============================================

// 🔹 Import StrictMode - chế độ nghiêm ngặt giúp phát hiện lỗi tiềm ẩn
//    StrictMode sẽ render component 2 lần trong development để kiểm tra
import { StrictMode } from 'react'

// 🔹 Import createRoot - API mới của React 18+ để render app vào DOM
//    Trước đây dùng ReactDOM.render(), nay dùng createRoot() cho tốt hơn
import { createRoot } from 'react-dom/client'

// 🔹 Import file CSS chính
import './index.css'

// 🔹 Import component App - component gốc (root component) của toàn bộ ứng dụng
import App from './App.jsx'

// ============================================
// 🚀 RENDER ỨNG DỤNG
// ============================================

// 1. document.getElementById('root') → Tìm thẻ <div id="root"> trong index.html
// 2. createRoot()                    → Tạo "gốc" React tại thẻ đó
// 3. .render()                       → Render component <App /> vào DOM
// 4. <StrictMode>                    → Bao bọc App để bật chế độ kiểm tra lỗi

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
