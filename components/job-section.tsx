export default function JobSection({ title, items }: { title: string, items: Array<String> }) {
    return <>
        <h2>{title}</h2>
        <ul className="list-disc list-inside pl-5">
            {items.map((item, index) => <li key={title + '-' + index.toString()}>{item}</li>)}
        </ul>
    </>
}