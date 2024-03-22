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
            "Set technical roadmap for tibe(s)",
            "Review team structure and techincal skills",
            "Use tech to empower the company",
            "Identify single points of failure"
        ],
        achievements: ["Successfull line managed 2 teams of engineers, across 3 products.",
            "Implemented SCRUM in all teams within my tribes",
            "Implemented process of preview branches to reduce bottleneck from QA in release pipeline",
            "Implemented company wide DORA metrics, and gave education on what they mean",
            "Defined technical roadmap for 2023 Q3, 2023 Q4 and 2023 Q5",
            "Acted as Head of Engineering and Principal Engineer due to lack of personnel",
            "Improved QA process, introducing more E2E automation",
            "Introduced uptime metrics to ensure the team was aware as soon as there was a problem",
            "Re-structured teams to spread knowledge and improve operational efficiency",
            "Delivered initiative to decouple engineering from content so that content could deliver more markets at pace",
            "Designed solution to allow content to speed up further by automating some of their updates",
            "Identified and documented single points of failure",
            "Introduced a GAP Analysis framework for my team (which was adopted by other teams) that tracks a persons performance against the company role definitions. This helped craft goals for each engineer to help them progress in their career inside the company, in addition to working towards their ultimate career goals"
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
            "Team Goal / OKR Tracking"]
    }
}