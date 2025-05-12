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
      open: true,
      cors: true,
      strictPort: true,
    },

    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router'],
            // If you want to split out composables utils:
            // composables: ['@composables/utils/useDebounce', '@composables/utils/useThrottle'],
          },
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
    },
  }
})
