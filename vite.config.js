// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/iteimouri.github.io/',  // Change <repository-name> to your GitHub repository name or '/' for a user/organization page
  build: {
    outDir: 'dist'  // Vite defaults to 'dist', but it's good to be explicit
  }
});
