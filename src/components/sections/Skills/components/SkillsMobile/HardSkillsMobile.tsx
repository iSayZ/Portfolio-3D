"use client";

import { useState } from "react";
import { hardSkillsMobile } from "@/config/skills.config";
import { Skill } from "../../types";
import Image from "next/image";

const HardSkillsMobile: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="space-y-12 px-6">
      <h2 className="text-3xl font-bold text-center">Hard Skills :</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {hardSkillsMobile.map((skill: Skill) => (
          <div
            key={skill.name}
            className="h-min w-min py-2 px-4 flex items-center gap-2 border border-muted rounded-md cursor-pointer"
            style={{
              backgroundColor:
                hoveredSkill === skill.name
                  ? `${skill.color}50`
                  : `${skill.color}20`,
              color: skill.textColor || skill.color,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(skill.name)}
          >
            <div className="relative size-6">
              <Image
                src={skill.path!}
                alt={skill.name}
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="text-sm font-medium truncate">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkillsMobile;
