'use client';

import { useEffect, useRef } from 'react';
import { createParticles, animateParticles } from '@/utils/animation/particleUtils';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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

    // Create particles
    const particles = createParticles(canvas.width, canvas.height);
    
    // Animation loop
    const animate = () => {
      animateParticles(ctx, canvas, particles);
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
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full bg-black"
      aria-hidden="true"
      data-testid="particle-canvas"
    />
  );
} 