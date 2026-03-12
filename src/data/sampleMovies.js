// ============================================
// 📄 data/sampleMovies.js - Dữ liệu phim mẫu
// ============================================
// Đây là dữ liệu tĩnh (static data) để luyện tập.
// Từ Day 11 chúng ta sẽ fetch dữ liệu thật từ TMDB API.
//
// 🧠 KHÁI NIỆM: Array of Objects
// - Mỗi bộ phim là 1 object {} chứa các thông tin
// - Tất cả phim nằm trong 1 array []
// - Đây là cấu trúc dữ liệu phổ biến nhất trong React

const sampleMovies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    year: 2024,
    rating: 8.8,
    genre: 'Khoa học viễn tưởng',
    // Poster từ TMDB (image URL công khai)
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    overview: 'Paul Atreides hợp nhất với người Fremen để báo thù những kẻ đã phá hủy gia đình anh.',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    year: 2023,
    rating: 8.5,
    genre: 'Chính kịch',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    overview: 'Câu chuyện về J. Robert Oppenheimer và vai trò của ông trong việc phát triển bom nguyên tử.',
  },
  {
    id: 3,
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    rating: 8.7,
    genre: 'Hoạt hình',
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    overview: 'Miles Morales trở lại trong cuộc phiêu lưu xuyên đa vũ trụ.',
  },
  {
    id: 4,
    title: 'The Batman',
    year: 2022,
    rating: 7.8,
    genre: 'Hành động',
    poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    overview: 'Batman khám phá sự tham nhũng ở Gotham City khi truy lùng kẻ giết người Riddler.',
  },
  {
    id: 5,
    title: 'Everything Everywhere All at Once',
    year: 2022,
    rating: 8.0,
    genre: 'Phiêu lưu',
    poster: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
    overview: 'Một phụ nữ nhập cư khám phá các vũ trụ song song để cứu thế giới.',
  },
  {
    id: 6,
    title: 'Interstellar',
    year: 2014,
    rating: 8.7,
    genre: 'Khoa học viễn tưởng',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    overview: 'Một nhóm phi hành gia du hành qua lỗ giun để tìm ngôi nhà mới cho nhân loại.',
  },
]

// 🔹 Named export - xuất bằng tên
// Khi import phải dùng: import { sampleMovies } from '...'
// ↕️ Khác với default export: import sampleMovies from '...'
export { sampleMovies }
