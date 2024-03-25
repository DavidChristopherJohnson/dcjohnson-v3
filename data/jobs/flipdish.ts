import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const FlipdishJob: IJob = {
    identifier: "flip-2022",
    company: "Flipdish",
    role: "Engineering Manager - Web, iOS Mobile, Android Mobile",
    location: "Dublin (Remote)",
    dateFrom: setDate('Jul 2022'),
    dateTo: setDate('Apr 2023'),
    jobInfo: {
        objectives: ["Line managment of three engineering teams (web, mobile iOS and mobile Android), on the companies flagship product.",
            "Provide input into the company wide technonlogy division.",
            "Deliver enhancements to the product, while reducing technical debt."],
        achievements: ["Tracked team metrics to highlight areas for improvement. This resulted in pinpointing focus areas where the team inmproved in terms of operational efficiency, resulting in an improved speed to delivery and quality.",
            "Reduced mission critical techincal debt around mobile implementations, ensuring that as aging architecture is deprecated, the product was safe from exposure to security vulnerabilitys, and outages due to unavailable dependencies.",
            "Implemented changes in address autocomplete behaviour, resulting in a reduced cost of Google Maps by a 3rd saving the company $1,500 per month.",
            "Added recaptcha on public input forms and APIs within the main product, halting and further preventing attacks from automated bots, reducing the number of calls to our service, which, protected our infrastructure along with increased costs for cloud services.",
            "Improved accuracy of estimations and consistency of team commitments, providing a more reliable way to forcast work, and setting good expectations throughout the company.",
            "Implemented SCRUM and Agile ways of working, resulting the the engineering teams moving towards repeatedly deliverying on their commitments, preventing over-commitment and making all work visible.",
            "Introduced 'Friday Fun' to add to the overall company culture, improving moral."
        ],
        reasonForLeaving: ["The company started to have financial struggles, and I was looking for a place of stability at this point."],
        skills: ["Leadership",
            "Line Management",
            "Strategic Planning",
            "Multiple Team Management",
            "SCRUM / Agile",
            "Performance Management",
            "Recruitment",
            "Capacity Planning",
            "Stakeholder Management",
            "Team Goal / OKR Tracking",
            "Jira", "Notion", "CircleCI", 'Git']
    }
}