import { Github, Linkedin, Mail } from "lucide-react";
import { socialLink } from "./types";

export const socialLinks: socialLink[] = [
  {
    link: "https://github.com/iSayZ",
    bgColor: "bg-slate-900",
    icon: <Github className="size-6" />,
  },
  {
    link: "https://www.linkedin.com/in/alexis-estrine/",
    bgColor: "bg-blue-700",
    icon: <Linkedin className="size-6" />,
  },
  {
    link: "mailto:estrine.alexis@gmail.com",
    bgColor: "bg-red-500",
    icon: <Mail className="size-6" />,
  },
];
