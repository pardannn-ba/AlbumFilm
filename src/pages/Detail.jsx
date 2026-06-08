import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieDetail } from '../utils/movieApi'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

const IMG_BASE = 'https://image.tmdb.org/t/p/w500'
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/original'

export default function Detail({ favorites, onFavorite }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      setError('')
      try {
        const data = await getMovieDetail(id)
        setMovie(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  const isFavorite = favorites.some((f) => f.id === movie?.id)

  if (loading) return <div className="min-h-screen bg-zinc-50"><LoadingSpinner /></div>
  if (error) return <div className="min-h-screen bg-zinc-50"><ErrorMessage message={error} /></div>
  if (!movie) return null

  return (
    <div className="min-h-screen bg-zinc-50">

      {/* Backdrop */}
      <div
        className="relative h-64 bg-zinc-800"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url(${BACKDROP_BASE}${movie.backdrop_path})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-xl text-sm hover:bg-white/30 transition"
        >
          ← Kembali
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="flex gap-6">
          <img
            src={
              movie.poster_path
                ? `${IMG_BASE}${movie.poster_path}`
                : 'https://via.placeholder.com/300x450?text=No+Image'
            }
            alt={movie.title}
            className="w-32 h-48 object-cover rounded-2xl shadow-md flex-shrink-0 -mt-16 relative z-10 border-4 border-white"
          />
          <div className="flex flex-col gap-2 pt-2">
            <h1 className="text-2xl font-bold text-zinc-800">{movie.title}</h1>
            <p className="text-zinc-400 text-sm">{movie.release_date?.slice(0, 4)}</p>
            <div className="flex gap-2 flex-wrap">
              {movie.genres?.map((g) => (
                <span
                  key={g.id}
                  className="bg-zinc-100 text-zinc-600 text-xs px-3 py-1 rounded-full"
                >
                  {g.name}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-yellow-500 font-semibold text-sm">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-zinc-400 text-sm">
                {movie.runtime} menit
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-zinc-800 font-semibold">Sinopsis</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {movie.overview || 'Sinopsis tidak tersedia.'}
          </p>
        </div>

        <button
          onClick={() => onFavorite(movie)}
          className={`w-full py-3 rounded-2xl text-sm font-medium transition ${
            isFavorite
              ? 'bg-red-50 text-red-500 hover:bg-red-100'
              : 'bg-zinc-800 text-white hover:bg-zinc-700'
          }`}
        >
          {isFavorite ? '❤️ Hapus dari Favorit' : '🤍 Tambah ke Favorit'}
        </button>

      </div>
    </div>
  )
}