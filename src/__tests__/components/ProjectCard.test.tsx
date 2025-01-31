import { ProjectCard } from "@/components/sections/Projects/components/ProjectCard";
import { techStack } from "@/config/projects.config";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ProjectCard", () => {
  const mockRouter = { push: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  const project = {
    id: "portfolio-windows-11",
    title: "Portfolio Windows 11",
    cover: "/assets/images/projects/portfolio-windows-11/desktop.png",
    desc: "Windows 11 Portfolio est une réplique web interactive de l'interface Windows 11.",
    screenshots: [
      "/assets/images/projects/portfolio-windows-11/desktop.png",
      "/assets/images/projects/portfolio-windows-11/terminal.png",
    ],
    technologies: [
      techStack.next,
      techStack.typescript,
      techStack.tailwind,
      techStack.mongodb,
    ],
    demoLink: "https://windows.estrine-alexis.fr",
    githubRepoLink: "https://github.com/iSayZ/Windows-Portfolio",
    isInConstruction: false,
    date: "Janvier 2025",
  };

  it("should display project title and description", () => {
    render(<ProjectCard project={project} />);

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.desc)).toBeInTheDocument();
  });

  it("should display the cover image", () => {
    render(<ProjectCard project={project} />);

    const image = screen.getByRole("img", {
      name: new RegExp(project.title, "i"),
    });
    expect(image).toBeInTheDocument();
  });

  it("should display the project's technologies", () => {
    render(<ProjectCard project={project} />);

    project.technologies.forEach((tech) => {
      expect(screen.getByText(tech.name)).toBeInTheDocument();
    });
  });

  it("should navigate to the project page when clicking the button", () => {
    render(<ProjectCard project={project} />);

    const button = screen.getByRole("button", { name: /en savoir plus/i });
    fireEvent.click(button);

    expect(mockRouter.push).toHaveBeenCalledWith(
      `/portfolio/projets/${project.id}`,
    );
  });

  it("should not display 'En construction' if the project is finished", () => {
    render(<ProjectCard project={project} />);

    expect(screen.queryByText("En construction")).not.toBeInTheDocument();
  });

  it("should show 'En construction' if the project is still in progress", () => {
    render(<ProjectCard project={{ ...project, isInConstruction: true }} />);

    expect(screen.getByText("En construction")).toBeInTheDocument();
  });
});
