import { defineConfig } from 'vite'
import { vitePlugin as remix } from '@remix-run/dev'

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    remix(),
  ],
});