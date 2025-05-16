import Blogs from '@/data/blogs';

// Static route generation for all blog posts
export async function generateStaticParams() {
  return Blogs.map(blog => ({
    id: blog.uniqueId,
  }));
}

// Define that this route is dynamic but should use static generation
export const dynamicParams = false; // Return 404 for blog IDs not returned from generateStaticParams 