// ============================================
// 📄 services/api.js - (Day 11: TMDB Integration)
// ============================================

import axios from 'axios';

// API Key (Dùng tạm cho khóa học)
const API_KEY = '046a71f6af09b759785c72e1e9d96bfc';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Prefix để load được ảnh Poster

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'vi-VN',
  },
});

// 🔹 HÀM CHUYỂN ĐỔI (Formatter):
// Vì TMDB trả về tên thuộc tính khác nhau (vd: release_date thay vì year)
// Ta cần gọt giũa lại cho vừa vặn với MovieCard của mình tránh code báo lỗi
const formatMovie = (m) => ({
  id: m.id,
  title: m.title || m.name,
  // Cắt lấy 4 số đầu tiên của ngày (vd: 2024-02-14 -> 2024)
  year: m.release_date ? m.release_date.substring(0, 4) : 'N/A',
  rating: m.vote_average,
  genre: 'Phim Rạp', // TMDB trả về mã ID Genre, tạm thời hardcode tên
  // Tránh lỗi ảnh trống
  poster: m.poster_path ? `${IMG_BASE_URL}${m.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster',
  overview: m.overview || 'Bộ phim này chưa có tóm tắt tiếng Việt.'
});


export const movieService = {
  // Lấy danh sách phim Trending
  getTrending: async () => {
    const response = await tmdbApi.get('/trending/movie/week');
    // Trả về mảng đã được format
    return response.data.results.map(formatMovie);
  },

  // Lấy phim đang Hot (Popular)
  getPopular: async () => {
    const response = await tmdbApi.get('/movie/popular');
    return response.data.results.map(formatMovie);
  },

  // Tìm kiếm
  searchMovies: async (query) => {
    const response = await tmdbApi.get('/search/movie', { params: { query } });
    return response.data.results.map(formatMovie);
  },

  // Chi tiết (Detail) - Không cần map vì đây là Object rũa luôn
  getMovieDetail: async (id) => {
    const response = await tmdbApi.get(`/movie/${id}`);
    return formatMovie(response.data);
  },
};
