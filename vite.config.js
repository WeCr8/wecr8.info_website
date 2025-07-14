import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      vueDevTools(),
      vueJsx(), // JSX/TSX support in .vue and .jsx files
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@composables': path.resolve(__dirname, './src/composables'),
        // Removed @utils – use full paths like '@composables/utils/useThrottle'
      },
    },

    define: {
      __APP_ENV__: env.APP_ENV,
    },

    server: {
      port: 3000,
      host: true,
      open: true,
      cors: true,
      strictPort: true,
      // Security headers for development
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      // HTTPS configuration for development (optional)
      https: env.VITE_DEV_HTTPS === 'true' ? {
        // Configure SSL certificates if needed
      } : false,
    },

    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 600,
      // Security-focused build settings
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router'],
            // If you want to split out composables utils:
            // composables: ['@composables/utils/useDebounce', '@composables/utils/useThrottle'],
          },
          // Security: Remove comments and ensure proper minification
          compact: true,
        },
        // External dependencies for security
        external: (id) => {
          // Keep analytics external for better security isolation
          return id.includes('googletagmanager.com') || id.includes('google-analytics.com')
        }
      },
      // Enhanced minification for security
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
        format: {
          comments: false,
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },

    optimizeDeps: {
      include: ['vue', 'vue-router'],
      // Security: Exclude external analytics from optimization
      exclude: ['@google-analytics/gtag'],
    },

    // Security: Configure preview server
    preview: {
      port: 4173,
      host: true,
      cors: true,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
      },
    },
  }
})
