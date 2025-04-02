/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import { plugin, Mode } from 'vite-plugin-markdown';
import Inspect from 'vite-plugin-inspect';
import topLevelAwait from 'vite-plugin-top-level-await';
import remixRouter from 'unplugin-remix-router/vite';
import { qrcode } from 'vite-plugin-qrcode';
import Unimport from 'unimport/unplugin';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    build: {
      outDir: 'build',
    },
    base: '/royal-kitchen/',
    resolve: {
      alias: {
        '@': '/app',
      },
    },
    plugins: [
      react(),
      remixRouter(),
      UnoCSS(),
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react',
        defaultStyle: 'vertical-align: middle;',
        defaultClass: 'inline-block',
      }),
      Inspect(),
      topLevelAwait(),
      // add `declare module "@/content/*"` to vite-env.d.ts to use with typescript
      plugin({
        mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT],
      }),
      // add `declare module "@/assets/*"` to vite-env.d.ts to use with typescript
      imagetools(),
      qrcode(),
      Unimport.vite({
        presets: ['react', 'react-router-dom', 'vitest'],
        dirs: [
          './app/components/**',
          './app/config/**',
          './app/middlewares/**',
          './app/stores/**',
          './app/queries/**',
        ],
        dts: true,
      }),
    ],
  };
});
