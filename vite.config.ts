import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/FF14-Raid-Assistant/', // 设置基础路径为仓库名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}) 