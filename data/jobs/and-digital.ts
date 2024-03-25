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
        objectives: ['Work as Senior Engineer within the software consultancy.',
            'Lead on client side projects.',
            'Provide technical guidance and training for Junior engineers.',
            'Provide career guidance for other engineers.'],
        achievements: ['Lead the solution design and technical delivery of a front end (angular 2) decision tree application for StepChange debt charity, resulting in the delivery of the project on time, with a high level of customer satisfaction and quality.',
            'Delivery of components for Lloyds Banking Group on their Scottish Widows pension platform, resulting in a more stable platform for their pension portal.',
            'Delivery of a new Covea external website, allowing a better user experience.',
            'Training junior engineers on programming best practises, resulting in a lift in the average skill level of software engineers within the Halifax club.',
            'Advising engineers on SCRUM and Agile ways of working, resulting in engineers being able to on-board to client with less friction, having being used to the ways of working concepts.',
            'Hosted technical talks and "Lunch and Learn" sessions, providing additional upskilling throughout the Halifax club and wider company.',
            'Advocated for junior engineers during progression discussions as their career coach, resulting in 2 of the engineers I was career coach for getting successful progression.'],
        reasonForLeaving: ["Wanting to reprise my role as a technical leader & line manager."],
        skills: ['Leadership',
            'Software Architecture',
            'C# / .Net', "Azure",
            'Node.js', 'React', 'Angular', 'Nest.js', 'Next.js', 'TypeORM', 'jest', 'cypress',
            'JavaScript', 'Typescript',
            'Koa', 'Express', 'Fastify', 'MySql', 'MariaDb', 'SQL Server', 'Postgres', 'Git', 'Jira', 'Confulence', 'SCRUM', 'Agile', 'Career Coaching', 'Technical Presentation'
        ]
    }
}