import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "PT Indonesia Kreatif Teknologi",
    role: "Fullstack Developer",
    duration: "Sep 2025 — Present",
    achievements: [
      "Built and maintained backend services for a multi-tenant HRIS — employee records, attendance, leave, and permissions",
      "Designed the payroll engine end to end: generation, overtime, PPh21 tax, BPJS, and preview runs",
      "Built async notification delivery with RabbitMQ and Firebase Cloud Messaging",
      "Shipped backend features for WorkNation, a recruitment platform, from job postings to candidate management",
      "Paired with frontend engineers on Next.js to ship end-to-end features across both platforms",
    ],
    tech: ["TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Firebase", "Next.js"],
  },
  {
    company: "Proxycurl",
    role: "Software Engineer",
    duration: "Nov 2024 — Jan 2025",
    location: "Singapore",
    achievements: [
      "Built a sandbox mode for API endpoints, letting integrations be tested safely before going live",
      "Fixed bugs and tuned performance on a Flask and Jinja2 product already in production",
      "Worked with PostgreSQL for day-to-day data storage and management",
      "Partnered with cross-functional teams to ship features and improve reliability",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "Git"],
  },
  {
    company: "qbit",
    role: "Fullstack Developer Intern",
    duration: "Mar 2024 — Nov 2024",
    location: "Jakarta, Indonesia",
    achievements: [
      "Maintained a React site — routine updates and bug fixes",
      "Built a CMS in React for non-technical content updates",
      "Built REST APIs in Node.js and TypeScript",
      "Modeled and managed data in PostgreSQL",
      "Documented and tested endpoints with Swagger",
    ],
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Swagger"],
  },
  {
    company: "M-Knows Consulting",
    role: "Back-End, API and Database Developer",
    duration: "Aug 2023 — Dec 2023",
    location: "Jakarta Selatan, Indonesia",
    achievements: [
      "Acted as Person in Charge, coordinating the team and keeping the project on schedule",
      "Built backend features in Express.js, owning the request/response flow between client and server",
      "Introduced TypeScript to the codebase for safer, more readable code",
      "Used PostgreSQL for storage and Postman for endpoint testing",
    ],
    tech: ["Express.js", "TypeScript", "PostgreSQL", "Postman"],
  },
  {
    company: "Bangkit Academy by Google, Tokopedia, Gojek & Traveloka",
    role: "Cloud Computing Cohort",
    duration: "Feb 2023 — Aug 2023",
    achievements: [
      "Learned to design and deploy highly-available architecture on Google Cloud Platform",
      "Built CheAT, a capstone app, with a team — backend in Node.js and Hapi, deployed on GCP App Engine",
      "Studied logging, monitoring, and observability on GCP for production troubleshooting",
    ],
    tech: ["Node.js", "Google Cloud Platform"],
  },
];
