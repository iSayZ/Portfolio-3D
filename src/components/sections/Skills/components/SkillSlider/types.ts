export interface Skill {
  icon?: React.ElementType;
  path?: string;
  name: string;
  color?: string;
}

export interface SkillSliderProps {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
  withImage?: boolean;
}