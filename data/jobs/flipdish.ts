import IJob from "@/interfaces/job.interface";
import setDate from "@/utils/set-date";


export const FlipdishJob: IJob = {
    identifier: "flip-2022",
    company: "Flipdish",
    role: "Engineering Manager - Web & Mobile",
    location: "Dublin (Remote)",
    dateFrom: setDate('Jul 2022'),
    dateTo: setDate('Apr 2023'),
    jobInfo: {
        objectives: ["Take on an line managment of the web team of up to 10 people on the companies flagship product",
            "Provide input into the larger company technonlogy division",
            "Deliver enhancements to the flagship product, while reducing technical debt"],
        achievements: ["Line managed 3 teams (web and mobile which was split into 2 sub teams) on the companies flagship product",
            "Tracked team metrics to show where improvements could be made. These included but were not exclusive to DORA metrics",
            "Reduced mission critical techincal debt around mobile, where there were unsupported dependencies",
            "Reduced cost of Google Maps by 1/3rd saving the company $1,500 per month",
        "Implementing recaptcha on forms within the site, to prevent attacks from automated bots",
        "Improved accuracy of estimations and consistency in team commitments",
        "Implementing SCRUM ways of working",
        "Implementation of 'Friday Fun' to improve the overall company culture"
    ],
        reasonForLeaving: ["The company moving into financial struggles, and I was looking for a place of stability at this point"],
        skills: ["Leadership",
        "Line Management",
        "Strategic Planning",
        "Multiple Team Management",
        "SCRUM / Agile",
        "Performance Management",
        "Recruitment",
        "Capacity Planning",
        "Stakeholder Management",
        "Team Goal / OKR Tracking"]
    }
}