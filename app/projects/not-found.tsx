import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div className="pt-24 md:pt-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Not Found</h1>
        <p className="text-xl mb-8">Sorry, we couldn&apos;t find the project you&apos;re looking for.</p>
        <Link 
          href="/projects" 
          className="inline-flex items-center bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
        >
          Back to Projects
          <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 