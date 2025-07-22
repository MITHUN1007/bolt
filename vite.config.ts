import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger"
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    target: 'es2022',
  },
  esbuild: {
    target: 'es2022',
  },
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'path'],
      globals: {
        Buffer: true,
        global: true,
      },
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./app"),
    },
  },
}));