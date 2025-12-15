import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node', // 使用 node 环境，避免 jsdom 的兼容性问题
    setupFiles: './src/test/setup.js',
    css: false, // node 环境不需要 CSS
    testTimeout: 30000,
    hookTimeout: 30000,
    teardownTimeout: 30000,
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    // 使用 threads pool 以获得更好的性能
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
      },
    },
  },
})
