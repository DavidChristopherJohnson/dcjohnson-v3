import IExternalLink from "@/interfaces/external-link.interface";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Icon from "./icon";

export default function ExternalLink({ title, link, image, imageAlt = "" }: IExternalLink) {
    const IconImage = ({ icoImage, icoAlt }: { icoImage: StaticImageData | undefined, icoAlt: string }) => {
        if (!icoImage)
            return ""

        return <Icon src={icoImage as StaticImageData} alt={icoAlt} />
    }

    return <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-row" >
        <div className="min-w-6">
            <a className="underline hover:bg-gray-300" href={link} rel="no-referrer nofollow" target="_blank">
                <IconImage icoImage={image} icoAlt={imageAlt} />
            </a>
        </div>

        {
            !link.startsWith('mailto') ?
                <a className="underline hover:bg-gray-300" href={link} rel="no-referrer nofollow" target="_blank">
                    {title}
                </a>
                :
                <a className="underline hover:bg-gray-300" href={link}>
                    {title}
                </a>
        }
    </div>


    // <Link className="underline hover:bg-gray-300" href={link} rel="no-referrer nofollow" target="_blank">
    //     <IconImage icoImage={image} icoAlt={imageAlt} />
    //     {title}
    // </Link>
}