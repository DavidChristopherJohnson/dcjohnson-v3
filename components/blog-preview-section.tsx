"use client";

import Link from 'next/link';
import Image from 'next/image';
import Blogs from '@/data/blogs';

export default function BlogPreviewSection() {
    // Get the top 3 most recent blog posts
    const featuredBlogs = Blogs.slice(0, 3);
    
    return (
        <section className="w-full bg-gradient-to-b from-black to-blue-950 text-white py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold">Blog</h2>
                    <Link 
                        href="/blog" 
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        View All Posts
                    </Link>
                </div>

                <div className="space-y-8">
                    {featuredBlogs.map((blog, index) => (
                        <article key={blog.uniqueId} className="mb-8">
                            <Link href={blog.url}>
                                <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                                    {blog.title}
                                </h3>
                            </Link>
                            <div className="text-gray-400 mb-3">
                                {blog.date.toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </div>
                            <p className="text-gray-300 mb-4">
                                {blog.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-10">
                    <Link 
                        href="/blog" 
                        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center"
                    >
                        Read the latest insights
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
} 