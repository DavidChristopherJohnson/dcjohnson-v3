import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/assets/Avatar.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 w-full bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-400 mb-8">Who I Am</h2>
        
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-3/5">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              I&apos;m a software engineer and product builder based in the UK. I work with founders and start-ups to take ideas from pitch deck to working product.
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl">
                I&apos;ve led teams, built scalable platforms, and helped early-stage companies get to market fast. I care about building the right thing, not just shipping code.
              </p>
              
              <p className="text-lg md:text-xl">
                If you&apos;ve got the vision but need someone to execute, that&apos;s where I come in.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 mt-6 md:mt-0">
            <div className="rounded-lg overflow-hidden bg-gray-900">
              <Image 
                src={Avatar} 
                alt="David Johnson" 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
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