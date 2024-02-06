import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxy } from 'vite-plugin-mock'; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createProxy()], // Add createProxy() to the plugins array
  server: {
    proxy: {
      '/api': {
        target: 'https://money-transfer-wallet-backend-pdsa1jg3s-sarthaksanjay.vercel.app',
        changeOrigin: true,
      },
    },
  },
});
