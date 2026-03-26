import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/renderer'),
      '@components': path.resolve(__dirname, './src/renderer/components'),
      '@services': path.resolve(__dirname, './src/renderer/services'),
      '@hooks': path.resolve(__dirname, './src/renderer/hooks'),
      '@styles': path.resolve(__dirname, './src/renderer/styles'),
      '@types': path.resolve(__dirname, './src/renderer/types'),
      '@constants': path.resolve(__dirname, './src/renderer/constants'),
      '@common': path.resolve(__dirname, './src/common'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src-tauri/', 'tests/'],
    },
  },
});
