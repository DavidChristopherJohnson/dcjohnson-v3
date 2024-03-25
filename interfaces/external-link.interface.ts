import { StaticImageData } from "next/image";

export default interface IExternalLink {
    title: string,
    link: string
    image?: StaticImageData,
    imageAlt?:string    
}