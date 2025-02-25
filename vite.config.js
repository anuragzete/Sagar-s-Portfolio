import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Sager-s-Portfolio/', // Set this to your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
