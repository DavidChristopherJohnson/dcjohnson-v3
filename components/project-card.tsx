import Link from 'next/link';
import { Pill, BookOpen, Building2, DollarSign, Briefcase, BarChart3, Award, Database, GanttChart, Scissors, BrainCircuit, Building, Landmark } from 'lucide-react';
import IProject from '@/interfaces/project.interface';

const iconMap: Record<string, React.ReactNode> = {
  'pill': <Pill className="w-8 h-8" />,
  'flask': <Briefcase className="w-8 h-8" />,  // Replaced Flask
  'book': <BookOpen className="w-8 h-8" />,
  'building': <Building2 className="w-8 h-8" />,
  'dollar': <DollarSign className="w-8 h-8" />,
  'briefcase': <Briefcase className="w-8 h-8" />,
  'chart': <BarChart3 className="w-8 h-8" />,
  'award': <Award className="w-8 h-8" />,
  'database': <Database className="w-8 h-8" />,
  'gantt-chart': <GanttChart className="w-8 h-8" />,
  'scissors': <Scissors className="w-8 h-8" />,
  'brain': <BrainCircuit className="w-8 h-8" />,
  'helping-hand': <Building className="w-8 h-8" />,
  'bank': <Landmark className="w-8 h-8" />,
  'dice': <Building2 className="w-8 h-8" />,  // Replaced Dice
};

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-white/10 hover:border-blue-500/60" style={{ backgroundColor: 'var(--card-bg-color, white)' }}>
      <div className="text-accent mb-4">
        {iconMap[project.icon] || <Briefcase className="w-8 h-8" />}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.companyName} • {project.year}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <Link href={`/projects/${project.id}`} className="text-accent hover:text-accent/80 font-medium flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        
        <a href={project.link} className="text-gray-500 hover:text-accent font-medium" target="_blank" rel="noopener noreferrer">
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  );
} 