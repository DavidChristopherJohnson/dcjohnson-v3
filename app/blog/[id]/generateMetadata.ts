import { Metadata } from 'next';
import Blogs from '@/data/blogs';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = Blogs.find(blog => blog.uniqueId === params.id);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found'
    };
  }
  
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      authors: ['David Johnson'],
      publishedTime: blog.date.toISOString(),
    },
  };
} 