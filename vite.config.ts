import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: 'StaleWhileRevalidate' as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 100,
      maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
    }
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  optimizeDeps: {
    esbuildOptions: { supported: { bigint: true } }
  },
  esbuild: {
    supported: {
      bigint: true
    }
  },
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    }),
    svgr(),
    splitVendorChunkPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss]
    }
  }
})
