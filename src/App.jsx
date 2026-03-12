// ============================================
// 📄 App.jsx - (Day 7: Tailwind CSS Refactor)
// ============================================

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import { sampleMovies } from './data/sampleMovies'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (keyword) => {
    setSearchQuery(keyword)
  }

  const filteredMovies = sampleMovies.filter((movie) => 
     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    // Xóa className="app" dư thừa vì background đã cấu hình trong index.css
    <div>
      <Header />
      <Hero onSearch={handleSearch} />
      <MovieList movies={filteredMovies} searchQuery={searchQuery} />
      <Footer />
    </div>
  )
}

export default App
