"use client";

import { useIsScreenLarge } from "@/hooks/useIsLargeScreen";
import { SoftSkillsDesktop, HardSkillsDesktop } from "./components/SkillSlider";
import { HardSkillsMobile, SoftSkillsMobile } from "./components/SkillsMobile";

const Skills: React.FC = () => {
  const isLargeScreen = useIsScreenLarge(768);

  return (
    <section
      id="skills"
      className={`w-full overflow-hidden ${isLargeScreen ? "space-y-6" : "space-y-24"}`}
    >
      {isLargeScreen ? (
        <>
          <SoftSkillsDesktop />
          <HardSkillsDesktop />
        </>
      ) : (
        <>
          <HardSkillsMobile />
          <SoftSkillsMobile />
        </>
      )}
    </section>
  );
};

export default Skills;
