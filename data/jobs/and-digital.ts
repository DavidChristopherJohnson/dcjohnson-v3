import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const HeliosXJob: IJob = {
    identifier: "heliosx-2023",
    company: "HeliosX",
    role: "Engineering Manager",
    location: "London (Remote)",
    dateFrom: setDate('Mar 2023'),
    dateTo: setDate('Jun 2023'),
    jobInfo: {
        objectives: [],
        achievements: [],
        reasonForLeaving: ["The company was not in the secure financial state that they advertised when starting",
            "Micro-management company culture creating a less than idea working environment"],
        skills: []

    }
}