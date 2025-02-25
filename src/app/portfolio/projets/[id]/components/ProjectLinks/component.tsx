import { Github, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectLinksProps {
  githubLink?: string;
  demoLink?: string;
  videoLink?: string;
  onVideoClick?: () => void;
  isInConstruction: boolean;
  setShowConstructionDemoLinkAlert: (value: boolean) => void;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  githubLink,
  demoLink,
  videoLink,
  onVideoClick,
  isInConstruction,
  setShowConstructionDemoLinkAlert,
}) => {
  const onOpenDemoLink = () => {
    if (isInConstruction) {
      setShowConstructionDemoLinkAlert(true);
    } else {
      window.open(demoLink);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {githubLink && (
        <Button
          onClick={() => window.open(githubLink)}
          className="bg-slate-500 hover:bg-slate-600"
        >
          <Github className="mr-2" />
          Code source
        </Button>
      )}
      {demoLink && (
        <Button
          onClick={onOpenDemoLink}
          className="bg-primary hover:bg-primary/90"
        >
          <ExternalLink className="mr-2" />
          Voir la démo
        </Button>
      )}
      {videoLink && (
        <Button variant="destructive" onClick={onVideoClick}>
          <Play className="mr-2" />
          Voir la vidéo
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
