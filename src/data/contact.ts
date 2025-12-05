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
  email: 'caioteixeiradss@gmail.com',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/caiot.ds',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/CaioXTSY',
      icon: 'github',
    },
  ],
};
