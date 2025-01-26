import { Technology } from "@/components/sections/Projects";

interface ProjectTechnologiesProps {
  technologies: Technology[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 px-2.5 py-1 h-7 rounded-full text-xs font-medium
                       transform transition-all duration-300 hover:scale-110 hover:shadow-lg
                       hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: `${tech.color}50`,
                color: tech.textColor || tech.color,
              }}
            >
              <tech.icon className="w-3.5 h-3.5" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTechnologies;
