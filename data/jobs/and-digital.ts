import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const ANDJob: IJob = {
    identifier: "and-2019",
    company: "AND Digital",
    role: "Senior Software Engineer",
    location: "Halifax, West Yorkshire",
    dateFrom: setDate('Apr 2016'),
    dateTo: setDate('Oct 2019'),
    jobInfo: {
        objectives: ['Work as Senior Engineer within the software consultancy',
            'Lead on client side projects',
            'Provide technical guidance and training for Junior engineers',
            'Provide career guidance for other engineers'],
        achievements: ['Lead the solution design and technical delivery of a front end (angular 2) decision tree application for StepChange debt charity',
            'Delivery of components for Lloyds Banking Group on their Scottish Widows pension platform',
            'Delivery of a new Covea external website',
            'Training junior engineers on programming best practises',
            'Advising engineers on SCRUM and Agile ways of working',
            'Delivering in-house software solution, that provided a way to train internal engineers as well as providing tools for the company',
            'Hosted technical talks and "Lunch and Learn" sessions',
            'Advocated for junior engineers during progression discussions as their career coach'],
        reasonForLeaving: ["Wanting to reprise my role as a technical leader & line manager"],
        skills: ['Leadership',
            'Software Architecture',
            'C# / .Net', "Azure",
            'Node.js', 'React', 'Angular', 'Nest.js', 'Next.js', 'TypeORM', 'jest', 'cypress',
            'JavaScript', 'Typescript',
            'Koa', 'Express', 'Fastify', 'MySql', 'MariaDb', 'SQL Server', 'Postgres', 'Git', 'Jira', 'Confulence', 'SCRUM', 'Agile', 'Career Coaching', 'Technical Presentation'
        ]
    }
}