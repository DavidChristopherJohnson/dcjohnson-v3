import Blogs from '@/data/blogs';

export async function generateStaticParams() {
    return Blogs.map(blog => ({
        id: blog.uniqueId,
    }));
} 