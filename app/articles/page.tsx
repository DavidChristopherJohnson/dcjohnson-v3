import ArticleCard from "@/components/article-card";
import Articles from '@/data/articles';

export default function ArticlesPage() {
    return (
        <>
            <h1>Articles</h1>

            <ul>
                {Articles.map(article => {
                    return <div key={article.uniqueId}>
                     <ArticleCard {...article} />
                    </div>
                })}                
            </ul>
        </>
    )
}