import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static landing page. Build output goes to dist/ for GitHub Pages or
// any static host. base: './' keeps asset paths relative so it works
// whether served at the domain root or a subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
});
