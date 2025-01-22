import { SoftSkills, TechStack } from "./components/SkillSlider";

const Skills: React.FC = () => {
  return (
    <div className="w-full overflow-hidden space-y-6">
      <SoftSkills />
      <TechStack />
    </div>
  );
};

export default Skills;
