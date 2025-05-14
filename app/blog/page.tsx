"use client";

import Link from 'next/link';
import Blogs from '@/data/blogs';
import { useRef } from 'react';
import BlogCard from '@/components/blog-card';

export default function BlogPage() {
    const latestPostsRef = useRef<HTMLDivElement>(null);

    const scrollToLatestPosts = () => {
        latestPostsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Sort blogs by date (newest first)
    const sortedBlogs = [...Blogs].sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <div className="w-full min-h-screen text-white bg-[linear-gradient(to_bottom,_black_0%,_black_5%,_#02020A_15%,_#030318_25%,_#030320_35%,_#040935_45%,_#040935_100%)] bg-fixed">
            {/* Hero Section */}
            <div className="py-12 px-4 sm:px-6 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-6xl font-header font-bold mb-6">Blog</h1>
                    <p className="text-2xl mb-12 max-w-3xl">
                        Thoughts on tech, leadership, and the journey of building products.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <button 
                            onClick={scrollToLatestPosts}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-all duration-300 text-lg font-medium"
                        >
                            Read the latest insights
                        </button>
                        <Link 
                            href="#all-posts" 
                            className="text-white hover:text-blue-400 transition-colors duration-300 text-lg"
                        >
                            View All Posts
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured Blog Posts */}
            <div 
                ref={latestPostsRef} 
                id="latest-posts" 
                className="max-w-6xl mx-auto py-16 px-4 sm:px-6"
            >
                <h2 className="text-4xl font-bold mb-12">Latest Posts</h2>
                
                {/* Featured blog posts (top 3) */}
                <div className="space-y-16">
                    {sortedBlogs.slice(0, 3).map((blog) => (
                        <article key={blog.uniqueId} className="mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="md:col-span-1">
                                    <Link href={blog.url} className="block">
                                        <div className="relative w-full aspect-square bg-blue-900 rounded-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {typeof blog.image.src === 'string' ? (
                                                    <img 
                                                        src={blog.image.src} 
                                                        alt={blog.image.alt} 
                                                        className="object-cover w-full h-full"
                                                    />
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="md:col-span-3">
                                    <Link href={blog.url}>
                                        <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
                                            {blog.title}
                                        </h2>
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
                                    <Link 
                                        href={blog.url} 
                                        className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* All Blog Posts */}
            <div id="all-posts" className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
                <h2 className="text-4xl font-bold mb-12">All Posts</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedBlogs.map((blog) => (
                        <Link key={blog.uniqueId} href={blog.url}>
                            <div className="border border-white/10 rounded-lg p-6 md:p-8 transition-colors transition-transform duration-300 ease-in-out cursor-pointer md:hover:border-blue-500/60 md:hover:shadow-md md:hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
                                <BlogCard {...blog} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 