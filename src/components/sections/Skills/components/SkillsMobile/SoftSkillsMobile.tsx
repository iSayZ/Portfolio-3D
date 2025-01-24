"use client";

import { useState } from "react";
import { softSkills } from "../../constants";
import { Skill } from "../../types";

const SoftSkillsMobile: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="space-y-12 px-6">
      <h2 className="text-3xl font-bold text-center">Soft Skills :</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {softSkills.map((skill: Skill) => (
          <div
            key={skill.name}
            className="h-min w-min py-2 px-4 flex items-center gap-2 border border-muted rounded-md cursor-pointer"
            style={{
              backgroundColor:
                hoveredSkill === skill.name
                  ? `${skill.color}50`
                  : `${skill.color}20`,
              color: skill.color,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(skill.name)}
          >
            {skill.icon && <skill.icon style={{ color: skill.color }} />}
            <span className="text-sm font-medium truncate">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkillsMobile;
