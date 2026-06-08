import { Link } from 'react-router-dom'

const IMG_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ movie, onFavorite, isFavorite }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden group">
            <Link to={`/detail/${movie.id}`}>
                <div className="relative overflow-hidden">
                    <img
                        src={
                            movie.poster_path
                                ? `${IMG_BASE}${movie.poster_path}`
                                : 'https://via.placeholder.com/300x450?text=No+Image'
                        }
                        alt={movie.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 text-yellow-400 text-xs px-2 py-1 rounded-lg font-medium">
                        ⭐ {movie.vote_average?.toFixed(1)}
                    </div>
                </div>
            </Link>

            <div className="p-3 flex items-start justify-between gap-2">
                <div>
                    <h3 className="text-sm font-semibold text-zinc-800 line-clamp-1">
                        {movie.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                        {movie.release_date?.slice(0, 4)}
                    </p>
                </div>
                <button
                    onClick={() => onFavorite(movie)}
                    className="text-lg flex-shrink-0 mt-0.5"
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    )
}