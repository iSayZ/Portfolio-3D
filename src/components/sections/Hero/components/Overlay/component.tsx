import { Button } from "@/components/ui/button";
import { contentsConfig } from "@/config/contents.config";
import { useOverlay } from "@/contexts/OverlayContext";
import { ChevronDown, ChevronUp, Undo2 } from "lucide-react";
import { OverlayProps } from "./types";

const Overlay: React.FC<OverlayProps> = ({ hasExplored, setHasExplored }) => {
  const { isOpen, setIsOpen } = useOverlay();

  const handleExplore = (value: boolean) => {
    setIsOpen(value);
    if (!value) setHasExplored(true);
  };

  return (
    <>
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Central content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-50 mb-6">
            {contentsConfig.hero.title}
          </h1>
          <p className="text-xl text-slate-50 mb-8">
            {contentsConfig.hero.description}
          </p>
          <div className="relative group">
            <Button
              onClick={() => handleExplore(false)}
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
        onClick={() => handleExplore(true)}
        className={`absolute top-6 right-6 p-3 max-md:top-4 max-md:right-4 h-10 text-black bg-secondary/70 backdrop-blur-sm hover:bg-secondary/90 ${
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
