"use client";

import IBlog from "@/interfaces/blog.interface";
import Link from "next/link";
import OptimizedImage from "./optimized-image";

export default function BlogCard(props: IBlog) {
    return (
        <div className="flex flex-col w-full text-white h-full">
            <div className="mb-4 relative w-full aspect-[16/9]">
                <OptimizedImage 
                    src={props.image.src} 
                    alt={props.image.alt || props.title || "Blog post image"} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-header font-bold text-white mb-2">{props.title}</h2>
                <p className="text-gray-300 mb-4">{props.description}</p>
                <div className="text-sm text-gray-400 mb-4">
                    {props.date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </div>
                <div className="mt-auto">
                    <span className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-all duration-300 w-full inline-block text-center">
                        Read More
                    </span>
                </div>
            </div>
        </div>
    );
} 