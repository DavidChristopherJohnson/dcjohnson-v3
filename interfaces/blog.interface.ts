import { StaticImageData } from "next/image";
import IImage from "./image.interface";

export default interface IBlog {
    uniqueId: string,
    title: string,
    description: string,
    content: string,
    url: string,
    image: IImage,
    date: Date
} 