"use client";

import { useIsScreenLarge } from "@/hooks/useIsLargeScreen";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "@/config/projects.config";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useProjectsStore } from "./store/useProjectStore";

export const Projects = () => {
  const { visibleProjects, setVisibleProjects } = useProjectsStore();
  const isLargeScreen = useIsScreenLarge(768);

  useEffect(() => {
    const minVisible = isLargeScreen ? 6 : 3;
    if (visibleProjects < minVisible) {
      setVisibleProjects(minVisible);
    }
  }, [isLargeScreen, visibleProjects, setVisibleProjects]);

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <section id="projects">
      <div className="container px-4 mx-auto flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        {projects.length > visibleProjects && (
          <Button
            onClick={showMoreProjects}
            variant="outline"
            className="p-6 text-lg bg-card mt-12"
          >
            Afficher plus de projets
          </Button>
        )}
      </div>
    </section>
  );
};

export default Projects;