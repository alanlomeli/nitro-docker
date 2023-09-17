// vite.config.js
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    plugins: [ react() ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '~': resolve(__dirname, 'node_modules')
        }
    },
    build: {
        assetsInlineLimit: 102400,
        rollupOptions: {
            output: {
                assetFileNames: 'src/assets/[name].[ext]',
manualChunks: (id) => {
    if (id.includes('node_modules')) {
        if (id.includes('@nitrots/nitro-renderer')) return 'nitro-renderer';
        return 'vendor'; // For all other node_modules dependencies
    }
}

            }
        }
    }
})
