import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'Paperizer',
      formats: ['es', 'cjs'],
      fileName: 'paperizer',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    minify: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
