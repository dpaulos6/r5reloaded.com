import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: `always`,
      },
    adapter: nodejs({
      mode: 'standalone' // or 'standalone'
    }),
    output: 'server',
  });