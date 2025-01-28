"use client";

import FadeInOnScroll from "@/components/template/animations/FadeInOnScroll";
import SlideInOnScroll from "@/components/template/animations/SlideInOnScroll";
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
    <section
      id="skills"
      className="w-full overflow-x-hidden overflow-y-visible space-y-24 py-1"
    >
      {isLargeScreen ? (
        <>
          <FadeInOnScroll>
            <SoftSkillsDesktop />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <HardSkillsDesktop />
          </FadeInOnScroll>
        </>
      ) : (
        <>
          <FadeInOnScroll moveY={50}>
            <HardSkillsMobile />
          </FadeInOnScroll>
          <FadeInOnScroll moveY={50}>
            <SoftSkillsMobile />
          </FadeInOnScroll>
        </>
      )}
    </section>
  );
};

export default Skills;
