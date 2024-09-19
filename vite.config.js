import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/jagatjyoti-01/Portpolio-React',
  plugins: [react()],
})
