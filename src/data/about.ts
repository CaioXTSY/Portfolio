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
  image?: string;
  resumeUrl?: string;
}

export const aboutData: AboutData = {
  name: 'Caio Teixeira',
  initials: 'CT',
  class: 'Fullstack Developer',
  bio: 'Fullstack developer with 2 years of experience in web projects. I work mainly with React, Next.js on the frontend and Nest.js, FastAPI on the backend. I like solving problems with clean and well-organized code.',
  
  basicInfo: [
    { label: 'Location', value: 'Brazil' },
    { label: 'Experience', value: '2 years' },
    { label: 'Focus', value: 'Web Development' },
    { label: 'Status', value: 'Open to Opportunities' },
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
      content: 'Figma for prototyping and interface design.',
    },
    {
      title: 'DevOps',
      content: 'GitHub Actions, CI/CD. Knowledge of deploy and process automation.',
    },
  ],
  
  image: '/images/profile.jpg',
  resumeUrl: '/cv.pdf',
};
