import IBlog from "@/interfaces/blog.interface";
import setDate from "@/utils/set-date";
import { createBlogImage } from "@/utils/blog-image";

const sampleBlog: IBlog = {
    uniqueId: 'sample-blog',
    title: "Getting Started with Next.js",
    description: "A brief introduction to Next.js and its core features for building modern web applications.",
    content: `# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering and static site generation for React applications. It provides a seamless developer experience with features like file-system based routing, API routes, and built-in CSS support.

## Key Features

- **Server-side Rendering (SSR):** Renders pages on the server for improved SEO and performance
- **Static Site Generation (SSG):** Pre-renders pages at build time for even better performance
- **File-system Based Routing:** Create pages by adding files to the \`pages\` directory
- **API Routes:** Create serverless functions with Next.js API routes
- **Built-in CSS Support:** Use CSS Modules, Sass, or any CSS-in-JS library
- **Fast Refresh:** See changes instantly without losing component state

## Getting Started

To create a new Next.js app, use the following command:

\`\`\`bash
npx create-next-app my-app
\`\`\`

Then navigate to your app and start the development server:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

Visit http://localhost:3000 to see your application in action.`,
    url: '/blog/sample-blog',
    image: createBlogImage('sample-blog', 'Next.js logo'),
    date: setDate('Apr 15 2024')
};

export default sampleBlog; 