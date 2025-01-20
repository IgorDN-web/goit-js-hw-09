import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Корень проекта — папка src
  build: {
    outDir: '../dist', // Выходная папка для сборки
    emptyOutDir: true, // Очищать dist перед сборкой
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/1-gallery.html'),
        form: resolve(__dirname, 'src/2-form.html'),
      },
    },
  },
  server: {
    open: '/index.html', // Автооткрытие index.html
  },
});
