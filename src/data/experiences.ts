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
    role: 'Estagiário Desenvolvedor Fullstack',
    period: '2024 - Presente',
    location: 'Brasil',
    description: 'Atuação no desenvolvimento fullstack de soluções internas para otimização de processos e de projetos externos para clientes de diversos segmentos. Responsável pelo ciclo completo de desenvolvimento, da concepção ao deploy e à manutenção.',
    achievements: [
      'Implementação de soluções de inteligência artificial e automação de atendimento com chatbots',
      'Desenvolvimento de arquiteturas escaláveis e APIs RESTful de alto desempenho com Nest.js e FastAPI',
      'Integração de sistemas de pagamento e serviços externos para otimizar processos de negócio',
    ],
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'Prisma ORM', 'MySQL', 'React'],
    logo: '/rapido_logo.webp',
  },
];
