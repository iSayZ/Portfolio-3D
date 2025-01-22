'use client';

import { useIsScreenLarge } from '@/hooks/useIsLargeScreen';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './constants';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number>(3);
  
  const isLargeScreen = useIsScreenLarge(768);

  useEffect(() => {
    isLargeScreen ? setVisibleProjects(6) : setVisibleProjects(3);
  }, [isLargeScreen]);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  }

  const showLessProjects = () => {
    setVisibleProjects((prev) => prev - 3);
  }

  return (
    <section id="projects">
      <div className="container px-4 mx-auto flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='w-full flex justify-center'>
          {projects.length > visibleProjects ?
          <Button onClick={showMoreProjects} variant='ghost' className='text-blue-600 underline hover:text-blue-400 hover:bg-none'>
            Afficher plus de projets
          </Button>
          :
          ""
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;