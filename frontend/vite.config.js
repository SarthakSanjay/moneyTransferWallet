import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: createProxy({
      '/api': {
        target: 'https://money-transfer-wallet-backend-pdsa1jg3s-sarthaksanjay.vercel.app',
        changeOrigin: true,
      },
    }),
  },
})
