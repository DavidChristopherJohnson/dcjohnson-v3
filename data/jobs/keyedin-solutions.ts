import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const KeyedInJob: IJob = {
    identifier: "keyedin-2019",
    company: "KeyedIn Solutions",
    role: "Technical Lead",
    location: "Bradford, West Yorkshire",
    dateFrom: setDate('Oct 2019'),
    dateTo: setDate('Feb 2021'),
    jobInfo: {
        objectives: ['Work as a technical expert on the flagship product',
            'Line manage a team of engineers',
            'Be responsible for team quality',
            'Recruit engineers',
            'Guide and develop junior engineers',
            'Hands on delivery of product features'],
        achievements: ['Delivery of rebuilt capacity planning functionality',
            'Delivery of portfolio planning functionality',
            'Delivery of new blended resource management functionality',
            'Line manager for four engineers',
            'Implemented new framework for unit testing that was adopted company wide',
            'Hired five junior - mid level engineers and managed their progress'],
        reasonForLeaving: ["I wanted to show my diversity as a software engineer and not get typecast as only working in .Net"],
        skills: ['Leadership',
            'Software Architecture',
            'C# / .Net', "Azure",
            "MVC", "Razor",
            'Typescript', 'NUnit', 'cypress',
            'SQL Server', 'Git', 'TFS (Team foundation service)', 'Jira'
        ]
    }
}