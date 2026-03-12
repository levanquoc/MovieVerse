// ============================================
// 📄 SearchBar.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() !== '') {
      onSearch(query)
    }
  }

  return (
    // flex gap-2.5 (10px), max-w-[500px] w-full mx-auto
    <form onSubmit={handleSubmit} className="flex gap-2.5 max-w-[500px] w-full mx-auto">
      
      {/* flex-1 (chiếm phần còn lại) 
          py-3 px-5 rounded-full (bo tròn 30px)
          border-2 border-[#2a2a3e] bg-[#1a1a2e]/80 text-white text-base
          outline-none focus:border-purple-600 transition-colors */}
      <input
        type="text"
        placeholder="Nhập tên phim cần tìm..."
        value={query}
        onChange={handleChange}
        className="flex-1 py-3 px-5 rounded-full border-2 border-[#2a2a3e] bg-[#1a1a2e]/80 text-white text-base outline-none focus:border-purple-600 transition-colors"
      />
      
      {/* px-6 rounded-full bg-purple-600 text-white font-bold cursor-pointer hover:bg-purple-700 transition-colors */}
      <button 
        type="submit" 
        className="px-6 rounded-full bg-purple-600 text-white font-bold cursor-pointer hover:bg-purple-700 transition-colors"
      >
        Tìm kiếm 🔍
      </button>
    </form>
  )
}

export default SearchBar
