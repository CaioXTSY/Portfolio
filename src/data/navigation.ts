import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  { id: 'nav-home', href: '#home', number: '01' },
  { id: 'nav-about', href: '#about', number: '02' },
  { id: 'nav-professional', href: '#professional', number: '03' },
  { id: 'nav-personal', href: '#personal', number: '04' },
  { id: 'nav-experience', href: '#experience', number: '05' },
  { id: 'nav-contact', href: '#contact', number: '06' },
];

export const siteConfig = {
  name: 'Caio Teixeira',
  firstName: 'CAIO',
  lastName: 'TEIXEIRA',
  role: 'DESENVOLVEDOR FULLSTACK',
  description: 'Portfólio de Caio Teixeira, desenvolvedor fullstack especializado em React, Next.js, NestJS, FastAPI e soluções web com inteligência artificial.',
  availableForWork: true,
};
