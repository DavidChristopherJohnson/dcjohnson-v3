'use client'
import Job from '@/components/job';
import Jobs from '@/data/jobs';
import ContributionsData from '@/data/contributions';
import Contributions from '@/components/contributions';
import CareerSummary from '@/components/career-summary';
import PrintToPfd from '@/utils/print-to-pdf';
import Pill from '/components/pill';
import ContactDetails from '@/components/contact';

export default function CvPage() {
    const handlePrintClick = () => {
        const toPrint = document.getElementById('to-print');
            
        // toPrint.style.margin = 'auto';
        // toPrint.style.width = '210mm';
        // toPrint.style.minHeight = '297mm';

        PrintToPfd(toPrint);
    }

    return <div id='to-print' >
        <h1>Curriculum Vitae</h1>

        <button className='hidden' id='print-button' data-html2canvas-ignore="true" onClick={handlePrintClick}>
            <Pill text='Download PDF' />
        </button>
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
            <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col pb-2" >
                <div className="min-w-80 max-sm:pb-2">
                    <h2>Employment History</h2>
                </div>
            </div>
            {Jobs.map(job => <div key={job.identifier} className='pb-10 border-solid border-b-2 mt-5'><Job {...job} /></div>)}
        </div>
    </div>
}