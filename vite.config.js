import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // Build to a fresh directory so guarded cleanup never touches prior output.
  base: command === 'build' ? './' : '/',
  build: { outDir: 'dist-publish', emptyOutDir: false },
  server: { host: '0.0.0.0', port: Number(process.env.PORT) || 4173, allowedHosts: true },
  preview: { host: '0.0.0.0', port: Number(process.env.PORT) || 4173, allowedHosts: true },
}));
