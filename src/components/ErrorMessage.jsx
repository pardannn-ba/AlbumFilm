export default function ErrorMessage({ message }) {
    return (
        <div className="text-center py-20">
            <p className="text-4xl mb-3">😕</p>
            <p className="text-zinc-500 text-sm">{message}</p>
        </div>
    )
}