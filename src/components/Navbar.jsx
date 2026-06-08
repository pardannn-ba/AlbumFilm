import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    const linkClass = (path) =>
        `text-sm px-4 py-2 rounded-xl transition ${location.pathname === path
            ? 'bg-zinc-100 text-zinc-800 font-medium'
            : 'text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100'
        }`

    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-white sticky top-0 z-50">
            <h1 className="text-zinc-800 font-bold text-lg tracking-tight">
                🎬 AlbumFilm
            </h1>
            <div className="flex gap-1">
                <Link to="/" className={linkClass('/')}>
                    Home
                </Link>
                <Link to="/favorite" className={linkClass('/favorite')}>
                    Favorit ❤️
                </Link>
            </div>
        </nav>
    )
}