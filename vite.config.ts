import { defineConfig } from 'vite'
import { vitePlugins } from './config/plugins'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3015,
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        rewrite: (pathStr: string) => pathStr.replace('/api', '/'),
      },
    },
  },
  plugins: vitePlugins
})
