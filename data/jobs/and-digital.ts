import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const HeliosXJob: IJob = {
    identifier: "and-2019",
    company: "AND Digital",
    role: "Senior Software Engineer",
    location: "Halifax, West Yorkshire",
    dateFrom: setDate('Oct 2019'),
    dateTo: setDate('Feb 2021'),
    jobInfo: {
        objectives: [],
        achievements: [],
        reasonForLeaving: ["The company was not in the secure financial state that they advertised when starting",
            "Micro-management company culture creating a less than idea working environment"],
        skills: []

    }
}