import type { Project } from '../types';

export const professionalProjects: Project[] = [
  {
    id: 'pro-1',
    title: 'Site Rápido Infoshop',
    description: 'Institutional website for Rápido Infoshop with product showcase, responsive design, and optimized user experience. Features modern interface, fast loading times, and seamless navigation across all devices.',
    year: '2024',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM', 'MySQL'],
    featured: true,
  },
  {
    id: 'pro-2',
    title: 'Site Brejo dos Bois',
    description: 'Institutional website for Brejo dos Bois cachaçaria featuring product catalog, brand storytelling, and responsive design. Showcases their premium beverages with a focus on user engagement and smooth browsing experience across all platforms.',
    year: '2024',
    role: 'Fullstack Developer',
    techStack: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM'],
  },
  {
    id: 'pro-3',
    title: 'Finasa',
    description: 'Financial control platform integrated with AI capabilities for intelligent financial queries and analysis. Allows users to manage finances efficiently while leveraging AI to gain insights and make data-driven financial decisions.',
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
  {
    id: 'pro-5',
    title: 'Vendedor Online Oops Telecom',
    description: 'WhatsApp-based sales platform for Oops Telecom plans with integrated payment processing. Features state machine management for order flow and Mercado Pago integration for secure transactions.',
    year: '2024',
    role: 'Backend Developer',
    techStack: ['Python', 'PyTransitions', 'WhatsApp API', 'Mercado Pago'],
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
