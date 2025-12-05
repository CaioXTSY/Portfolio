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
    title: 'Seller Chatbot',
    description: 'WhatsApp-based sales platform for Oops Telecom plans with integrated payment processing. Features state machine management for order flow and Mercado Pago integration for secure transactions.',
    year: '2024',
    role: 'Backend Developer',
    techStack: ['Python', 'PyTransitions', 'WhatsApp API', 'Mercado Pago'],
  },
];

export const personalProjects: Project[] = [
  {
    id: 'personal-1',
    title: 'This Portfolio',
    description: 'Personal portfolio website built with modern web technologies. Showcases projects, experience, and skills with a focus on responsive design and user experience.',
    year: '2025',
    role: 'Developer',
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'personal-2',
    title: 'Vorplay API',
    description: 'Backend API with Spotify integration for music-related operations. Features authentication with Passport and data persistence using Prisma ORM.',
    year: '2025',
    role: 'Backend Developer',
    techStack: ['Nest.js', 'Prisma ORM', 'Spotify API', 'Passport'],
  },
  {
    id: 'personal-3',
    title: 'Vorp',
    description: 'Markdown note creation and editing platform. Allows users to create, organize, and manage notes with markdown support.',
    year: '2024',
    role: 'Full Developer',
    techStack: ['Django', 'Python'],
  },
  {
    id: 'personal-4',
    title: 'MonaAI API',
    description: 'Document reading and analysis API with AI-powered conversation capabilities. Upload documents and interact with them using natural language queries powered by AI.',
    year: '2024',
    role: 'Backend Developer',
    techStack: ['Python', 'AI/ML', 'Document Processing'],
  },
];
