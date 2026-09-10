import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "KlikHadeer",
    category: "HRIS / Attendance",
    description:
      "An HRIS and attendance platform with GPS-verified clock-in/out, leave and overtime management, work schedules, multi-branch support, and payroll integration for teams managing remote and hybrid staff.",
    url: "https://klikhadeer.com/",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Firebase", "Next.js"],
  },
  {
    title: "WorkNation",
    category: "Recruitment",
    description:
      "A job portal connecting Indonesian workers with employment opportunities abroad — job postings, candidate management, and recruitment workflows end to end.",
    url: "http://worknation.id/",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "Next.js"],
  },
  {
    title: "Devisaku",
    category: "Migrant Worker Protection / Fintech",
    description:
      "A protection and services platform for Indonesian migrant workers abroad — digital document storage, emergency support, placement tracking, and remittance, connecting workers, agencies, and government representatives in one app.",
    url: "https://devisaku.id/en",
    tech: ["TypeScript", "NestJS", "PostgreSQL"],
  },
  {
    title: "Medeasy",
    category: "Digital Health",
    description:
      "A digital health app for the Philippines — personal medical records, booking consultations with partner doctors and clinics, and managing appointments in one place.",
    url: "https://medeasy.ph/",
    tech: ["TypeScript", "NestJS", "PostgreSQL"],
  },
];
