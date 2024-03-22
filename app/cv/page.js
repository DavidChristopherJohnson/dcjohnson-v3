import Job from '@/components/job';
import Jobs from '@/data/jobs';

export default function CvPage() {
    return <>
        <h1>Curriculum Vitae</h1>
        <div className="w-full max-w-7xl flex flex-grow-1 flex-col" >
               {Jobs.map(job => <div key={job.identifier} className='pb-10 border-solid border-b-2 mt-5'><Job {...job} /></div>)}
        </div>
    </>
}