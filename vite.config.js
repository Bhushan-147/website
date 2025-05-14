import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // This ensures the paths are resolved correctly on Vercel
  plugins: [
    react(),
    tailwindcss(),
  ],
})
