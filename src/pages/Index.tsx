import { Navigation } from '@/components/Navigation';
import { HomeSection } from '@/components/home/HomeSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
