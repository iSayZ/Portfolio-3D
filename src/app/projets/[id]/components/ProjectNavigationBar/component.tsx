import { ArrowLeft, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectNavigationBarProps {
  onBack: () => void;
  onFullScreen: () => void;
}

const ProjectNavigationBar = ({
  onBack,
  onFullScreen,
}: ProjectNavigationBarProps) => (
  <div className="absolute top-0 left-0 right-0 p-4 z-30 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
    <Button
      onClick={onBack}
      className="bg-slate-50/20 backdrop-blur-sm hover:bg-slate-50/30"
    >
      <ArrowLeft className="mr-2" />
      Retour
    </Button>
    <Button
      onClick={onFullScreen}
      className="bg-slate-50/20 backdrop-blur-sm hover:bg-slate-50/30"
    >
      <Maximize2 className="mr-2 h-4 w-4" />
      Plein écran
    </Button>
  </div>
);

export default ProjectNavigationBar;
