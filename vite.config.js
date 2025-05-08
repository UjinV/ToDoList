import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.html'),
    },
  },
  plugins: [
    eslint({
      cache: false,
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.cjs'),
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@sass': path.resolve(__dirname, 'src/sass'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@fonts': path.resolve(__dirname, 'src/fonts'),
      '@css': path.resolve(__dirname, 'src/css'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@sass/variables.scss" as *;
          @use "@sass/mixins.scss" as *;
        `
      }
    }
  }
})