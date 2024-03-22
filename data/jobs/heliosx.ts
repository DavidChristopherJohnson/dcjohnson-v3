import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const HeliosXJob: IJob = {
    identifier: "heliosx-2023",
    company: "HeliosX",
    role: "Engineering Manager",
    location: "London (Remote)",
    dateFrom: setDate('Mar 2023'),
    dateTo: setDate('Jun 2023'),
    jobInfo: {
        objectives: ["Take over running of the engineering team for the flagship products",
            "Assess the technical skills within the team",
            "Review priorities and roadmap for engineering development",
            "Improve scrum processes",
            "Get team to a point where they are hitting their commitments"],
        achievements: ["Implemented training in estimation and velocity tracking, resulting in consistent delivery of commitments from the team",
            "Worked as intrim Product Owner after the previous PO got made redundant",
            "Re-prioritised items on the product roadmap resulting in delivery of revenue generating initiatives that boosted revenue by $12,000 per month, and improved the reputation of the engineering team",
            "Refine scrum process and provided training to ensure that all ceremonies were being performed in a way ensuring everybody is engaged",
            "Instrumental in defining the microservices architecture platform that the technology was going to migrate to"],
        reasonForLeaving: ["The company was not in the secure financial state that they advertised when starting, which was one main reason for joining",
            "Micro-management style company culture creating a less than idea working environment"],
        skills: ['Leadership', 'Line Management', 'Product Management', 'Strategic Planning', 'SCRUM / Agile', 'Performance Management', 'Stakeholder Management', "Capacity Planning", 'Team Goal / OKR Tracking']
    }
}