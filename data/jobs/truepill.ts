import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const TruepillJob: IJob = {
    identifier: "tp-2021",
    company: "Truepill",
    role: "Lead Software Engineer",
    location: "Manchester (Remote)",
    dateFrom: setDate('Feb 2021'),
    dateTo: setDate('Jul 2022'),
    jobInfo: {
        objectives: ["Line manage a team of engineers",
            "Help grow the engineering function via recruitment",
            "Implement Agile ways of working",
            "Working 90% line management, 10% hands on coding"],
        achievements: ["Delivered a new online pharamacy platform (http://costplusdrugs.com) including creating the architectural design that supported 2m+ unique visitors per week",
            "Implemented and refined Agile ways of working, moving the team towards working in SCRUM",
            "Acted as Engineering Manager on the new online pharmacy project (Cost Plus Drugs)",
            "Hired the first graduate in the company"],
        reasonForLeaving: ["Decided to move on after the company fell into financial difficulty"],
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