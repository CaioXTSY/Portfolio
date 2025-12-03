import type { TechCategory } from '../types';

export const techStack: TechCategory[] = [
  {
    id: 'languages',
    number: '01',
    title: 'LANGUAGES',
    items: [
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'Go', icon: 'devicon-go-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'C#', icon: 'devicon-csharp-plain' },
    ],
  },
  {
    id: 'frameworks',
    number: '02',
    title: 'FRAMEWORKS',
    items: [
      { name: 'NestJS', icon: 'devicon-nestjs-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Django', icon: 'devicon-django-plain' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
      { name: 'Flask', icon: 'devicon-flask-original' },
      { name: 'React', icon: 'devicon-react-original' },
    ],
  },
  {
    id: 'tools',
    number: '03',
    title: 'TOOLS',
    items: [
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Redis', icon: 'devicon-redis-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
    ],
  },
];
