import { Eye, ShieldCheck } from "lucide-react";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "KlikHadeer",
    category: "HRIS / Attendance",
    description:
      "An HRIS and attendance platform with GPS-verified clock-in/out, leave and overtime management, work schedules, multi-branch support, and payroll integration for teams managing remote and hybrid staff.",
    url: "https://klikhadeer.com/",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Firebase", "Next.js"],
    image: "/projects/klikhadeer.png",
  },
  {
    title: "WorkNation",
    category: "Recruitment",
    description:
      "A job portal connecting Indonesian workers with employment opportunities abroad — job postings, candidate management, and recruitment workflows end to end.",
    url: "http://worknation.id/",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "Next.js"],
    image: "/projects/worknation.png",
  },
  {
    title: "Devisaku",
    category: "Migrant Worker Protection / Fintech",
    description:
      "A protection and services platform for Indonesian migrant workers abroad — digital document storage, emergency support, placement tracking, and remittance, connecting workers, agencies, and government representatives in one app.",
    url: "https://devisaku.id/en",
    tech: ["TypeScript", "NestJS", "PostgreSQL"],
    coverIcon: ShieldCheck,
  },
  {
    title: "Medeasy",
    category: "Digital Health",
    description:
      "A digital health app for the Philippines — personal medical records, booking consultations with partner doctors and clinics, and managing appointments in one place.",
    url: "https://medeasy.ph/",
    tech: ["TypeScript", "NestJS", "PostgreSQL"],
    image: "/projects/medeasy.png",
  },
  {
    title: "Eye Care Mobile App",
    category: "Health Tech / Computer Vision",
    description:
      "Point your phone at your eye and get an instant screening — an ML model checks the photo for signs of cataracts and other eye disease, no clinic visit required. I built the backend behind that detection flow: endpoints, database, and deployment.",
    tech: ["TypeScript", "MySQL", "Google Cloud Platform"],
    coverIcon: Eye,
  },
];
