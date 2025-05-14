import IBlog from "@/interfaces/blog.interface";
import setDate from "@/utils/set-date";
import { createBlogImage } from "@/utils/blog-image";

const reactHooksBlog: IBlog = {
    uniqueId: 'react-hooks',
    title: "Understanding React Hooks",
    description: "A comprehensive guide to React's powerful hooks system and how to use it effectively in your applications.",
    content: `# Understanding React Hooks

React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They allow you to "hook into" React state and lifecycle features from function components.

## Core Hooks

### useState

The \`useState\` hook lets you add state to function components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect

The \`useEffect\` hook lets you perform side effects in function components:

\`\`\`jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

One of the most powerful features of hooks is the ability to create your own custom hooks to extract reusable logic:

\`\`\`jsx
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}
\`\`\`

By using hooks, you can make your components more reusable, testable, and easier to understand.`,
    url: '/blog/react-hooks',
    image: createBlogImage('react-hooks', 'React Hooks diagram'),
    date: setDate('Apr 25 2024')
};

export default reactHooksBlog; 