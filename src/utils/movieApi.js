const BASE = 'https://api.themoviedb.org/3'
const KEY = import.meta.env.VITE_TMDB_KEY

export const getPopularMovies = async () => {
    const res = await fetch(
        `${BASE}/movie/popular?api_key=${KEY}&language=en-US`
    )
    if (!res.ok) throw new Error('Gagal memuat film')
    return res.json()
}

export const searchMovies = async (query) => {
    const res = await fetch(
        `${BASE}/search/movie?api_key=${KEY}&query=${query}&language=en-US`
    )
    if (!res.ok) throw new Error('Film tidak ditemukan')
    return res.json()
}

export const getMovieDetail = async (id) => {
    const res = await fetch(
        `${BASE}/movie/${id}?api_key=${KEY}&language=en-US`
    )
    if (!res.ok) throw new Error('Gagal memuat detail film')
    return res.json()
}

export const getGenres = async () => {
    const res = await fetch(
        `${BASE}/genre/movie/list?api_key=${KEY}&language=en-US`
    )
    if (!res.ok) throw new Error('Gagal memuat genre')
    return res.json()
}

export const getMoviesByGenre = async (genreId) => {
    const res = await fetch(
        `${BASE}/discover/movie?api_key=${KEY}&with_genres=${genreId}&language=en-US`
    )
    if (!res.ok) throw new Error('Gagal memuat film')
    return res.json()
}