import type { Project } from '../types';

export const professionalProjects: Project[] = [
  {
    id: 'pro-1',
    title: 'Site Rápido Infoshop',
    description: 'E-commerce platform with fast performance and modern interface.',
    year: '2024',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM', 'MySQL'],
    featured: true,
  },
  {
    id: 'pro-2',
    title: 'Site Brejo dos Bois',
    description: 'Institutional website with modern design and optimized performance.',
    year: '2024',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM'],
  },
  {
    id: 'pro-3',
    title: 'Finasa',
    description: 'AI-powered financial assistant using OpenAI API.',
    year: '2024',
    role: 'Backend Developer',
    techStack: ['Flask', 'OpenAI API', 'Python'],
  },
  {
    id: 'pro-4',
    title: 'Chatbot Brejo dos Bois',
    description: 'WhatsApp chatbot for customer support and automation.',
    year: '2024',
    role: 'Backend Developer',
    techStack: ['FastAPI', 'Python', 'Twilio', 'LangChain'],
  },
];

export const personalProjects: Project[] = [
  {
    id: 'personal-1',
    title: 'Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    year: '2024',
    category: 'Project',
    role: 'Developer',
    techStack: ['React', 'TypeScript', 'Node.js'],
    image: 'linear-gradient(135deg, #450a0a 0%, #dc2626 100%)',
  },
];
