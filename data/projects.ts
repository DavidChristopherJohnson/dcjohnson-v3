import IProject from "@/interfaces/project.interface";

const projects: Array<IProject> = [
  {
    id: "bombe-io",
    title: "Bombe.Io",
    description: "As Engineering Manager, I led the successful release of Bombe's flagship product and continue to drive the development roadmap. The platform leverages advanced statistical models created by top data scientists to provide actionable customer insights. Built a scalable system that helps businesses understand customer motivations, preferences, and behaviors through intuitive data visualization and AI-powered analytics.",
    link: "https://bombe.io",
    technologies: ["Python", "TensorFlow", "React", "AWS", "Data Visualization", "Machine Learning", "NLP", "Big Data"],
    icon: "brain",
    year: "2022-present",
    companyName: "Bombe"
  },
  {
    id: "cost-plus-drugs",
    title: "Mark Cuban Cost Plus Drugs",
    description: "Led the development of an online pharmacy platform that serves over 2 million weekly visitors. Built with Next.js, Node.js, and NestJS, the platform provides affordable prescription medications by cutting out middlemen. Implemented a robust infrastructure that scales with high traffic and maintains strict regulatory compliance.",
    link: "https://costplusdrugs.com",
    technologies: ["Next.js", "Node.js", "NestJS", "TypeORM", "Postgres", "CircleCI", "Contentful CMS"],
    icon: "pill",
    year: "2021-2022",
    companyName: "Truepill"
  },
  {
    id: "scottish-widows",
    title: "Scottish Widows Pension Platform",
    description: "Delivered key components for Lloyds Banking Group's Scottish Widows pension platform. Implemented complex financial calculations and regulatory-compliant user interfaces, significantly improving platform stability and user experience.",
    link: "https://www.scottishwidows.co.uk/",
    technologies: ["Angular", "TypeScript", "Node.js", "Jest"],
    icon: "bank",
    year: "2019-2021",
    companyName: "AND Digital"
  },
  {
    id: "stepchange",
    title: "StepChange Debt Charity",
    description: "Led solution design and technical delivery of a decision tree application to help users navigate debt relief options. The Angular-based frontend application improved user engagement and significantly streamlined the debt advice journey.",
    link: "https://www.stepchange.org/",
    technologies: ["Angular", "TypeScript", "SCSS", "Node.js", "Agile"],
    icon: "helping-hand",
    year: "2019-2021",
    companyName: "AND Digital"
  },
  {
    id: "casinoreviews",
    title: "CasinoReviews.com",
    description: "Managed engineering teams for this major online casino review platform. Implemented SCRUM methodology, preview branches, and DORA metrics that improved deployment frequency and throughput. Built automated testing frameworks that improved site reliability.",
    link: "https://casinoreviews.com",
    technologies: ["PHP", "JavaScript", "AWS", "E2E Testing", "Automation"],
    icon: "dice",
    year: "2023-2024",
    companyName: "Blexr"
  },
  {
    id: "keyedin-projects",
    title: "KeyedIn Projects",
    description: "Contributed to the development of a SaaS platform for Project Portfolio Management (PPM) and Professional Services Automation (PSA). Delivered critical features including portfolio management, capacity planning, and hybrid resource management that drove customer acquisition globally.",
    link: "https://www.keyedin.com/",
    technologies: ["C#", ".NET", "Azure", "TypeScript", "SQL Server", "MVC"],
    icon: "gantt-chart",
    year: "2016-2019",
    companyName: "KeyedIn Solutions"
  }
];

export default projects; 