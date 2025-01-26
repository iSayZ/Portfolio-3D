import { Github, Linkedin, Mail } from "lucide-react";
import { SocialButton } from "./types";
import { socialLinks } from "@/config/links.config";

export const socialButtons: SocialButton[] = [
  {
    link: socialLinks.github.url,
    bgColor: "bg-slate-900",
    icon: <Github className="size-6" />,
  },
  {
    link: socialLinks.linkedin.url,
    bgColor: "bg-blue-700",
    icon: <Linkedin className="size-6" />,
  },
  {
    link: `mailto:${socialLinks.mail.url}`,
    bgColor: "bg-red-500",
    icon: <Mail className="size-6" />,
  },
];
