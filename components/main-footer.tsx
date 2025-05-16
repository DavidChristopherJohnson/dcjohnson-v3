"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MainFooter() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();
    
    // Always use white text on black background
    const textColorClass = "text-white";
    const hoverColorClass = "hover:text-blue-400";
    const borderColorClass = "border-gray-800";
    
    return (
        <footer className={`bg-black border-t ${borderColorClass} py-8 px-4 sm:px-6 w-full`}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <p className={`${textColorClass} text-sm`}>
                            &copy; {currentYear} David Christopher Johnson. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 md:mb-0">
                        <nav className="flex gap-6">
                            <Link href="/" className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}>
                                Home
                            </Link>
                            <Link href="/about" className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}>
                                About
                            </Link>
                            <Link href="/blog" className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}>
                                Blog
                            </Link>
                            <Link href="/cv" className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}>
                                CV
                            </Link>
                        </nav>
                    </div>
                    
                    <div className="flex gap-4">
                        <a 
                            href="https://github.com/DavidChristopherJohnson" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/david-christopher-johnson/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                            href="mailto:d.johnson@yorkshiresoftwaresolutions.co.uk" 
                            className={`${textColorClass} ${hoverColorClass} transition-colors duration-300`}
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}