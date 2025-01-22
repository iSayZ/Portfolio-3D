import { SoftSkills, TechStack } from "./components/SkillSlider";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full overflow-hidden space-y-6">
      <SoftSkills />
      <TechStack />
    </section>
  );
};

export default Skills;
