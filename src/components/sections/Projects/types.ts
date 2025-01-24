export interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
  textColor?: string;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  cover?: string;
  logo?: string;
  bgColor?: string;
  technologies: Technology[];
  link: string;
  isActive?: boolean;
  date: string;
}
