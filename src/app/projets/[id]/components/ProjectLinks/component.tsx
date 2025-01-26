import { Github, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectLinksProps {
  githubLink?: string;
  demoLink?: string;
  videoLink?: string;
}

const ProjectLinks = ({
  githubLink,
  demoLink,
  videoLink,
}: ProjectLinksProps) => {
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
          onClick={() => window.open(demoLink)}
          className="bg-primary hover:bg-primary/90"
        >
          <ExternalLink className="mr-2" />
          Voir la démo
        </Button>
      )}
      {videoLink && (
        <Button variant="destructive" onClick={() => window.open(videoLink)}>
          <Play className="mr-2" />
          Voir la vidéo
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
