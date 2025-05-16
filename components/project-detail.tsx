import Link from 'next/link';
import { Pill, BookOpen, Building2, DollarSign, Briefcase, BarChart3, Award, Database, GanttChart, Scissors, BrainCircuit, Building, Landmark } from 'lucide-react';
import IProject from '@/interfaces/project.interface';

const iconMap: Record<string, React.ReactNode> = {
  'pill': <Pill className="w-12 h-12" />,
  'flask': <Briefcase className="w-12 h-12" />,  // Replaced Flask
  'book': <BookOpen className="w-12 h-12" />,
  'building': <Building2 className="w-12 h-12" />,
  'dollar': <DollarSign className="w-12 h-12" />,
  'briefcase': <Briefcase className="w-12 h-12" />,
  'chart': <BarChart3 className="w-12 h-12" />,
  'award': <Award className="w-12 h-12" />,
  'database': <Database className="w-12 h-12" />,
  'gantt-chart': <GanttChart className="w-12 h-12" />,
  'scissors': <Scissors className="w-12 h-12" />,
  'brain': <BrainCircuit className="w-12 h-12" />,
  'helping-hand': <Building className="w-12 h-12" />,
  'bank': <Landmark className="w-12 h-12" />,
  'dice': <Building2 className="w-12 h-12" />,  // Replaced Dice
};

export default function ProjectDetail({ project }: { project: IProject }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link 
        href="/projects" 
        className="inline-flex items-center text-accent hover:text-accent/80 mb-8"
      >
        <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor" transform="rotate(180)">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Back to Projects
      </Link>
      
      <div className="border border-white/10 rounded-lg p-8 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="bg-blue-100 dark:bg-blue-900 text-accent p-6 rounded-lg">
            {iconMap[project.icon] || <Briefcase className="w-12 h-12" />}
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>{project.companyName}</span>
              <span className="mx-2">•</span>
              <span>{project.year}</span>
            </div>
            
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">{project.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href={project.link} 
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project Website
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 