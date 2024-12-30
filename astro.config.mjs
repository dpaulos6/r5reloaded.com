import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: `always`,
    format: 'file'
  },
  trailingSlash: "never",
  site: 'https://r5reloaded.com',
  adapter: nodejs({
    mode: 'standalone'
  }),
  output: 'server',
  integrations: [tailwind()]
});