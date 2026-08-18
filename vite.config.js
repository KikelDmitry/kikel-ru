import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { CONFIG } from './config/global.js';

const src = CONFIG.client.source;

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  root: CONFIG.client.source,
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
      '@': fileURLToPath(new URL(src, import.meta.url)),
      '@styles': fileURLToPath(new URL(`${src}styles`, import.meta.url)),
      '@images': fileURLToPath(new URL(`${src}assets/images`, import.meta.url)),
    },
  },
});
