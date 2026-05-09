// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  trailingSlash: "ignore",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  },
  scopedStyleStrategy: 'where',
});