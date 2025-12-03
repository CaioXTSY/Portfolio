import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Enable strict mode for better development experience
  vite: {
    ssr: {
      external: []
    }
  },

  integrations: [tailwind()]
});