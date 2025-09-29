import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/EarthEDinterface/',  // <-- this fixes the 404
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
