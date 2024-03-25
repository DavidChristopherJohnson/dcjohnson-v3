import IExternalLink from "@/interfaces/external-link.interface";
import Contribution from "./contribution";

export default function Contributions({ contributions }: { contributions: Array<IExternalLink> }) {
    return <>
        <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col mt-5 pb-5 border-b-solid border-b-2" >
            <div className="min-w-80 max-sm:pb-2">
                <h2>Project Contribution Highlights</h2>
            </div>
            <div>
                <ul className='list-disc pl-10'>
                    {contributions.map(contrib => <div key={contrib.title} className='flex flex-row flex-grow-1 mt-1'><Contribution {...contrib} /></div>)}
                </ul>
            </div>
        </div>
    </>
}