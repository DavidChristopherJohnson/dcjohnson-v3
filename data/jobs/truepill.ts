import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const HeliosXJob: IJob = {
    identifier: "tp-2021",
    company: "Truepill",
    role: "Lead Software Engineer",
    location: "manchester (Remote)",
    dateFrom: setDate('Feb 2021'),
    dateTo: setDate('Jul 2022'),
    jobInfo: {
        objectives: ["Line manage a team of engineers",
            "Help grow the engineering function via recruitment",
            "Implement new ways of working",
            "Working 90% line management, 10% hands on coding"],
        achievements: ["Delivered a new online pharamacy platform (http://costplusdrugs.com) including creating the architectural design",
            "Implemented and refined SCRUM ways of working"],
        reasonForLeaving: ["The company was not in the secure financial state that they advertised when starting",
            "Acted as Engineering Manager on new pharmacy project",
            "Micro-management company culture creating a less than idea working environment",
            "Hired the first graduate in the company"],
        skills: [
            "Leadership",
            "Line Management",
            "Performance Management",
            "Next.js",
            "Node.js",
            "Koa",
            "NestJs",
            "TypeORM",
            "Jest",
            "Cypress",
            "Postgres",
            "MySql",
            "Rambda",
            "CircleCI",
            "Elastic Search",
            "Contentful / CRM",
            "Plytix Integrations",
            "Gatsby",
            "React",
            "CI/CD",
            "SCRUM / Agile",
            "Capacity Planning",
            "Stakeholder Management"]

    }
}