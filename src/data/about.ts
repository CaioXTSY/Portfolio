export interface AboutData {
  name: string;
  initials: string;
  class: string;
  bio: string;
  basicInfo: Array<{
    label: string;
    value: string;
  }>;
  skills: string[];
  archives: Array<{
    title: string;
    content: string;
  }>;
  image?: string;
  resumeUrl?: string;
}

export const aboutData: AboutData = {
  name: 'Lorem Ipsum',
  initials: 'png',
  class: 'Dolor Sit Amet',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  
  basicInfo: [
    { label: 'Location', value: 'Lorem' },
    { label: 'Experience', value: 'Lorem' },
    { label: 'Focus', value: 'Ipsum' },
    { label: 'Status', value: 'Dolor' },
  ],
  
  skills: [
    'Lorem',
    'Ipsum',
    'Dolor',
    'Sit',
    'Amet',
    'Consectetur',
    'Adipiscing',
    'Elit',
    'Sed',
    'Tempor',
    'Incididunt',
    'Labore',
  ],
  
  archives: [
    {
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Dolor Sit',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
  
  image: '/images/profile.jpg',
  resumeUrl: '/cv.pdf',
};
