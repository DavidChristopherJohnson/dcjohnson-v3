import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const BlexrJob: IJob = {
    identifier: "blexr-2023",
    company: "Blexr",
    role: "Engineering Manager - CasinoReviews.com & Bonuses.com",
    location: "Malta (Remote)",
    dateFrom: setDate('Jun 2023'),
    dateTo: setDate('Mar 2024'),
    jobInfo: {
        objectives: ["Line manage a team of engineers",
            "Improve ways of working within the engineering teams",
            "Implement change throughout the company wide technology chapter",
            "Set technical roadmap for tibes",
            "Review team structure and techincal skills",
            "Use tech to empower the other chapters/the larger company",
            "Identify single points of failure"
        ],
        achievements: ["Successfully line managed two teams of engineers, across three products.",
            "Implemented SCRUM in all teams within my tribes",
            "Implemented process of preview branches to reduce bottleneck between QA and deployment to production",
            "Implemented company wide DORA metrics, and provided knowledge transfer on what they mean",
            "Defined technical roadmap for 2023 Q3, 2023 Q4 and 2024 Q1",
            "Acted as Head of Engineering and Principal Engineer due to lack of personnel",
            "Improved QA process, introducing E2E automation testing",
            "Introduced up-time metrics to ensure the team was alerted as soon as there was an outage",
            "Re-structured teams to improve knowledge transfer and operational efficiency, resulting in greater throughput of work",
            "Delivered initiative to decouple engineering from content, to ensure that content could deliver at pace without a requirement on engineering",
            "Designed solution to allow content to increase pace of new market launches further, by automating parts of the market cloneing functionality",
            "Identified and documented single points of failure",
            "Introduced a GAP Analysis framework for my team (which was later adopted by other line managers for their teams) that tracks a persons performance against the company wide role definitions. This helped craft goals for each engineer to give them direction for their progress in their careers both inside and outside of the company, in addition to helping them move towards their ultimate career goals"
        ],
        reasonForLeaving: ["Redundancy"],
        skills: ["Leadership",
            "Line Management",
            "Strategic Planning",
            "Capacity Planning",
            "Multiple Team Management",
            "SCRUM / Agile",
            "Performance Management",
            "Recruitment Interviews",
            "Stakeholder Management",
            "Team Goal / OKR Tracking",
            "Jira",
            "Notion"]
    }
}