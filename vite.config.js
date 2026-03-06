import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'force-optimize-charts-on-change',
      handleHotUpdate({ file, server }) {
        if (file.includes('/node_modules/@neko-os/charts/')) {
          const depsCache = path.resolve(__dirname, 'node_modules/.vite')
          if (fs.existsSync(depsCache)) {
            fs.rmSync(depsCache, { recursive: true, force: true })
          }
          server.restart()
        }
      },
    },
  ],
  // resolve: {
  // alias: {
  // 'react-native': 'react-native-web',
  // 'react-native-svg': 'react-native-web-svg',
  // },
  // extensions: ['.web.js', '.js', '.jsx', '.json'],
  // },
  optimizeDeps: {
    include: ['@neko-os/charts'],
    exclude: ['@neko-os/ui'],
    force: true,
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/@neko-os/ui/**', '!**/node_modules/@neko-os/charts/**'],
    },
  },
})
