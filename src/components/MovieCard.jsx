// ============================================
// 📄 MovieCard.jsx - (Day 7: Tailwind CSS Refactor) ⭐
// ============================================

import { useState } from 'react'
import Badge from './Badge'

function MovieCard({
  title,
  year,
  rating = 0,
  genre = 'Chưa phân loại',
  poster = 'https://via.placeholder.com/500x750?text=No+Poster',
  overview = '',
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [views, setViews] = useState(Math.floor(Math.random() * 1000))

  const toggleFavorite = () => setIsFavorite(!isFavorite)
  const handleView = () => setViews(views + 1)

  return (
    // bg-[#1a1a2e] rounded-2xl overflow-hidden border border-[#2a2a3e] 
    // transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)]
    // cursor-pointer relative group
    <div className="bg-[#1a1a2e] rounded-2xl overflow-hidden border border-[#2a2a3e] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] cursor-pointer relative group">
      
      <div className="relative">
        {/* w-full h-[400px] object-cover block */}
        <img src={poster} alt={title} className="w-full h-[400px] object-cover block" />
        
        {/* Nút Favorite: absolute top-3 right-3
            bg-black/60 rounded-full w-10 h-10 flex items-center justify-center 
            text-xl cursor-pointer backdrop-blur-sm select-none transition-transform hover:scale-110 */}
        <div 
          onClick={toggleFavorite} 
          className="absolute top-3 right-3 bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer backdrop-blur-sm select-none transition-transform hover:scale-110"
        >
          {isFavorite ? '❤️' : '🤍'}
        </div>
        
        {rating >= 8 && (
           <div className="absolute top-4 left-4">
              <Badge type="hot">🔥 HOT</Badge>
           </div>
        )}
      </div>

      {/* p-4 */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2.5 truncate" title={title}>{title}</h3>

        {/* flex items-center gap-3 mb-3 */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm text-gray-400">📅 {year}</span>
          <Badge type="genre">🎭 {genre}</Badge>
        </div>

        {/* flex justify-between items-center mb-3 */}
        <div className="flex justify-between items-center mb-3">
          <Badge type="rating" value={rating}>
            ⭐ {rating.toFixed(1)}
          </Badge>
          
          <span className="text-[13px] text-gray-400">👁️ {views} lượt xem</span>
        </div>

        {overview && (
          // text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-2
          <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {overview}
          </p>
        )}

        {/* w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-lg text-sm font-semibold cursor-pointer transition-colors mt-auto */}
        <button 
          onClick={handleView} 
          className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-lg text-sm font-semibold cursor-pointer transition-colors"
        >
          {rating >= 8 ? '🔥 Đặt vé ngay' : '👀 Xem chi tiết'}
        </button>
      </div>
    </div>
  )
}

// ❌ XÓA SẠCH CSS Object 🎉🎉🎉
export default MovieCard
