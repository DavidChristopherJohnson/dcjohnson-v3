import projects from '@/data/projects';
import ProjectCard from '@/components/project-card';

export const metadata = {
  title: 'Projects | David Johnson',
  description: 'Featured projects and contributions by David Johnson, a software engineer and product builder based in the UK.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 md:pt-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Featured projects I&apos;ve contributed to throughout my career. These showcase my technical leadership, engineering expertise, and the business value I&apos;ve delivered.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 border border-white/10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Want to work with me?</h2>
          <p className="text-lg mb-6 text-gray-300">
            I&apos;m currently available for new opportunities. If you have a project in mind or are looking for a technical leader, let&apos;s talk.
          </p>
          <a 
            href="mailto:d.johnson@yorkshiresoftwaresolutions.co.uk" 
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
          >
            Get in Touch
            <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 