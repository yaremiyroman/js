import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node', // 👈 make sure this is set
    // environment: 'jsdom', // 👈 make sure this is set
  },
})
