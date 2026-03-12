// ============================================
// 📄 SectionTitle.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

function SectionTitle({ children, subtitle }) {
  return (
    // Chỉ giữ lại một vài props, xóa object styles
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white mb-2">{children}</h2>
      {subtitle && <p className="text-[15px] text-gray-500">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
