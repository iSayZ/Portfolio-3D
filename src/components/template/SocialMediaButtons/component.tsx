import { FC } from "react";
import { socialLinks } from "./constants";

const SocialMediaButtons: FC = () => {
  return (
    <div className="fixed bottom-6 right-0 flex flex-col shadow-sm z-40">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 ${social.bgColor} text-white shadow-md transition-transform hover:opacity-80`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;
