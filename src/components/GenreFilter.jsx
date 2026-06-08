export default function GenreFilter({ genres, selectedGenre, onSelect }) {
    return (
        <div className="flex gap-2 flex-wrap">
            <button
                onClick={() => onSelect(null)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${selectedGenre === null
                        ? 'bg-zinc-800 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
            >
                Semua
            </button>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => onSelect(genre.id)}
                    className={`px-4 py-1.5 rounded-full text-sm transition ${selectedGenre === genre.id
                            ? 'bg-zinc-800 text-white'
                            : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                        }`}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    )
}