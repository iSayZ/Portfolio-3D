"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SkillSliderProps } from "../../types";
import { hardSkills, softSkills } from "../../constants";

const SkillSlider: React.FC<SkillSliderProps> = ({
  skills,
  direction = "left",
  speed = 0.5,
  withImage = false,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemWidth = 200;

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!isPaused) {
        setScrollPosition((prev) => {
          const movement = direction === "left" ? speed : -speed;
          const newPosition = prev + movement;
          const maxScroll = skills.length * itemWidth;

          if (direction === "left") {
            return newPosition >= maxScroll ? 0 : newPosition;
          } else {
            return newPosition <= 0 ? maxScroll : newPosition;
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed, direction, skills.length]);

  return (
    <div className="relative w-full ">
<div className="absolute left-0 top-0 z-10 h-full w-32 pointer-events-none opacity-70" />

      <div
        className="flex items-center gap-4"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          width: `${skills.length * itemWidth * 2}px`,
          transition: isPaused ? "transform 0.3s ease-out" : "none",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Card
            key={index}
            className="flex items-center gap-4 p-4 w-min h-[64px] hover:bg-secondary/50 transition-colors duration-300 cursor-pointer"
          >
            {withImage ? (
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image
                  src={skill.path!}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
            ) : (
              skill.icon && (
                <skill.icon
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: skill.color }}
                />
              )
            )}
            <span className="text-sm font-medium truncate">{skill.name}</span>
          </Card>
        ))}
      </div>

      <div className="absolute right-0 top-0 z-10 h-full w-32 pointer-events-none opacity-70" />
      </div>
  );
};

export const HardSkillsDesktop = () => (
  <SkillSlider
    skills={hardSkills}
    direction="left"
    speed={0.5}
    withImage={true}
  />
);

export const SoftSkillsDesktop = () => (
  <SkillSlider
    skills={softSkills}
    direction="right"
    speed={0.5}
    withImage={false}
  />
);

export default SkillSlider;
