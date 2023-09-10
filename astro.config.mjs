import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://sami-sopas.github.io',
  base: '/Tacos-Inge',
  experimental: {
    viewTransitions: true
  },
  integrations: [tailwind(), compress()],
});