export default function JobSection({ title, items }: { title: string, items: Array<String> }) {
    if(!items.length) return;

    return <>
        <h2>{title}</h2>
        <div className="list-disc list-inside pl-5 pb-2" >
            {items.map((item, index) => <li key={title + '-' + index.toString()}>{item}</li>)}
        </div>
    </>
}