import { defineConfig, getViteConfig, mergeConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
const config = defineConfig({
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

//for react19 + cloudflare adapter
export default mergeConfig(config, {
  vite: import.meta.env.PROD
    ? {
        resolve: {
          alias: {
            'react-dom/server': 'react-dom/server.edge',
          },
        },
      }
    : {},
});
