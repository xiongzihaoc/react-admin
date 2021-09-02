import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    open: true,
    port: 8088
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
