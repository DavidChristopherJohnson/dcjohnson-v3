import { IJobInfo } from "./job-info.interface"

export default interface IJob {
    identifier: string //Used as key in loops
    company: string
    role: string
    location: string
    dateFrom: Date
    dateTo: Date
    jobInfo: IJobInfo
}