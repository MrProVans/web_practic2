import { defineConfig } from 'vite'

export default defineConfig({
    base: '/web_practic2/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['src/components/Loading.js']
                }
            }
        }
    },
    server: {
        port: 5173,
        host: true
    }
})