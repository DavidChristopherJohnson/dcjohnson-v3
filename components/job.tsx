import formatDate from "@/utils/format-date";
import JobInfo from "./job-info";
import IJob from "@/interfaces/job.interface";

export default function Job(job: IJob) {

    const Annotation = ({annotation}:{annotation: string | undefined}) => {
        if(annotation) {
            return <h2>{annotation}</h2>
        }

        return ""
    }

    return <>
        <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col" >
            <div className="min-w-80 max-sm:pb-2">
                <h3>{job.company}</h3>
                <Annotation annotation={job.annotation} />
                <h4>{job.role}</h4>                
                <h4>{job.location}</h4>
                <h4>{formatDate(job.dateFrom)} - {formatDate(job.dateTo)}</h4>
            </div>
            <div>
                <JobInfo {...job.jobInfo} />
            </div>
        </div>
    </>
}