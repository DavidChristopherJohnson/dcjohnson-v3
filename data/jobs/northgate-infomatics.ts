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
        objectives: ['Work as a hands on engineer on the companys flagship resource management product aimed at UK police forces.',
            'Partake in recruitmenting and interviewing candidates.'],
        achievements: ["Delivery of key features such as 'Event Planning', 'Personnel Management', 'Rules Engine Rebuild' and 'Time Banks' resulting in a better user experience and making resource management easier and more cost effective.",
            "Migration of technology from 32bit to 64bit architecture, allowing software to access more resources per server, reducing the amount of servers requried and saving police fources expenditure in servers to support the application.",
            "Performance improvements of the main application, such improvementing a 36 hour automated job, to ruin instead in 20 minutes, allowing more flexibility to the user's in terms of when to generate and re-generate data.",
            'Introduced automated unit tests, improving the quality of new feature development and a faster response to found issues.',
            'Rebuilt arechitecture from a monolothic VB.Net application to a SOA C# platform, providing a decoupled system that utilised less system resources, and providing flexibility for alternative front ends.',
            'Design of large scale Oracle database partitioning and archiving solution, vastly improving the performance of queries against the large database holding rostering information, resulting in less time spend managing rosters.',
            'Oversight of eight offshore engineers, ensuring that the appoaches and directives are consistent, in addition to reviewing quality, resulting in a low mnumber of new defects.'
        ],
        reasonForLeaving: ["After 7 years in this role I wanted to move on to another challenge."],
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