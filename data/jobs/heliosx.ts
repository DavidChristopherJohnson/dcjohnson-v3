import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const HeliosXJob: IJob = {
    identifier: "heliosx-2023",
    company: "HeliosX",
    role: "Engineering Manager - Checkout & Subscriptions",
    location: "London (Remote)",
    dateFrom: setDate('Apr 2023'),
    dateTo: setDate('Jun 2023'),
    jobInfo: {
        objectives: ["Take over running of the engineering team for flagship products.",
            "Assess the technical skills within the team.",
            "Review priorities and roadmap for product development.",
            "Improve scrum processes and implement correct Agile working practises.",
            "Get team to a point where they are hitting their commitments."],
        achievements: ["Implemented knowledge transfer of SCRUM, agile, estimation and velocity tracking, resulting in consistent delivery of commitments week on week, improving the frequency of deliverables, setting correct expectations and improving the internal reputation of the engineering team.",
            "As intermin product owner, I re-prioritised items on the product roadmap resulting in delivery of revenue generating initiatives that boosted revenue by ~$12,000 per month.",
            "Instrumental in defining the microservice architecture platform that the technology was to migrate to, resulting in a scaleable architecture for the company to expand its user base."],
        reasonForLeaving: ["The companies financial state meant redundancies shortly after I joined. I was looking for a company with stability at this point."],
        skills: ['Leadership', 'Line Management', 'Product Management', 'Strategic Planning', 'SCRUM / Agile', 'Performance Management', 'Stakeholder Management', "Capacity Planning", 'Team Goal / OKR Tracking']
    }
}