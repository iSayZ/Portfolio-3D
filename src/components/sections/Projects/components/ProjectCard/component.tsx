"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCardProps } from "./types";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      className="overflow-hidden group relative cursor-pointer hover:bg-muted transition"
      onClick={() => window.open(project.link, "_blank")}
    >
      {project.isActive && (
        <Badge
          variant="default"
          className="absolute top-4 right-4 z-10 bg-green-500/80 hover:bg-green-500"
        >
          En construction
        </Badge>
      )}
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden">
          {project.logo ? (
            <div
              className="flex items-center justify-center h-full"
              style={{ backgroundColor: project.bgColor }}
            >
              <Image
                src={project.logo}
                alt={project.title}
                width={300}
                height={100}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : null}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 min-h-[64px]">
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 px-2.5 py-1 h-7 rounded-full text-xs font-medium
                          transform transition-all duration-300 hover:scale-110 hover:shadow-lg
                          hover:-translate-y-1 cursor-pointer"
                style={{
                  backgroundColor: `${tech.color}20`,
                  color: tech.textColor || tech.color,
                }}
              >
                <tech.icon className="w-3.5 h-3.5" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full"
          onClick={() => window.open(project.link, "_blank")}
        >
          En savoir plus
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
