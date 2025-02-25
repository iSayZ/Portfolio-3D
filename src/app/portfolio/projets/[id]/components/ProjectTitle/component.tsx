import { Collaborator } from "@/components/sections/Projects";
import { Badge } from "@/components/ui/badge";

interface ProjectTitleProps {
  title: string;
  date: string;
  isInConstruction: boolean;
  collaboration: Collaborator | undefined;
}

export const ProjectTitle = ({
  title,
  date,
  isInConstruction,
  collaboration,
}: ProjectTitleProps) => (
  <div className="absolute bottom-0 left-0 right-0 p-8">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="mb-2 w-full">
          <h1 className="text-slate-50 text-4xl md:text-5xl w-full font-bold truncate overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h1>
          {(isInConstruction || collaboration) ? (
            <div className="flex gap-2 mt-2">
              {isInConstruction && (
                <Badge className="bg-amber-500 hover:bg-amber-600 cursor-pointer">
                  En construction
                </Badge>
              )}
              {collaboration && (
                <Badge className="bg-red-500 hover:bg-red-600 cursor-pointer flex justify-center">
                  Collaboration
                </Badge>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground">{date}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectTitle;
