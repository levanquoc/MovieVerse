// ============================================
// 📄 Badge.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

function Badge({ children, type = 'rating', value }) {
  // Thay thế object {bg, text} bằng chuỗi Tailwind Class
  let currentClasses = "bg-gray-700 text-gray-300";

  const getRatingClasses = (score) => {
    if (score >= 8) return "bg-green-500 text-white"
    if (score >= 6) return "bg-yellow-500 text-white"
    return "bg-red-500 text-white"
  }

  if (type === 'rating') {
    currentClasses = getRatingClasses(value);
  } else if (type === 'genre') {
    currentClasses = "bg-purple-600/20 text-purple-400"; // "/20" = 20% opacity
  } else if (type === 'hot') {
    currentClasses = "bg-red-500/20 text-red-400";
  }

  return (
    // inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold text-[13px]
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold text-[13px] ${currentClasses}`}>
      {children}
    </span>
  )
}

export default Badge
