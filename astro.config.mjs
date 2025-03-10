import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: 'src/assets',
    }),
    react(),
  ],
  site: 'https://tufusa.net',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
  vite: {
    plugins: [tailwind()],
  },
  adapter: cloudflare(),
});
