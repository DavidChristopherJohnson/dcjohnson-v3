'use client';

import { usePathname } from 'next/navigation';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // If it's the home page, don't apply the background
  if (isHomePage) {
    return <>{children}</>;
  }
  
  // For all other pages, apply the gradient background
  return (
    <div className="w-full min-h-screen text-white bg-[linear-gradient(to_bottom,_black_0%,_black_5%,_#02020A_15%,_#030318_25%,_#030320_35%,_#040935_45%,_#040935_100%)] bg-fixed">
      {children}
    </div>
  );
} 