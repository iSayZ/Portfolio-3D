import { ChevronDown, Github, Linkedin, Mail, Redo2 } from "lucide-react";
import { OverlayProps } from "./types";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "@/components/Theming/ThemeToggleButton";

const Overlay: React.FC<OverlayProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <div className="text-slate-50 font-mono text-lg">ae.dev</div>
          <div className="flex gap-6">
            <ThemeToggleButton />
            <Github className="w-6 h-6 text-slate-50 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-slate-50 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-6 h-6 text-slate-50 hover:text-white cursor-pointer transition-colors" />
          </div>
        </nav>

        {/* Central content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-50 mb-6">
            Alexis Estrine
          </h1>
          <p className="text-xl text-slate-50 mb-8">
            Développeur Full Stack JS · Créateur d'expériences web
          </p>
          <Button onClick={() => onToggle(false)} variant="secondary" className="py-5 bg-slate-50 text-black hover:text-slate-50">
            Explorer mon univers
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute w-full bottom-8 flex justify-center text-slate-50 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Button to redisplay overlay - visible only when overlay is hidden */}
      <Button
        onClick={() => onToggle(true)}
        className={`absolute top-6 right-6 p-3 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Redo2 className="w-6 h-6" />
      </Button>
    </>
  );
};

export default Overlay;
