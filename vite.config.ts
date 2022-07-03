import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ],
  },
  server: {
    hmr: true,
    host: '0.0.0.0'
  }
})
