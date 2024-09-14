import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteStylelint from 'vite-plugin-stylelint';
// @ts-expect-error not type
import viteEslint from 'vite-plugin-eslint';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: 'node_modules',
    }),
    viteEslint(),
  ],
  // 设置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
