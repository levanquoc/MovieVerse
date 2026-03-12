// ============================================
// 📄 Footer.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // Tailwind classes
    <footer className="text-center py-6 bg-[#1a1a2e] border-t border-[#2a2a3e] mt-16">
      <p className="text-gray-500 text-sm">
        © {currentYear} MovieVerse. Được xây dựng với ❤️ và React + Tailwind.
      </p>
    </footer>
  )
}

// ❌ ĐÃ XÓA block const styles 🎉
export default Footer
