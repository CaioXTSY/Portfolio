export const COLORS = {
  primary: '#e63946',
  primaryLight: 'rgba(230, 57, 70, 0.1)',
  primaryMedium: 'rgba(230, 57, 70, 0.3)',
  primaryDark: 'rgba(230, 57, 70, 0.5)',
  dark: '#0a0a0a',
  darkAlt: '#111',
  darkCard: '#1a1a1a',
  light: '#fafafa',
  white: '#ffffff',
  gray: {
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const TRANSITIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '400ms',
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const SECTION_IDS = {
  home: 'home',
  projects: 'projects',
  stack: 'stack',
  contact: 'contact',
} as const;
