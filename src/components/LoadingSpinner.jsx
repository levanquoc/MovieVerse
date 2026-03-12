// ============================================
// 📄 LoadingSpinner.jsx - (Day 8: useEffect & Side Effects)
// ============================================

function LoadingSpinner() {
  return (
    // flex flex-col items-center justify-center py-20
    <div className="flex flex-col items-center justify-center py-20">
      
      {/* Vòng tròn xoay (Spinner) - dùng border-t-transparent để tạo khoảng trống hở cho vòng xoay */}
      <div className="w-16 h-16 border-4 border-purple-600/30 border-t-purple-600 rounded-full animate-spin"></div>
      
      <p className="mt-4 text-purple-400 font-medium">Đang tải dữ liệu phim...</p>
    </div>
  )
}

export default LoadingSpinner
