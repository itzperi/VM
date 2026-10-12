import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          // Long-lived vendor chunks: React/router change rarely, so returning
          // visitors only re-download the (small) app chunk after a content
          // deploy. Route-level React.lazy isn't used because the build-time
          // prerender (renderToString) can't resolve suspended routes.
          manualChunks(id) {
            if (/node_modules[\/](react|react-dom|scheduler)[\/]/.test(id)) return 'react';
            if (/node_modules[\/](react-router|react-router-dom)[\/]/.test(id)) return 'router';
            if (id.includes('lucide-react')) return 'icons';
            // Long-form copy changes most often; keep it out of the app shell chunk.
            if (/src[\/]data[\/](blogPosts|productDetails|landingPages)\.ts$/.test(id)) return 'content';
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
