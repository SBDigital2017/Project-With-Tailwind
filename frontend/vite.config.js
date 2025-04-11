import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },

    },
    server: {
      host: true,
      allowedHosts: ['fcea-2401-4900-1cb8-71ef-90cc-7d07-990e-12b.ngrok-free.app'],
    },
})
