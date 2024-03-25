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
            "Implemented SCRUM in all teams within my tribes which resulted in a better understanding of velocity and capability, leading to more accurate estimates and a reputation boost for the team.",
            "Implemented process of preview branches to reduce bottleneck between QA and deployment to production, which resulted in a more efficient pipline, enabling the engineers to release all tested changes to production, without the fear of releasing untested features. This in turn increased the rate of deployment.",
            "Implemented company wide DORA metrics, and provided knowledge transfer on what they mean, which resulted in a better understanding of where our bottle necks are, and the health of our overall engineering function, allowing us to prioritise changes in the development process.",
            "Defined technical roadmap for 2023 Q3, 2023 Q4 and 2024 Q1, providing visibility for the inintiatives we committed to delivering in each quarter to imptove operational efficiency, improving the development experience and improving the speed of delivery (reduction in lead time).",
            "Acted as Head of Engineering and Principal Engineer due to lack of personnel, ensuring that there was adequate leadership from within the team to function, in the absence of somebody with these roles",
            "Improved QA process, introducing E2E and visual automation testing, allowing the team to identify issues earlier, resulting in improved throughput and higher quality of releases, in addition to improved confidence in the product deliveries.",
            "Introduced up-time metrics to ensure the team was alerted as soon as there was an outage, enabling the team to respond faster when there was a major incident.",
            "Re-structured teams to improve knowledge transfer and operational efficiency, resulting in greater throughput of work, which resulted in a better undestanding throughout the team of the entire product, removed single points of failure, and improved throughput of deliverable features.",
            "Delivered initiative to decouple engineering from content, to ensure that content could deliver at pace without a requirement on engineering, resulting in the team delivering to more markets to increase traffic and revenue.",
            "Designed solution to allow content to increase pace of new market launches further, by automating parts of the market cloneing functionality, which will result in decreasing the time that the content team spend to deliver new markets across the company (not just the team) upon implementation",
            "Identified and documented single points of failure, ensuring we can plan and mitigate in case of personnel leaving the organisation",
            "Introduced a GAP Analysis framework for my team (which was later adopted by other line managers for their teams) that tracks a persons performance against the company wide role definitions. This helped craft goals for each engineer to give them direction for their progress in their careers both inside and outside of the company, in addition to helping them move towards their ultimate career goals"
        ],
        reasonForLeaving: ["Redundancy due to org restructure"],
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