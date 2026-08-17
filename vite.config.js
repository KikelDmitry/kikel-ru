import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { CONFIG } from './config/global.js';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL(CONFIG.client.source, import.meta.url)),
      '@styles': fileURLToPath(
        new URL(`${CONFIG.client.source}styles`, import.meta.url),
      ),
      '@images': fileURLToPath(
        new URL(`${CONFIG.client.source}assets/images`, import.meta.url),
      ),
    },
  },
});
