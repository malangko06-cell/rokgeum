import { defineConfig } from 'vite';

export default defineConfig({
    base: '/rokgeum/',
    build: {
        outDir: 'docs'
    },
    server: {
        host: true,
        port: 5173,
        open: true,
        strictPort: true
    }
});
