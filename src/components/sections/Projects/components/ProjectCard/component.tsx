"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCardProps } from "./types";
import { useRouter } from "next/navigation";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <Card
      className="overflow-hidden group relative cursor-pointer hover:bg-muted transition"
      onClick={() => router.push(`/portfolio/projets/${project.id}`)}
    >
      {(project.isInConstruction || project.collaboration) && (
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {project.isInConstruction && (
            <Badge
              variant="default"
              className="bg-amber-500 hover:bg-amber-500"
            >
              En construction
            </Badge>
          )}
          {project.collaboration && (
            <Badge
              variant="default"
              className="bg-red-500 hover:bg-red-500 flex justify-center"
            >
              Collaboration
            </Badge>
          )}
        </div>
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
          <h3 className="text-xl font-semibold tracking-tight truncate">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden line-clamp-3">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 min-h-[64px] max-h-[64px] overflow-hidden">
            {project.technologies.map((tech) => {
              const baseColor = tech.color + "50";
              const hoverColor = tech.color + "20";

              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-2.5 py-1 h-7 rounded-full text-xs font-medium
                      transition-colors duration-300 cursor-pointer"
                  style={{
                    backgroundColor: baseColor,
                    color: tech.textColor || tech.color,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = hoverColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = baseColor)
                  }
                >
                  <tech.icon className="w-3.5 h-3.5" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full"
          onClick={() => router.push(`/portfolio/projets/${project.id}`)}
        >
          En savoir plus
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
