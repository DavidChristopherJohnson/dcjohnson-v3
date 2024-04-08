import IImage from "@/interfaces/image.interface";
import Image, {StaticImageData} from "next/image";

export default function Icon(props: IImage) {
    return <div>
        <Image className="w-5 h-auto" {...props} />
    </div>
}