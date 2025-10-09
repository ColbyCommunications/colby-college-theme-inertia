// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        watch: { usePolling: true, interval: 100 },
        origin: 'https://colby.lndo.site',
        // HMR through same origin proxy still uses the internal host
        hmr: {
            protocol: 'wss',
            host: 'colby.lndo.site',
            clientPort: 443,
            path: '/vite',
        },
        allowedHosts: ['.lndo.site', 'localhost', 'node'],
    },
    base: '/vite/',
});
