import { StaticImageData } from "next/image";

/**
 * Gets the URL for a blog image
 * @param blogId - Unique identifier for the blog post
 * @param filename - Name of the image file (defaults to auto-detection)
 * @returns The public URL to the image
 */
export function getBlogImageUrl(blogId: string, filename?: string): string {
    // Check for the specified filename first
    if (filename) {
        return `/images/blogs/${blogId}/${filename}`;
    }
    
    // Try to find any available image in the blog folder
    // Since we can't check for file existence on the client,
    // we'll need to rely on known filenames based on the available files
    const knownFiles = {
        'leadership-lessons': 'leadership-playbook.jpeg'
    };
    
    // Use a known file if we have one mapped
    if (blogId in knownFiles) {
        return `/images/blogs/${blogId}/${knownFiles[blogId as keyof typeof knownFiles]}`;
    }
    
    // Otherwise, default to hero.jpg
    return `/images/blogs/${blogId}/hero.jpg`;
}

/**
 * Creates an image object for a blog post
 * @param blogId - Unique identifier for the blog post
 * @param alt - Alt text for the image
 * @param filename - Name of the image file (optional)
 * @returns An image object compatible with the blog interface
 */
export function createBlogImage(blogId: string, alt: string, filename?: string) {
    // For development/testing, use a professional placeholder image as fallback
    const placeholderImage = `https://placehold.co/800x450/0051E6/FFFFFF.webp?text=${encodeURIComponent(blogId.replace(/-/g, ' '))}`;
    
    // Use local image URL
    const localImageUrl = getBlogImageUrl(blogId, filename);
    
    return {
        src: localImageUrl,
        alt,
        // Store the placeholder as a fallback that can be used if the image fails to load
        fallbackSrc: placeholderImage
    };
} 