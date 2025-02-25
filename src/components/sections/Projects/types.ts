export interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
  textColor?: string;
}

export interface Collaborator {
  name: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  cover?: string;
  logo?: string;
  bgColor?: string;
  screenshots: string[];
  technologies: Technology[];
  demoLink?: string;
  videoDemoLink?: string;
  githubRepoLink?: string;
  isInConstruction: boolean;
  collaboration?: Collaborator;
  date: string;
}
