export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactData {
  email: string;
  socials: SocialLink[];
}

export const contactData: ContactData = {
  email: 'lorem@ipsum.com',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/lorem',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/lorem',
      icon: 'github',
    },
  ],
};
