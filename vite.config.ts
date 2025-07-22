import { defineConfig } from 'vite'
import { vitePlugin as remix } from '@remix-run/dev'
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
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      }
    }),
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