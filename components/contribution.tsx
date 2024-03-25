import IExternalLink from "@/interfaces/external-link.interface";
import Link from "next/link";
import ExternalLink from "./external-link";

export default function Contribution ({title, link}: IExternalLink) {
    return <>
        <li>
            <ExternalLink link={link} title={title}/> 
        </li>
    </>
}