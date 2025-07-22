import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer'],
    }),
    tsconfigPaths({
      projects: ['./tsconfig.json'],
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '~': new URL('./app', import.meta.url).pathname,
    },
  },
  build: {
    target: 'esnext',
  },
});