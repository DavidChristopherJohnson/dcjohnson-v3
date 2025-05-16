import Link from "next/link";

export default function CvDownloadButton() {
    return (
        <Link 
            href={'David Johnson - CV.pdf'} 
            target='_blank'
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
        >
            Download CV as PDF
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        </Link>
    );
}