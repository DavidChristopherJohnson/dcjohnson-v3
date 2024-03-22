import Pill from "./pill";

export default function PillList({ title, values }: { title: string, values: Array<string> }) {
    return (
        <>
            <h2>{title}</h2>
            <ul className="list-disc list-inside pl-5 max-sm:pb-2 flex flex-row flex-wrap">
                {values.map((value, idx) => <div key={idx}><Pill text={value} /></div>)}
            </ul>
        </>
    )
}