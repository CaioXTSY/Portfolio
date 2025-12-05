export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: '01',
    company: 'Rápido Infoshop',
    role: 'Fullstack Developer Intern',
    period: '2024 - Present',
    location: 'Brazil',
    description: 'Contributing to the development and maintenance of institutional website and multiple web applications. Working on both frontend and backend solutions, implementing features, fixing bugs, and optimizing performance across the company tech stack.',
    achievements: [
      'Developed and maintained institutional website with responsive design and modern interface',
      'Implemented fullstack features using Next.js, Nest.js and TypeScript',
      'Integrated database solutions with Prisma ORM and MySQL',
      'Collaborated with team on multiple production projects and improvements',
    ],
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM', 'MySQL', 'React'],
    logo: '/images/company-logo.png',
  },
];
