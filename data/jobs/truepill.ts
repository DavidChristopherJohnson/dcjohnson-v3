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
        objectives: ["Line manage a team of engineers.",
            "Help grow the engineering function via recruitment.",
            "Implement Agile ways of working.",
            "Work 90% as line management and 10% as individual contributor."],
        achievements: ["Delivered a new online pharmacy platform (http://costplusdrugs.com) that supports 2m+ unique visitors per week, driving revenue for the company.",
            "Implemented and refined agile ways of working, moving the team towards working in SCRUM resulting in accurate estimations and setting of realistic expectations with stakeholders. This also highlighted additional recruitment requirements.",
            "Acted as Engineering Manager on the new online pharmacy project (Cost Plus Drugs), resulting in a continuation of leadership and direction for the engineering teams in the absence of dedicated personnel.",
            "Hired the first graduate in the company, resulting in a company-wide graduate program initiative being created."],
        reasonForLeaving: ["Decided to move on after the company fell into financial difficulty."],
        skills: [
            "Leadership",
            "Line Management",
            "Performance Management",
            "Software Architecture",
            "Git",
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
            "Jira",
            "Confluence",
            "Stakeholder Management"]

    }
}