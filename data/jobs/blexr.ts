import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const BlexrJob: IJob = {
    identifier: "blexr-2023",
    company: "Blexr",
    role: "Engineering Manager",
    location: "Malta (Remote)",
    dateFrom: setDate('Jun 2023'),
    dateTo: setDate('Mar 2024'),
    jobInfo: {
        objectives: ["Objective 1",
            "Objective 2"],
        achievements: ["Achievement 1",
            "Achievement 2",
            "Achievement 3"],
        reasonForLeaving: ["Redundancy"]

    }
}