import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  MenuIcon,
  Redo,
  Redo2,
  Undo2,
} from "lucide-react";
import { OverlayProps } from "./types";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "@/components/Theming/ThemeToggleButton";
import { useEffect } from "react";

const Overlay: React.FC<OverlayProps> = ({ isOpen, onToggle, hasExplored }) => {
  // /!\ DISABLED FOR NOW /!\ Scroll controls /!\ DISABLED FOR NOW /!\
  // useEffect(() => {
  //   // Stop scrolling if hasExplored is false
  //   if (!hasExplored) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   // Cleanup on component destruction
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [hasExplored]);

  return (
    <>
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <div className="text-slate-50 font-mono text-lg">LOGO</div>
          <div className="flex gap-4">
            {/* <ThemeToggleButton /> */}
            <Button variant="outline" className="px-2">
              <MenuIcon className="size-6" />
            </Button>
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
          <div className="relative group">
            <Button
              onClick={() => onToggle(false)}
              variant="secondary"
              className="py-5 bg-slate-50 text-black hover:text-slate-50 animate-pulse"
            >
              Explorer mon univers
            </Button>
            {!hasExplored && (
              <div className="flex flex-col items-center gap-2 mt-4 animate-bounce text-slate-50/80">
                <ChevronUp className="w-8 h-8" />
                <p className="text-sm">Commence par explorer mon univers 3D</p>
              </div>
            )}
          </div>
        </div>

        {hasExplored && (
          <div className="absolute w-full bottom-8 flex flex-col items-center text-slate-50 animate-bounce">
            <p className="text-sm mb-2">Maintenant, découvre mon travail</p>
            <ChevronDown className="w-8 h-8" />
          </div>
        )}
      </div>

      {/* Button to redisplay overlay - visible only when overlay is hidden */}
      <Button
        onClick={() => onToggle(true)}
        className={`absolute top-6 right-6 p-3 max-sm:right-auto max-sm:left-1/2 max-sm:-translate-x-1/2 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Undo2 className="w-6 h-6" />
        Retour au portfolio
      </Button>
    </>
  );
};

export default Overlay;
