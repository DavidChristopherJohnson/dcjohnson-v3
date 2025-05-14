import { StaticImageData } from "next/image";

export default interface IImage {
    src: StaticImageData | string,
    alt: string
}