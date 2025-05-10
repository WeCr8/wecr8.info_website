// 📦 Core ESLint Config with Flat Architecture
import { defineConfig, globalIgnores } from 'eslint/config'

// 🌐 Global Environment Definitions
import globals from 'globals'

// 📘 ESLint Recommended Core Rules
import js from '@eslint/js'

// 🎨 Vue 3 Support with SFCs
import vuePlugin from 'eslint-plugin-vue'

// 🧩 Vue Prettier Compatibility
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// 📦 Optional: JSX/TSX Support (used if you write JSX in Vue components)
import vueJsx from 'eslint-plugin-vue-jsx'

// 🛠️ Optional: Import plugin for managing module resolution
import pluginImport from 'eslint-plugin-import'

export default defineConfig([
  // 🗂️ Project File Inclusion
  {
    name: 'wecr8/vue-app',
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'],
  },

  // 🚫 Ignore build outputs, coverage, etc.
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**']),

  // 🌎 Define Environment Globals (Browser + Node.js)
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // ✅ ESLint Recommended Rules
  js.configs.recommended,

  // 🧠 Vue SFC Essentials + Composition API Support
  ...vuePlugin.configs['flat/essential'],
  // or use: [...pluginVue.configs['flat/recommended']] if you want more strictness

  // 🎨 Optional: JSX-in-Vue Support
  vueJsx.configs['flat/recommended'],

  // 🧼 Prettier Compatibility Layer (disables conflicting rules)
  skipFormatting,

  // 📦 Import Handling for Clean Module Resolution (optional, if needed)
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      }],
    },
  },
])
