import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Favorite from '../pages/Favorite'

export default function Router({ favorites, onFavorite }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} onFavorite={onFavorite} />} />
        <Route path="/detail/:id" element={<Detail favorites={favorites} onFavorite={onFavorite} />} />
        <Route path="/favorite" element={<Favorite favorites={favorites} onFavorite={onFavorite} />} />
      </Routes>
    </BrowserRouter>
  )
}