import { Skill } from "./types";
import {
  Brain,
  Users,
  Lightbulb,
  Smile,
  Shield,
  Target,
  Book,
  Clock,
  Puzzle,
  MessageSquare,
} from "lucide-react";

export const hardSkills: Skill[] = [
  { path: "/assets/images/icons/technos/javascript.svg", name: "JavaScript" },
  { path: "/assets/images/icons/technos/typescript.svg", name: "TypeScript" },
  { path: "/assets/images/icons/technos/react.svg", name: "React" },
  { path: "/assets/images/icons/technos/nextjs.svg", name: "Next.js" },
  { path: "/assets/images/icons/technos/nodejs.svg", name: "Node.js" },
  { path: "/assets/images/icons/technos/express.svg", name: "Express" },
  { path: "/assets/images/icons/technos/mongodb.svg", name: "MongoDB" },
  { path: "/assets/images/icons/technos/mysql.svg", name: "MySQL" },
  { path: "/assets/images/icons/technos/tailwind.svg", name: "Tailwind CSS" },
  { path: "/assets/images/icons/technos/github.svg", name: "Git" },
  { path: "/assets/images/icons/technos/docker.svg", name: "Docker" },
  { path: "/assets/images/icons/technos/figma.svg", name: "Figma" },
];

export const softSkills: Skill[] = [
  { icon: Brain, name: "Curiosité", color: "#6366f1" },
  { icon: Target, name: "Autonomie", color: "#ef4444" },
  { icon: Users, name: "Collaboration", color: "#3b82f6" },
  { icon: Smile, name: "Positivité", color: "#eab308" },
  { icon: Shield, name: "Résilience", color: "#84cc16" },
  { icon: Lightbulb, name: "Innovation", color: "#f59e0b" },
  { icon: Book, name: "Apprentissage continu", color: "#8b5cf6" },
  { icon: Clock, name: "Gestion du temps", color: "#06b6d4" },
  { icon: Puzzle, name: "Résolution de problèmes", color: "#ec4899" },
  { icon: MessageSquare, name: "Communication", color: "#0ea5e9" },
];
