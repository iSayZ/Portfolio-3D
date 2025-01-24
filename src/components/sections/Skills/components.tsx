"use client";

import { useIsScreenLarge } from "@/hooks/useIsLargeScreen";
import dynamic from "next/dynamic";

const HardSkillsDesktop = dynamic(
  () => import("./components/SkillSlider").then((mod) => mod.HardSkillsDesktop),
  { ssr: false },
);
const SoftSkillsDesktop = dynamic(
  () => import("./components/SkillSlider").then((mod) => mod.SoftSkillsDesktop),
  { ssr: false },
);
const HardSkillsMobile = dynamic(
  () => import("./components/SkillsMobile").then((mod) => mod.HardSkillsMobile),
  { ssr: false },
);
const SoftSkillsMobile = dynamic(
  () => import("./components/SkillsMobile").then((mod) => mod.SoftSkillsMobile),
  { ssr: false },
);

const Skills: React.FC = () => {
  const isLargeScreen = useIsScreenLarge(768);

  return (
    <section id="skills" className="w-full overflow-hidden">
      {isLargeScreen ? (
        <div className="space-y-6">
          <SoftSkillsDesktop />
          <HardSkillsDesktop />
        </div>
      ) : (
        <div className="space-y-24">
          <HardSkillsMobile />
          <SoftSkillsMobile />
        </div>
      )}
    </section>
  );
};

export default Skills;
