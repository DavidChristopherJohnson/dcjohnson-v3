'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/assets/Avatar.jpg';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      connections: Particle[];
      connectionTimers: Map<Particle, { timer: number, alpha: number }>;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = 2 + Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.connections = [];
        this.connectionTimers = new Map();
      }

      update() {
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        const canvasWidth = canvas?.width || window.innerWidth;
        const canvasHeight = canvas?.height || window.innerHeight;
        
        if (this.x > canvasWidth || this.x < 0) {
          this.speedX *= -1;
        }
        if (this.y > canvasHeight || this.y < 0) {
          this.speedY *= -1;
        }
        
        // Keep particles in bounds
        this.x = Math.max(0, Math.min(this.x, canvasWidth));
        this.y = Math.max(0, Math.min(this.y, canvasHeight));
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw particle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        this.connections.forEach(particle => {
          const connectionData = this.connectionTimers.get(particle);
          if (connectionData) {
            const distance = Math.sqrt(
              Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2)
            );
            
            // Check if too far apart
            if (distance > 250) {
              // Simply remove connection
              this.connections = this.connections.filter(p => p !== particle);
              this.connectionTimers.delete(particle);
              return;
            }
            
            // Increment timer for connection line glow effect
            connectionData.timer += 0.05;
            if (connectionData.timer > 1) {
              connectionData.timer = 1;
            }
            
            // Draw line with glow effect
            const alpha = connectionData.alpha * (1 - (distance / 250));
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
            
            // Add glow
            ctx.strokeStyle = `rgba(100, 180, 255, ${alpha * 0.5})`;
            ctx.lineWidth = 2;
            ctx.globalAlpha = connectionData.timer * 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.max(Math.floor((canvas.width * canvas.height) / 15000), 50), 150);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Check for new connections
      particles.forEach(particle => {
        particles.forEach(otherParticle => {
          if (particle === otherParticle) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          // If close enough and not already connected
          if (distance < 200 && !particle.connections.includes(otherParticle)) {
            // 1% chance to connect when close
            if (Math.random() < 0.01) {
              particle.connections.push(otherParticle);
              particle.connectionTimers.set(otherParticle, { timer: 0, alpha: 0.4 });
            }
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden pt-14">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full bg-black"
          />
        </div>
        
        {/* Hero Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">David Johnson</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">Software Engineer. Product Builder.</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cv" className="bg-[#0051E6] hover:bg-[#0051E6]/90 text-white px-6 py-3 rounded-md text-lg transition-all duration-300">
              Explore My Work
            </Link>
            <Link href="/articles" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md text-lg transition-all duration-300">
              Read My Blog
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
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
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                  <p className="text-gray-600">Tech Innovation Inc.</p>
                </div>
                <span className="text-gray-500">2020 - Present</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold">Lead Product Developer</h3>
                  <p className="text-gray-600">Digital Creators Ltd.</p>
                </div>
                <span className="text-gray-500">2017 - 2020</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <p className="text-gray-600">Tech Solutions Group</p>
                </div>
                <span className="text-gray-500">2015 - 2017</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium underline">
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
