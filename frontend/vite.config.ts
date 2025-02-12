import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL should match your repository name
  base: mode === 'development' ? '' : '/skeleton-ucbg/',
  
  plugins: [react(), tsconfigPaths()],
  
  resolve: {
    alias: {
      '@': resolve('./src')
    },
  },

  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCase',
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          if (!assetInfo.name) return 'assets/[name].[hash][extname]'
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name].[hash][extname]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name].[hash][extname]`
          }
          return `assets/[name].[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
      },
    },
  },

  server: {
    port: 5173,
    hmr: {
      // Optimize HMR to reduce network requests
      protocol: 'ws',
      timeout: 1000,
      overlay: true,
    },
    // Optimize module loading
    watch: {
      usePolling: false,
      interval: 100,
    },
  },

  optimizeDeps: {
    // Pre-bundle dependencies to reduce initial load
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
  },
}))
