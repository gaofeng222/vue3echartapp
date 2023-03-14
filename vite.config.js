import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3echartapp',
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      },
      {
        find: /@comp\//,
        replacement: pathResolve('src/components') + '/'
      }
    ]
  }
})
