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
  techStack: string[];
  image?: string;
  mediaType?: 'image' | 'video';
}
