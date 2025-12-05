export interface NavItem {
  id: string;
  href: string;
  number: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  category?: string;
  role: string;
  techStack: string[];
  image?: string;
  link?: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  number: string;
  title: string;
  items: TechItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
