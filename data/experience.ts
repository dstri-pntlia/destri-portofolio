import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "PT Indonesia Kreatif Teknologi",
    role: "Fullstack Developer",
    duration: "Sep 2025 — Present",
    achievements: [
      "Developed and maintained backend services for an enterprise HRIS covering employee management, attendance, leave management, permissions, and organizational workflows",
      "Designed database schemas and built Payroll modules — payroll generation, overtime calculations, PPh21 tax, BPJS processing, and payroll previews",
      "Implemented asynchronous notification workflows using RabbitMQ and Firebase Cloud Messaging to improve system reliability and user communication",
      "Contributed to WorkNation, a recruitment platform, building backend features for job postings, candidate management, and recruitment workflows",
      "Collaborated with frontend developers using Next.js to deliver end-to-end features across the HRIS and recruitment platforms",
    ],
    tech: ["TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Firebase", "Next.js"],
  },
  {
    company: "Proxycurl",
    role: "Software Engineer",
    duration: "Nov 2024 — Jan 2025",
    location: "Singapore",
    achievements: [],
    tech: [],
  },
  {
    company: "qbit",
    role: "Fullstack Developer Intern",
    duration: "Mar 2024 — Nov 2024",
    location: "Jakarta, Indonesia",
    achievements: [
      "Maintained a React-based website with regular updates and bug fixes",
      "Built a content management system using React for easy content handling",
      "Developed and implemented RESTful APIs using Node.js and TypeScript",
      "Managed data storage with PostgreSQL",
      "Designed, tested, and documented API endpoints with Swagger",
    ],
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Swagger"],
  },
  {
    company: "M-Knows Consulting",
    role: "Back-End, API and Database Developer",
    duration: "Aug 2023 — Dec 2023",
    location: "Jakarta Selatan, Indonesia",
    achievements: [
      "Served as Person in Charge (PIC), coordinating team communication and scheduling",
      "Built features as a backend developer using Express.js, managing the HTTP request workflow between client and server",
      "Integrated TypeScript into the project to improve type safety and code readability",
      "Used PostgreSQL for data storage and Postman for endpoint testing",
    ],
    tech: ["Express.js", "TypeScript", "PostgreSQL", "Postman"],
  },
  {
    company: "Bangkit Academy by Google, Tokopedia, Gojek & Traveloka",
    role: "Cloud Computing Cohort",
    duration: "Feb 2023 — Aug 2023",
    achievements: [
      "Learned cloud computing fundamentals through building a highly available architecture on Google Cloud Platform",
      "Built a capstone project as part of a team to solve a real-world problem",
      "Learned logging, monitoring, and observability on GCP for preventive and corrective troubleshooting",
    ],
    tech: ["Google Cloud Platform"],
  },
];
