import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages deployment - repo name as base path in production only
  base: mode === 'production' ? '/claude-code-react-dsfr/' : '/',
}))
