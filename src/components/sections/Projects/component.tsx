"use client";

import { useIsScreenLarge } from "@/hooks/useIsLargeScreen";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "@/config/projects.config";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useProjectsStore } from "./store/useProjectStore";
import FadeInOnScroll from "@/components/template/animations/FadeInOnScroll";
import { Project } from "./types";

export const Projects = () => {
  const { visibleProjects, setVisibleProjects } = useProjectsStore();
  const isLargeScreen = useIsScreenLarge(768);

  const [sortedProjects, setSortedProjects] = useState<Project[]>(() => {
    const projectsInConstruction = projects.filter(project => project.isInConstruction);
    const finishedProjects = projects.filter(project => !project.isInConstruction);
    return [...projectsInConstruction, ...finishedProjects];
  });

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
        <FadeInOnScroll moveY={50}>
          <h2 className="text-3xl font-bold text-center">Mes Projets</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6">
          {sortedProjects.slice(0, visibleProjects).map((project) => (
            <FadeInOnScroll key={project.id} moveY={50}>
              <ProjectCard project={project} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-4">
        {sortedProjects.length > visibleProjects && (
          <FadeInOnScroll moveY={50}>
            <Button
              onClick={showMoreProjects}
              variant="outline"
              className="p-6 text-lg bg-card mt-12"
            >
              Afficher plus de projets
            </Button>
          </FadeInOnScroll>
        )}
      </div>
    </section>
  );
};

export default Projects;
