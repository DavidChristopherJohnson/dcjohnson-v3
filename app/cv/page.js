'use client'
import Job from '@/components/job';
import Jobs from '@/data/jobs';
import ContributionsData from '@/data/contributions';
import Contributions from '@/components/contributions';
import CareerSummary from '@/components/career-summary';
import ContactDetails from '@/components/contact';
import CvDownloadButton from '@/components/cv-download-button';

export default function CvPage() {
    return <div id='to-print' >
        <h1>Curriculum Vitae</h1>

        <div className="w-full mt-1 flex" >
            <CvDownloadButton />
        </div>
        <div className="w-full mt-2 max-w-7xl flex flex-grow-1 flex-col pb-5" >
            <ContactDetails />
        </div>
        <div className="w-full mt-2 max-w-7xl flex flex-grow-1 flex-col" >
            <CareerSummary />
        </div>
        <div className="w-full max-w-7xl flex flex-grow-1 flex-col" >
            <Contributions contributions={ContributionsData} />
        </div>
        <div className="w-full max-w-7xl flex flex-grow-1 flex-col" >
            <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col py-2" >
                <div className="min-w-80 max-sm:pb-2">
                    <h2>Employment History</h2>
                </div>
            </div>
            {Jobs.map(job => <div key={job.identifier} className='pb-10 border-solid border-b-2 mt-3'><Job {...job} /></div>)}
        </div>
    </div>
}