import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable strict mode for better development experience
  vite: {
    ssr: {
      external: []
    }
  }
});
