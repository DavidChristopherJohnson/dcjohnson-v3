import ArticleCard from "@/components/article-card";
import Articles from '@/data/articles';

export default function ArticlesPage() {
    return (
        <div className="pt-24 md:pt-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
                    Professional writings and technical insights.
                </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Articles.map(article => (
                        <div key={article.uniqueId}>
                            <ArticleCard {...article} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}