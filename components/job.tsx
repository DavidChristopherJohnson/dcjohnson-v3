import formatDate from "@/utils/format-date";
import JobInfo from "./job-info";
import IJob from "@/interfaces/job.interface";

export default function Job(job: IJob) {
    return <>
        <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col" >
            <div className="min-w-80">
                <h2>{job.company}</h2>
                <h3>{job.role}</h3>                
                <h3>{job.location}</h3>
                <h3>{formatDate(job.dateFrom)} - {formatDate(job.dateTo)}</h3>
            </div>
            <div>
                <JobInfo {...job.jobInfo} />
            </div>
        </div>
    </>
}