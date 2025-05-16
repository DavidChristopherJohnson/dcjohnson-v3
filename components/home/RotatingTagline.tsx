'use client';

import { useState, useEffect } from 'react';

interface RotatingTaglineProps {
  taglines: string[];
  duration?: number; // Time in milliseconds that each tagline is displayed
  fadeDuration?: number; // Duration of fade in/out animation in milliseconds
}

export default function RotatingTagline({ 
  taglines, 
  duration = 4000, 
  fadeDuration = 500 
}: RotatingTaglineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    // Skip animation if no taglines or only one tagline
    if (!taglines.length || taglines.length === 1) return;

    // Define the sequence: show tagline -> wait -> fade out -> change tagline -> fade in
    const rotationInterval = setInterval(() => {
      // Start fade out
      setVisible(false);
      
      // After fade out completes, change the tagline and start fade in
      const changeTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setVisible(true);
      }, fadeDuration);
      
      return () => clearTimeout(changeTimeout);
    }, duration);
    
    return () => clearInterval(rotationInterval);
  }, [taglines, duration, fadeDuration]);
  
  // Safeguard against empty array
  if (!taglines.length) return null;
  
  return (
    <div 
      className="h-14 flex items-center justify-center overflow-hidden" 
      aria-live="polite"
    >
      <div 
        className={`px-6 py-2 rounded-full bg-black bg-opacity-5 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDuration: `${fadeDuration}ms` }}
      >
        <p className="text-2xl md:text-3xl text-gray-200">
          {taglines[currentIndex]}
        </p>
      </div>
    </div>
  );
} 