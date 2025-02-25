"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { projects } from "@/config/projects.config";

import { ProjectNavigationBar } from "./components/ProjectNavigationBar";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { ProjectTitle } from "./components/ProjectTitle";
import { ProjectLinks } from "./components/ProjectLinks";
import { ProjectDescription } from "./components/ProjectDescription";
import { ProjectTechnologies } from "./components/ProjectTechnologies";
import { FullScreenCarousel } from "./components/FullScreenCarousel";
import { VideoPlayer } from "./components/VideoPlayer";
import { ConstructionDemoLinkAlertDialog } from "./components/ConstructionDemoLinkAlertDialog";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const project = projects.find((p) => p.id === params.id);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [showConstructionDemoLinkAlert, setShowConstructionDemoLinkAlert] =
    useState<boolean>(false);

  if (!project) return router.push("/");

  return (
    <div className="min-h-screen w-full pt-12 pb-16">
      <div className="relative h-[50vh] md:h-[60vh] bg-black">
        <ProjectNavigationBar
          onBack={() => router.back()}
          onFullScreen={() => setIsFullScreen(true)}
        />

        {project.screenshots.length > 0 && (
          <ProjectCarousel screenshots={project.screenshots} />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <ProjectTitle
          title={project.title}
          date={project.date}
          isInConstruction={project.isInConstruction}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 pt-8">
        <div className="grid md:grid-cols-1 gap-8">
          <ProjectLinks
            githubLink={project.githubRepoLink}
            demoLink={project.demoLink}
            videoLink={project.videoDemoLink}
            onVideoClick={() => setIsVideoOpen(true)}
            isInConstruction={project.isInConstruction}
            setShowConstructionDemoLinkAlert={setShowConstructionDemoLinkAlert}
          />
          <ProjectDescription description={project.desc} />
          <ProjectTechnologies technologies={project.technologies} />
        </div>
      </div>

      <FullScreenCarousel
        images={project.screenshots}
        isOpen={isFullScreen}
        onClose={() => setIsFullScreen(false)}
      />

      {project.videoDemoLink && (
        <VideoPlayer
          videoId={project.videoDemoLink}
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      )}

      <ConstructionDemoLinkAlertDialog
        open={showConstructionDemoLinkAlert}
        onOpenChange={setShowConstructionDemoLinkAlert}
        demoLink={project.demoLink}
      />
    </div>
  );
}
