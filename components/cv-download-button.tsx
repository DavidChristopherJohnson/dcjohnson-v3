import Link from "next/link";
import Pill from "./pill";

export default function CvDownloadButton() {
    return (
        <Link href={'David Johnson - CV.pdf'} className="text-center" target='_blank'>
            <Pill text='Download CV as PDF' />
        </Link>
    )
}