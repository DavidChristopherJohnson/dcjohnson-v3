import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const FlipdishJob: IJob = {
    identifier: "Flipdish-2022",
    company: "Flipdish",
    role: "Engineering Manager",
    location: "Manchester (Remote)",
    dateFrom: setDate('Jul 2022'),
    dateTo: setDate('Mar 2023'),
    jobInfo: {
        objectives: [],
        achievements: [],
        reasonForLeaving: []

    }
}