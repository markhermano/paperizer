import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    {
      ...typescript2({
        check: false,
        include: ['src/*.ts', 'src/**/*.ts'],
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            declarationMap: true,
          },
          exclude: ['vite.config.ts'],
        },
      }),
    },
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
