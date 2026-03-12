// ============================================
// 📄 pages/HomePage.jsx - Trang Chủ
// ============================================

import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import MovieList from '../components/MovieList'
import LoadingSpinner from '../components/LoadingSpinner'
import { sampleMovies } from '../data/sampleMovies'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
        setMovies(sampleMovies)
        setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, []) 

  const handleSearch = (keyword) => {
    setSearchQuery(keyword)
  }

  const filteredMovies = movies.filter((movie) => 
     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main>
      <Hero onSearch={handleSearch} />
      
      {isLoading ? (
         <LoadingSpinner />
      ) : (
         <MovieList movies={filteredMovies} searchQuery={searchQuery} />
      )}
    </main>
  )
}

export default HomePage
