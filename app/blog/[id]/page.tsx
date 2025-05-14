"use client";

import Blogs from '@/data/blogs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OptimizedImage from '@/components/optimized-image';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

// A simple component to render markdown content as HTML
const MarkdownContent = ({ content }: { content: string }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Set security options for marked
    marked.setOptions({
      gfm: true,
      breaks: false,
    });

    // Use toString() to ensure string type
    const rawHtml = marked.parse(content).toString();
    const sanitizedHtml = DOMPurify.sanitize(rawHtml);
    setHtmlContent(sanitizedHtml);
  }, [content]);

  return (
    <div 
      className="prose prose-lg prose-invert prose-headings:text-white prose-a:text-blue-400"
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
};

export default function BlogPost({ params }: { params: { id: string } }) {
    const blog = Blogs.find(blog => blog.uniqueId === params.id);
    
    if (!blog) {
        notFound();
    }
    
    return (
        <div className="w-full min-h-screen text-white">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 pt-24 md:pt-28">
                <div className="mb-8">
                    <Link href="/blog" className="text-blue-400 hover:underline inline-block">
                        ← Back to blogs
                    </Link>
                </div>
                
                <article className="prose prose-lg prose-invert max-w-none">
                    <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
                    
                    <div className="text-gray-400 mb-6">
                        {blog.date.toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </div>
                    
                    <div className="mb-8 relative w-full aspect-[16/9]">
                        <OptimizedImage 
                            src={blog.image.src}
                            alt={blog.image.alt || blog.title} 
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    
                    <MarkdownContent content={blog.content} />
                </article>
            </div>
        </div>
    );
} 