import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import GenreFilter from '../components/GenreFilter'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import {
    getPopularMovies,
    searchMovies,
    getGenres,
    getMoviesByGenre,
} from '../utils/movieApi'

export default function Home({ favorites, onFavorite }) {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [query, setQuery] = useState('')
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await getGenres()
            setGenres(data.genres)
        }
        fetchGenres()
    }, [])

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            setError('')
            try {
                let data
                if (query) {
                    data = await searchMovies(query)
                } else if (selectedGenre) {
                    data = await getMoviesByGenre(selectedGenre)
                } else {
                    data = await getPopularMovies()
                }
                setMovies(data.results)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        const timeout = setTimeout(fetchMovies, 500)
        return () => clearTimeout(timeout)
    }, [query, selectedGenre])

    return (
        <div className="min-h-screen bg-zinc-50">
            <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">

                <SearchBar value={query} onChange={setQuery} />

                <GenreFilter
                    genres={genres}
                    selectedGenre={selectedGenre}
                    onSelect={setSelectedGenre}
                />

                {loading && <LoadingSpinner />}
                {error && <ErrorMessage message={error} />}

                {!loading && !error && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onFavorite={onFavorite}
                                isFavorite={favorites.some((f) => f.id === movie.id)}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}