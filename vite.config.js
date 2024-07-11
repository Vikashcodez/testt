import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,  // Increase the chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'lottie-web'],
          'react-three': ['@react-three/drei', '@react-three/fiber'],
          'framer-motion': ['framer-motion'],
          'i18n': ['i18next', 'react-i18next'],
          'icons': ['@radix-ui/react-icons', 'ionicons', 'react-icons']
        }
      }
    }
  }
})
