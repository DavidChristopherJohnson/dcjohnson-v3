import IBlog from "@/interfaces/blog.interface";
import setDate from "@/utils/set-date";
import { createBlogImage } from "@/utils/blog-image";

const tailwindBlog: IBlog = {
    uniqueId: 'tailwind-blog',
    title: "Styling with Tailwind CSS",
    description: "Learn how to efficiently style your React applications using Tailwind CSS utility classes.",
    content: `# Styling with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build modern websites without ever leaving your HTML. By using utility classes, you can rapidly prototype and build designs without writing any custom CSS.

## Why Tailwind?

- **No more naming things:** Use utility classes instead of creating custom class names
- **Consistent design:** Predefined values for spacing, colors, etc. promote consistency
- **Responsive design made easy:** Use responsive variants like \`md:\` and \`lg:\` to apply different styles at different breakpoints
- **Dark mode support:** Toggle between light and dark themes with the \`dark:\` variant
- **Custom design system:** Tailwind can be configured to match your brand's design system

## Basic Usage

Here's a simple example of a button styled with Tailwind CSS:

\`\`\`jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
\`\`\`

This creates a blue button with rounded corners, white text, and a hover effect without writing a single line of CSS.

## Getting Started

To add Tailwind CSS to your Next.js project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Then configure your \`tailwind.config.js\` file and add the directives to your CSS.`,
    url: '/blog/tailwind-blog',
    image: createBlogImage('tailwind-blog', 'Tailwind CSS logo'),
    date: setDate('Apr 20 2024')
};

export default tailwindBlog; 