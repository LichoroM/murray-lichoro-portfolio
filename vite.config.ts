// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Hardcode base for this repository site to ensure correct asset paths on GitHub Pages.
  // If you later move to a custom domain or user site, change this to '/'.
  base: '/murray-lichoro-portfolio/',
})
