// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pablomp3.github.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/posts'),
    }),
  ],
  server: {
    host: true,
    port: 4321,
  },
});
