export interface AboutData {
  name: string;
  initials: string;
  class: string;
  bio: string;
  basicInfo: Array<{
    label: string;
    value: string;
  }>;
  skills: Array<{
    category: string;
    technologies: Array<{
      name: string;
      icon?: string;
    }>;
  }>;
  archives: Array<{
    title: string;
    content: string;
  }>;
  resumeUrl?: string;
}

export const aboutData: AboutData = {
  name: 'Caio Teixeira',
  initials: 'CT',
  class: 'Desenvolvedor Fullstack',
  bio: 'Desenvolvedor fullstack com dois anos de experiência em projetos web. Trabalho principalmente com React e Next.js no frontend, Nest.js e FastAPI no backend. Gosto de resolver problemas com código limpo e bem organizado.',
  
  basicInfo: [
    { label: 'Location', value: 'Brasil' },
    { label: 'Experience', value: '2 anos' },
    { label: 'Focus', value: 'Desenvolvimento Web' },
    { label: 'Status', value: 'Disponível para projetos' },
  ],
  
  skills: [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Astro', icon: '🚀' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🎨' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Nest.js', icon: '🐈' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Flask', icon: '🔗' },
        { name: 'Prisma ORM', icon: '🔮' },
        { name: 'SQL', icon: '💾' },
      ],
    },
  ],
  
  archives: [
    {
      title: 'Design',
      content: 'Prototipação e design de interfaces com Figma.',
    },
    {
      title: 'DevOps',
      content: 'CI/CD com GitHub Actions, deploy e automação de processos.',
    },
  ],
  
  resumeUrl: '/cv_pt.pdf',
};
