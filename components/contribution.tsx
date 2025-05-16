import IExternalLink from "@/interfaces/external-link.interface";
import Link from "next/link";
import projects from "@/data/projects";
import { Pill, BookOpen, Building2, DollarSign, Briefcase, BarChart3, Award, Database, GanttChart, Scissors, BrainCircuit, Building, Landmark } from 'lucide-react';

// Import the same iconMap used in project-card
const iconMap: Record<string, React.ReactNode> = {
  'pill': <Pill className="w-6 h-6" />,
  'flask': <Briefcase className="w-6 h-6" />,
  'book': <BookOpen className="w-6 h-6" />,
  'building': <Building2 className="w-6 h-6" />,
  'dollar': <DollarSign className="w-6 h-6" />,
  'briefcase': <Briefcase className="w-6 h-6" />,
  'chart': <BarChart3 className="w-6 h-6" />,
  'award': <Award className="w-6 h-6" />,
  'database': <Database className="w-6 h-6" />,
  'gantt-chart': <GanttChart className="w-6 h-6" />,
  'scissors': <Scissors className="w-6 h-6" />,
  'brain': <BrainCircuit className="w-6 h-6" />,
  'helping-hand': <Building className="w-6 h-6" />,
  'bank': <Landmark className="w-6 h-6" />,
  'dice': <Building2 className="w-6 h-6" />,
};

export default function Contribution({title, link}: IExternalLink) {
    // Try to find a matching project to link to the project page
    const matchingProject = projects.find(project => 
        project.title.toLowerCase().includes(title.toLowerCase()) || 
        title.toLowerCase().includes(project.title.toLowerCase())
    );
    
    const projectLink = matchingProject ? `/projects/${matchingProject.id}` : link;
    const isInternalLink = matchingProject !== undefined;
    
    // Get the icon if there's a matching project
    const icon = matchingProject && iconMap[matchingProject.icon] 
        ? iconMap[matchingProject.icon] 
        : <Briefcase className="w-6 h-6" />;
    
    return (
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {icon}
            </div>
            
            {isInternalLink ? (
                <Link 
                    href={projectLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                >
                    <span className="border-b border-blue-400/40 group-hover:border-blue-300 text-lg">{title}</span>
                    <svg className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            ) : (
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                >
                    <span className="border-b border-blue-400/40 group-hover:border-blue-300 text-lg">{title}</span>
                    <svg className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                </a>
            )}
        </div>
    );
}