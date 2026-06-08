import { useState } from 'react'
import Router from './router'

export default function App() {
  const [favorites, setFavorites] = useState([])

  const handleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === movie.id)
        ? prev.filter((f) => f.id !== movie.id)
        : [...prev, movie]
    )
  }

  return <Router favorites={favorites} onFavorite={handleFavorite} />
}