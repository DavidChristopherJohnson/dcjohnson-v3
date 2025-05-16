export default function JobSection({ title, items }: { title: string, items: Array<String> }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {items.map((item, index) => (
                    <li key={`${title}-${index}`} className="pl-1">{item}</li>
                ))}
            </ul>
        </div>
    );
}