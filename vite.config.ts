import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Static build. Output goes to dist/ and can be dropped on Netlify or Vercel.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          router: ['react-router-dom'],
          icons: ['@phosphor-icons/react'],
        },
      },
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
