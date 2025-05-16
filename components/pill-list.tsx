import Pill from "./pill";

export default function PillList({ title, values }: { title: string, values: Array<string> }) {
    if (!values || values.length === 0) return null;
    
    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {values.map((value, idx) => (
                    <Pill key={`${title}-${idx}`} text={value} />
                ))}
            </div>
        </div>
    );
}