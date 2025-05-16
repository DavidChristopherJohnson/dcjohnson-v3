import { notFound } from 'next/navigation';
import projects from '@/data/projects';
import ProjectDetail from '@/components/project-detail';
import type { Metadata } from 'next';

type Params = {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | David Johnson`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

// Using any type to bypass TS errors
export default function Page({ params }: any) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="pt-24 md:pt-28">
      <ProjectDetail project={project} />
    </div>
  );
} 