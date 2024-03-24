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
        objectives: ["Take over running of the engineering team for flagship products",
            "Assess the technical skills within the team",
            "Review priorities and roadmap for product development",
            "Improve scrum processes and implement correct Agile working practises",
            "Get team to a point where they are hitting their commitments"],
        achievements: ["Implemented knowledge transfer of SCRUM, agile, estimation and velocity tracking, resulting in consistent delivery of commitments week on week",
            "Worked as intrim Product Owner after the previous PO was made redundant",
            "Re-prioritised items on the product roadmap resulting in delivery of revenue generating initiatives that boosted revenue by ~$12,000 per month, and improved the internal reputation of the engineering team",
            "Refine scrum process and provided training to ensure that all ceremonies were being performed in a way ensuring everybody is engaged",
            "Instrumental in defining the microservice architecture platform that the technology was to migrate to"],
        reasonForLeaving: ["The company was not in the secure financial state that they advertised when starting, which was one main reason for joining",
            "Micro-management style company culture creating a less than idea working environment"],
        skills: ['Leadership', 'Line Management', 'Product Management', 'Strategic Planning', 'SCRUM / Agile', 'Performance Management', 'Stakeholder Management', "Capacity Planning", 'Team Goal / OKR Tracking']
    }
}