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
    description: 'Working on fullstack development of internal solutions for process optimization and external projects for clients in various sectors. Responsible for the complete development lifecycle, from conception to deployment and maintenance.',
    achievements: [
      'Implementation of Artificial Intelligence solutions and customer service automation via Chatbots',
      'Development of scalable architectures and high-performance RESTful APIs using Nest.js and FastAPI',
      'Integration of payment systems and external services, optimizing business processes',
    ],
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM', 'MySQL', 'React'],
    logo: '/rapido_logo.png',
  },
];
