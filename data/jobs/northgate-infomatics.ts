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
        objectives: ['Work as a hands on engineer on the companies flagship resource management product aimed at UK police forces.',
            'Partake recruitment and interviewing candidates.'],
        achievements: ["Delivery of key features such as 'Event Planning', 'Personnel Management', 'Rules Engine Rebuild' and 'Time Banks' resulting in a better user experience, and making resource management in the police forces more efficient.",
            "Migration of technology from 32bit to 64bit architecture, allowing software to access more resources per server, reducing the amount of servers requried and saving police fources expenditure in servers to support the application.",
            "Performance improvements of application, such as speed improvements to take a 36 hour automated job to take 20 minutes, allowing for generation and regeneration of personnel rosters faster, with no issue with re-running the process.",
            'Introduced automated unit tests, improving the quality of new feature development and a faster response to issues in the code.',
            'Rebuilt arechitecture from a monolothic VB.Net application to a SOA C# Architecture, providing a decouple system that uses less resources to run the application, and providing flexibility for alternative front ends.',
            'Design of large scale Oracle database partitioning and archiving solution, vastly improving the performance of queries against the large database holding rostering information.',
            'Oversight of eight offshore engineers, ensuring that the appoaches and directives are consistent.'
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