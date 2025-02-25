import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@aceternity/ui': path.resolve(__dirname, 'node_modules/@aceternity/ui'), // Correct path to node_modules
    },
  },
  server: {
    watch: {
      ignored: ['**/tsconfig.json'], // Ignore tsconfig.json to prevent unnecessary reloads
    },
  },
});
