import { Mail } from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/shared/icons";
import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Destri Putri Natalia",
  role: "Backend Engineer",
  headline:
    "Backend-focused fullstack developer building HRIS, payroll & recruitment systems that scale.",
  bio: [
    "I build backend systems that businesses actually depend on — payroll that has to be exact, attendance data that has to be trusted, platforms that protect Indonesian workers abroad. I like problems where \"mostly right\" isn't good enough.",
    "TypeScript and NestJS are home base. Right now I'm stretching into Go and gRPC to get closer to the distributed-systems end of things.",
  ],
  avatarInitials: "DN",
  email: "destriputrinatalia@gmail.com",
  location: "Jakarta, Indonesia",
  url: "https://destriputri.dev",
  resumeUrl: "/resume/destri-putri-natalia-resume.pdf",
  github: "https://github.com/destriputri",
  gitlab: "https://gitlab.com/destriputri",
  linkedin: "https://www.linkedin.com/in/destriputrinatalia",
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
  { label: "GitLab", href: siteConfig.gitlab, icon: GitlabIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];
