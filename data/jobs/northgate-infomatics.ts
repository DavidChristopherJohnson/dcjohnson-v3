import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const NorthgateJob: IJob = {
    identifier: "Northgate-2019",
    company: 'Northgate Public Services',
    annotation: "(Now NEC Software)",
    role: "Technical Lead",
    location: "Ossett, West Yorkshire",
    dateFrom: setDate('Jul 2009'),
    dateTo: setDate('Apr 2016'),
    jobInfo: {
        objectives: ['Work as a hands on engineer on the companies flagship resource management product aimed at police forces'],
        achievements: ['Delivery of redesigned event planning functionality',
            'Delviery of redesigned personnel management functionality',
            'Rebuild of timebank functionality',
            'Rebuild of the softwares complex rules engine',
            "Migration of technology from 32bit to 64bit architecture",
            'Progression to Principle Engineer during tenure',
            "Performance improvements of application, such as speed improvements to take a 36 hour automated job to take 20 minutes",
            'Introduced automated unit tests',
            'Rebuilt arechitecture from a monolothic VB.Net application to a SOA C# Architecture',
            'Design of large scale Oracle database partitioning and archiving solution',
            'Oversight of eight offshore engineers',
            'Involvement in recruitment and interview process'],
        reasonForLeaving: ["After 7 years in this role I wanted to move on to another challenge"],
        skills: ['Technical Leadership',
            'Software Architecture',
            'C#', "VB.Net", "ASP.Net",
            "MVC", "NUnit",
            'Javascript', 'Oracle', 'SQL Server',
            'Subversion', 'Apache', 'Microsoft Visual Source Safe',
            'Team Foundation Service',
            "Database Administration",
            'Network Administration'
        ]
    }
}