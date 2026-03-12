// ============================================
// 📄 App.jsx - Component gốc (Day 5 - Nâng cấp)
// ============================================
//
// 🧠 BÀI HỌC BỔ SUNG: Nâng State lên trên (Lifting State Up)
// 
// Vấn đề:
// - Bấm Tìm kiếm ở Hero -> thay đổi danh sách ở MovieList.
// - 2 component Hero và MovieList là "Anh Em" (cùng nằm trong App).
// - React KHÔNG THỂ truyền dữ liệu trực tiếp giữa 2 Anh Em!
//
// Cách giải quyết:
// - Đưa State "Từ khóa tìm kiếm" lên Component CHA chung gần nhất (là App).
// - Truyền hàm (Callback) xuống Hero để Hero gọi khi có tìm kiếm.
// - Truyền từ khóa tìm kiếm (searchQuery) xuống MovieList để nó lọc phim.
//
// SƠ ĐỒ DATA:
//         [App state: searchQuery]
//        /                        \
//     (Hàm nhận Keyword)    (Biến Lọc Keyword)
//      /                            \
//   Hero                         MovieList
//    |
//  SearchBar
// ============================================

import { useState } from 'react' // Import useState
import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

// Import sẵn data phim vào App để truyền cho List
import { sampleMovies } from './data/sampleMovies'

function App() {
  // 🔹 STATE 1: Lưu từ khóa đang lọc (Search Query)
  const [searchQuery, setSearchQuery] = useState('')

  // 🔹 HÀM CALLBACK: Hàm này được truyền xuống Hero -> SearchBar
  // Khi SearchBar bấm Submit, nó sẽ "gọi ngược" hàm này và nhét chữ người dùng gõ vào đây
  const handleSearch = (keyword) => {
    // Lưu từ khóa nhận được vào State của App
    setSearchQuery(keyword)
    
    // Gợi ý cho học viên: Log ra xem App có nhận được chữ chưa
    console.log("App nhận được lệnh tìm từ khóa:", keyword)
  }

  // 🔹 LOGIC LỌC PHIM:
  // Nếu searchQuery rỗng -> Giữ nguyên danh sách
  // Nếu có chữ -> Lọc ra những phim có `title` chứa chữ đỏ (bỏ qua viết hoa viết thường)
  const filteredMovies = sampleMovies.filter((movie) => 
     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="app">
      <Header />

      {/* 🔹 Chuyển hàm handleSearch xuống Hero */}
      <Hero onSearch={handleSearch} />

      {/* 🔹 Truyền danh sách phim (Đã bị lọc) xuống MovieList */}
      <MovieList movies={filteredMovies} searchQuery={searchQuery} />

      <Footer />
    </div>
  )
}

export default App
