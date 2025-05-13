'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ParticleCanvas from './ParticleCanvas';
import RotatingTagline from './RotatingTagline';

// Define taglines that will rotate through
const TAGLINES = [
  'Lead with Empathy',
  'Build What Matters',
  'Architect for Growth',
  'Focus on Outcomes',
  'Deliver with Discipline',
  'Ask Why, Not Just How',
  'Based in the UK, Working Globally'
];

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden pt-14">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <ParticleCanvas />
      </div>
      
      {/* Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">David Johnson</h1>
        <RotatingTagline taglines={TAGLINES} duration={3500} />
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/cv" className="bg-[#0051E6] hover:bg-[#0051E6]/90 text-white px-6 py-3 rounded-md text-lg transition-all duration-300">
            Explore My Work
          </Link>
          <Link href="/articles" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md text-lg transition-all duration-300">
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  );
} 