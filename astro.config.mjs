import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    preview: {
      allowedHosts: ['dev323ast5.caiots.dev']
    }
  }
});