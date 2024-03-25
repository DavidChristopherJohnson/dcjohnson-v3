import IExternalLink from "@/interfaces/external-link.interface";
import Link from "next/link";

export default function ExternalLink({title, link}: IExternalLink) {
    return <Link className="underline hover:bg-gray-300" href={link} rel="no-referrer nofollow" target="_blank">{title}</Link>
}