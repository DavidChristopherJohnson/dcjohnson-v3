import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/assets/Avatar.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 w-full max-w-6xl bg-white">
      <h2 className="text-4xl font-bold text-[#0A2540] mb-12">About</h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
          <Image 
            src={Avatar} 
            alt="David Johnson" 
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        <div>
          <p className="text-lg mb-8">
            I&apos;m an experienced Software Engineer and Product Builder based in London, specializing in building high-performance 
            systems and innovative products. Passionate about creating technology that solves real-world problems.
          </p>
          
          <div className="space-y-4">
            <WorkExperience 
              title="Senior Software Engineer"
              company="Tech Innovation Inc."
              period="2020 - Present"
            />
            
            <WorkExperience 
              title="Lead Product Developer"
              company="Digital Creators Ltd."
              period="2017 - 2020"
            />
            
            <WorkExperience 
              title="Software Developer"
              company="Tech Solutions Group"
              period="2015 - 2017"
            />
          </div>
          
          <div className="mt-8">
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium underline">
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
}

function WorkExperience({ title, company, period }: WorkExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{company}</p>
      </div>
      <span className="text-gray-500">{period}</span>
    </div>
  );
} 