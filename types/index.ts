import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  url?: string;
  tech: string[];
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location?: string;
  achievements: string[];
  tech: string[];
}
