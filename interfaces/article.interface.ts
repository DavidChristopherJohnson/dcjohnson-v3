import { StaticImageData } from "next/image";
import IImage from "./image.interface";

export default interface IArticle {
    uniqueId: string,
    title: string,
    description: string,
    url: string,
    image: IImage,
    date: Date
}