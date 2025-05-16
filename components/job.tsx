'use client'
import formatDate from "@/utils/format-date";
import JobInfo from "./job-info";
import IJob from "@/interfaces/job.interface";

export default function Job(job: IJob) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-2">{job.company}</h3>
                {job.annotation && <div className="text-blue-400 mb-2">{job.annotation}</div>}
                <div className="text-xl font-semibold text-gray-300 mb-1">{job.role}</div>
                <div className="text-gray-400 mb-1">{job.location}</div>
                <div className="text-gray-400 mb-4">{formatDate(job.dateFrom)} - {formatDate(job.dateTo)}</div>
            </div>
            <div className="md:col-span-3">
                <JobInfo {...job.jobInfo} />
            </div>
        </div>
    );
}