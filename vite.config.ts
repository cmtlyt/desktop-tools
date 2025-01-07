import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteStylelint from 'vite-plugin-stylelint';
// @ts-expect-error not type
import viteEslint from 'vite-plugin-eslint';
import electron from 'vite-plugin-electron/simple';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IS_DESKTOP_APP = process.env.VITE_DESKTOP_APP === 'true';

const electronPlugin = IS_DESKTOP_APP
  ? [
      electron({
        main: {
          entry: path.resolve(__dirname, './electron/main.ts'),
        },
        preload: {
          input: path.resolve(__dirname, './electron/preload.ts'),
          vite: {
            resolve: {
              alias: {
                $: path.resolve(__dirname, './electron'),
              },
            },
          },
        },
        renderer: process.env.NODE_ENV === 'test' ? undefined : {},
      }),
    ]
  : [];

// https://vitejs.dev/config/
export default defineConfig({
  base: IS_DESKTOP_APP ? './' : '/desktop-tools/',
  plugins: [
    react(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: 'node_modules',
    }),
    viteEslint(),
    ...electronPlugin,
  ],
  // 设置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});
