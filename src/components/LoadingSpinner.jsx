export default function LoadingSpinner() {
    return (
        <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-zinc-200 border-t-zinc-800 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">Memuat...</p>
        </div>
    )
}
