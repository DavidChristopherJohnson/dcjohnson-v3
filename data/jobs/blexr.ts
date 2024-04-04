import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const BlexrJob: IJob = {
    identifier: "blexr-2023",
    company: "Blexr",
    role: "Engineering Manager - CasinoReviews.com & Bonuses.com",
    location: "Malta (Remote)",
    dateFrom: setDate('June 01, 2023'),
    dateTo: setDate('March 01 2024'),
    jobInfo: {
        objectives: ["Line management of two teams of engineers.",
            "Improve ways of working within the engineering teams.",
            "Implement change throughout the company-wide technology chapter.",
            "Set technical roadmaps for tribes.",
            "Review team structure and technical skills.",
            "Use tech to empower the other chapters and the larger company.",
            "Identify single points of failure."
        ],
        achievements: ["Implemented SCRUM in all teams within my tribes which resulted in a better understanding of velocity and capability, leading to more accurate estimates and a reputation boost in terms of delivery for the team.",
            "Implemented process of preview branches to reduce bottleneck between QA and deployment to production, which resulted in a more efficient pipeline in addition to enabling the engineers to release all tested changes to production, without the fear of releasing untested features. This in turn increased the rate of deployment.",
            "Implemented company-wide DORA metrics, and provided knowledge transfer on what they mean, resulting in a better understanding of where our pain points were, and the overall health of the company's engineering function.",
            "Defined technical roadmap for 2023 Q3, 2023 Q4 and 2024 Q1, providing visibility for the initiatives we committed to delivering in each quarter around operational efficiency, improving the development experience and improving the speed of delivery (reduction in lead time).",
            "Acted as Head of Engineering and Principal Engineer due to lack of personnel, ensuring that there was adequate leadership from within the team to function, in the absence of dedicated personnel with these roles.",
            "Improved QA process, introducing E2E and visual automation testing, allowing the team to identify issues earlier, resulting in improved throughput and higher quality of releases. This also improved confidence in the product deliveries.",
            "Introduced up-time metrics to ensure the team were alerted as soon as an outage or incident occurred, enabling faster responses and a rapid return to a stable state.",
            "Re-structured teams to improve knowledge transfer and operational efficiency, resulting in a more cohesive team and a better understanding overall of the entire product. This also removed single points of failure and improved an increase in velocity of feature development.",
            "Delivered initiative to decouple engineering from content, to ensure that content could be delivered at pace without a requirement on engineering, resulting in the content team delivering to more markets, increasing  traffic and revenue.",
            "Designed a solution to allow content to increase the pace of new market launches further, by automating parts of the market cloning functionality, which when implemented, will result in decreasing the time it takes the content team to create content for new markets across the company.",
            "Identified and documented single points of failure, ensuring we can plan and mitigate issues in the event of personnel leaving the organisation.",
            "Introduced a GAP Analysis framework for my team (later adopted by other line managers) that tracks an employee's performance against the company-wide role definitions. This helped craft goals for each engineer to give them direction for their progress in their careers both inside and outside of the company, in addition to helping them move towards their ultimate career goals."
        ],
        reasonForLeaving: ["Redundancy due to org restructure."],
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