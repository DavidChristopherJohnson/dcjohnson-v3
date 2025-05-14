import { StaticImageData } from "next/image";

/**
 * Gets the URL for a blog image
 * @param blogId - Unique identifier for the blog post
 * @param filename - Name of the image file (defaults to hero.jpg)
 * @returns The public URL to the image
 */
export function getBlogImageUrl(blogId: string, filename: string = 'hero.jpg'): string {
    return `/images/blogs/${blogId}/${filename}`;
}

/**
 * Creates an image object for a blog post
 * @param blogId - Unique identifier for the blog post
 * @param alt - Alt text for the image
 * @param filename - Name of the image file (defaults to hero.jpg)
 * @returns An image object compatible with the blog interface
 */
export function createBlogImage(blogId: string, alt: string, filename: string = 'hero.jpg') {
    return {
        src: getBlogImageUrl(blogId, filename),
        alt
    };
} 