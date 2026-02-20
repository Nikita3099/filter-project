import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/filter-project/',
  build: {
    rollupOptions: {
      external: [/^\/src\/main\.tsx$/]  
    }
  }
})