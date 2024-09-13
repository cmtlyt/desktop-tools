import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 设置路径别名
  resolve: {
    alias: {
      '@': './src',
    },
  },
});
