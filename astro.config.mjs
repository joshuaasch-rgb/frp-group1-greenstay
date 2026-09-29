// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// SITE_URL and SITE_BASE are set by the deploy workflow (e.g. GitHub Pages
// serves the site from /frp-group1-greenstay/). Locally the site runs at /.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});
