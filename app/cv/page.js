'use client'
import Job from '@/components/job';
import Jobs from '@/data/jobs';
import ContributionsData from '@/data/contributions';
import Contributions from '@/components/contributions';
import CareerSummary from '@/components/career-summary';
import ContactDetails from '@/components/contact';
import CvDownloadButton from '@/components/cv-download-button';

export default function CvPage() {
    return (
        <div id='to-print' className="pt-24 md:pt-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                    My professional background, career accomplishments, and technical skills.
                </p>
                
                <div className="mb-8">
                    <CvDownloadButton />
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="border border-white/10 rounded-lg p-6 md:p-8 transition-colors duration-300 hover:border-blue-500/60 hover:shadow-md">
                    <ContactDetails />
                </div>
                
                <div className="border border-white/10 rounded-lg p-6 md:p-8 transition-colors duration-300 hover:border-blue-500/60 hover:shadow-md">
                    <CareerSummary />
                </div>
                
                <div className="border border-white/10 rounded-lg p-6 md:p-8 transition-colors duration-300 hover:border-blue-500/60 hover:shadow-md">
                    <Contributions contributions={ContributionsData} />
                </div>
                
                <div className="border border-white/10 rounded-lg p-6 md:p-8 transition-colors duration-300 hover:border-blue-500/60 hover:shadow-md">
                    <h2 className="text-3xl font-bold text-white mb-6">Employment History</h2>
                    <div className="space-y-8">
                        {Jobs.map(job => (
                            <div key={job.identifier} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                                <Job {...job} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}