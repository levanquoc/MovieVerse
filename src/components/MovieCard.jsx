// ============================================
// 📄 MovieCard.jsx - (Day 6: Refactor với Badge) ⭐
// ============================================

import { useState } from 'react'
import Badge from './Badge' // Nhập Component Badge mới tạo

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

  // ❌ TẠM BIỆT: Hàm getRatingColor dài thòng ở đây! (Đã chuyển xưng Badge lo)

  return (
    <div style={styles.card}>
      <div style={styles.posterContainer}>
        <img src={poster} alt={title} style={styles.poster} />
        <div onClick={toggleFavorite} style={styles.favoriteBtn}>
          {isFavorite ? '❤️' : '🤍'}
        </div>
        
        {/* ============================================
            🔹 CONDITIONAL RENDERING (Logical AND &&)
            Chỉ hiện Badge "🔥 HOT" đè lên hình rạp NẾU rating >= 8 
            ============================================ */}
        {rating >= 8 && (
           <div style={styles.hotBadgeContainer}>
              <Badge type="hot">🔥 HOT</Badge>
           </div>
        )}
      </div>

      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>

        <div style={styles.meta}>
          <span style={styles.metaItem}>📅 {year}</span>
          {/* 🔹 Render Genre bằng Component Badge thay cho Chữ Tròn */}
          <Badge type="genre">🎭 {genre}</Badge>
        </div>

        <div style={styles.ratingRow}>
          {/* 🔹 Render Rating bằng Component Badge (Tự tìm màu luôn) */}
          <Badge type="rating" value={rating}>
            ⭐ {rating.toFixed(1)}
          </Badge>
          
          <span style={styles.views}>👁️ {views} lượt xem</span>
        </div>

        {overview && (
          <p style={styles.overview}>
            {overview.length > 80
              ? overview.substring(0, 80) + '...'
              : overview
            }
          </p>
        )}

        {/* 🔹 Render Text với Ternary */}
        <button onClick={handleView} style={styles.button}>
          {rating >= 8 ? '🔥 Đặt vé ngay' : '👀 Xem chi tiết'}
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #2a2a3e',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    position: 'relative',
  },
  posterContainer: {
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    display: 'block',
  },
  favoriteBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    cursor: 'pointer',
    backdropFilter: 'blur(4px)',
    userSelect: 'none',
    transition: 'transform 0.2s',
  },
  hotBadgeContainer: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    // Căn trái cho chữ HOT
  },
  info: {
    padding: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '10px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  metaItem: {
    fontSize: '14px',
    color: '#9ca3af',
  },
  ratingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  views: {
    fontSize: '13px',
    color: '#9ca3af',
  },
  overview: {
    fontSize: '13px',
    color: '#6b7280',
    lineHeight: '1.5',
    marginBottom: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#7c3aed',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
}

export default MovieCard
