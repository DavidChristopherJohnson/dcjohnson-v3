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
        objectives: ["Line managment of the web team (up to 10 people) on the companies flagship product",
            "Provide input into the company wide technonlogy division",
            "Deliver enhancements to the product, while reducing technical debt"],
        achievements: ["Line managed 3 teams (web, iOS mobile and Android Mobile) on the companies flagship product",
            "Tracked team metrics to highlight areas for improvements. These included but were not exclusive to DORA metrics",
            "Reduced mission critical techincal debt around mobile implementations",
            "Reduced cost of Google Maps by a 3rd saving the company $1,500 per month",
            "Implementing recaptcha on forms within the site, stopping and further preventing attacks from automated bots",
            "Improved accuracy of estimations and consistency of team commitments",
            "Implementing SCRUM and Agile ways of working",
            "Implementation of 'Friday Fun' to improve the overall company culture"
        ],
        reasonForLeaving: ["The company started to have financial struggles, and I was looking for a place of stability at this point"],
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