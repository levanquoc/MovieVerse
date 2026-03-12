// ============================================
// 📄 main.jsx - (Day 9: React Router Setup)
// ============================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 🔹 BẠN MỚI: Bọc toàn app để cấp quyền chạy đa trang
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🔹 Bọc ngoài cùng App để bật chức năng điều hướng URL */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
