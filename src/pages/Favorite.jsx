import MovieCard from '../components/MovieCard'

export default function Favorite({ favorites, onFavorite }) {
    return (
        <div className="min-h-screen bg-zinc-50">
            <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">

                <div>
                    <h2 className="text-xl font-bold text-zinc-800">Favorit ❤️</h2>
                    <p className="text-zinc-400 text-sm mt-1">
                        {favorites.length} film tersimpan
                    </p>
                </div>

                {favorites.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-3">🎬</p>
                        <p className="text-zinc-400 text-sm">
                            Belum ada film favorit. Tambahkan dari halaman utama!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {favorites.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onFavorite={onFavorite}
                                isFavorite={true}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}