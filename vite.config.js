// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

export default defineConfig({
    plugins: [vue()],
    root: '.',
    base: '',
    css: {
        postcss: './postcss.config.js',
    },
    build: {
        outDir: 'dist',
        emptyOutDir: false,
        manifest: true,
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, 'resources/js/app.js'),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
});
