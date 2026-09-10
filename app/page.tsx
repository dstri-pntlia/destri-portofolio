import { ProfileCard } from "@/features/profile/profile-card";
import { ProjectsSection } from "@/features/projects/projects-section";
import { ExperienceListSection } from "@/features/experience/experience-list-section";

export default function Home() {
  return (
    <>
      <ProfileCard />
      <ProjectsSection />
      <ExperienceListSection />
    </>
  );
}
