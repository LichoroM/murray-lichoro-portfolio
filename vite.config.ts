import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages repository sites, set base at build time via env.
  // Use: BASE_PATH=/your-repo/ npm run build
  // If a CNAME file exists in public/, use root base '/'
  base: (import.meta as any).env?.BASE_PATH || '/',
})
