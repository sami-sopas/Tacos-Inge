import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
