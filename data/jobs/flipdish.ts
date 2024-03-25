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
        objectives: ["Line managment of the three teams (web, mobile iOS and mobile Android), on the companies flagship product.",
            "Provide input into the company wide technonlogy division.",
            "Deliver enhancements to the product, while reducing technical debt."],
        achievements: ["Tracked team metrics to highlight areas for improvements. This resulted in pinpointing areas of improvement for the team in terms of operational efficiency, resulting in actions that improved speed to delivery, throughput and quality.",
            "Reduced mission critical techincal debt around mobile implementations, ensuring that as aging architecture is deprecated, the product was safe from exposure security vulnerabilitys, and unavailability of updates.",
            "implementing changes in address autocomplete behaviour, resulting in a reduced cost of Google Maps by a 3rd saving the company $1,500 per month.",
            "Implementing recaptcha on forms within the site, stopping and further preventing attacks from automated bots, reducing the number of calls to our service, protecting the infrastructure, and preventing attacks costing the company money.",
            "Improved accuracy of estimations and consistency of team commitments, providing a more reliable way to forcast work, and good expectations throughout the company.",
            "Implementing SCRUM and Agile ways of working, resulting the the engineering teams moving towards repeatedly deliverying on what they committed to, preventing over-commitment and making all work visible.",
            "Implementation of 'Friday Fun' to add to the overall company culture, improving moral."
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