export default function Pill({ text }: { text: string }) {
    return (
        <span className="inline-block py-1.5 px-3 rounded-full bg-blue-900/50 text-blue-300 text-sm font-medium border border-blue-700/30 hover:bg-blue-800/60 transition-colors duration-300">
            {text}
        </span>
    );
}