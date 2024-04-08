import IArticle from "@/interfaces/article.interface";
import Image from "next/image";

export default function ArticleCard(props: IArticle) {
    return (
        <div className="flex flex-row w-full border-solid border-2 p-2 rounded-xl">
            <div className="max-w-40 pr-2">
                <Image {...props.image} />
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}