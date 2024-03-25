import Image, {StaticImageData} from "next/image";

export default function Icon({ image, alt="" }: { image: StaticImageData, alt: string }) {
    return <div>
        <Image className="w-5 h-auto" src={image} alt={alt} />
    </div>
}