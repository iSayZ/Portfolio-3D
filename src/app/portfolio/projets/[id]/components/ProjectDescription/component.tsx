import { Collaborator } from "@/components/sections/Projects";

interface ProjectDescriptionProps {
  description: string;
  collaboration: Collaborator[] | undefined;
}

const ProjectDescription = ({
  description,
  collaboration,
}: ProjectDescriptionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">À propos du projet</h2>
        {collaboration && (
          <div className="mb-2 flex gap-1">
            <p>En collaboration avec</p>
            {collaboration.map((collaborator, index) => (
              <div className="flex" key={index}>
                <a
                  href={collaborator.link}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-400"
                >
                  {collaborator.name}
                </a>
                {/* Add "," comma except for the second-to-last and last elements */}
                {index < collaboration.length - 2 && <p>,</p>}
                {/* Add "et" for the second-to-last element */}
                {index === collaboration.length - 2 && (
                  <p className="ml-1">et</p>
                )}
                {/* Add "." after the last element */}
                {index === collaboration.length - 1 && <p>.</p>}
              </div>
            ))}
          </div>
        )}
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDescription;
