import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
    testTimeout: 30000, // 增加到 30 秒
    hookTimeout: 30000,
    teardownTimeout: 30000,
    isolate: false, // 改为 false 以避免某些兼容性问题
    include: ['src/**/*.{test,spec}.{js,jsx}'], // 明确指定测试文件模式
    // 添加 pool 配置以避免 jsdom 相关问题
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  },
})
