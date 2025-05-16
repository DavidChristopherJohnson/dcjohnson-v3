import IExternalLink from "@/interfaces/external-link.interface";
import Contribution from "./contribution";

export default function Contributions({ contributions }: { contributions: Array<IExternalLink> }) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6">Project Contribution Highlights</h2>
            <ul className="space-y-5">
                {contributions.map(contrib => (
                    <li key={contrib.title} className="group">
                        <Contribution {...contrib} />
                    </li>
                ))}
            </ul>
        </div>
    );
}