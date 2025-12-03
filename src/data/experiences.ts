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
    company: 'Lorem Ipsum Corp',
    role: 'Lorem Ipsum',
    period: '2023 - Present',
    location: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    achievements: [
      'Lorem ipsum dolor sit amet consectetur',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit',
    ],
    technologies: ['Lorem', 'ipsum',],
    logo: '/images/company-logo.png',
  },
];
