export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Cari film..."
                className="w-full px-5 py-3 rounded-2xl bg-zinc-100 text-zinc-800 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-zinc-300 transition text-sm"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">
                🔍
            </span>
        </div>
    )
}