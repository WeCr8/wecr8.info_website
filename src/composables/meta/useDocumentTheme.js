import { ref, watch } from 'vue'

export default function useDocumentTheme(initialTheme = '#1b365d') {
  const themeColor = ref(initialTheme)

  // Watch for theme changes and update meta tag
  watch(themeColor, (newTheme) => {
    let tag = document.querySelector('meta[name="theme-color"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'theme-color')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', newTheme)
  }, { immediate: true })

  // Helper function to set theme color
  const setThemeColor = (newTheme) => {
    themeColor.value = newTheme
  }

  // Preset theme colors
  const themes = {
    primary: '#1b365d',
    secondary: '#e05a2b',
    dark: '#000000',
    light: '#ffffff',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  }

  // Helper function to set preset theme
  const setTheme = (theme) => {
    if (themes[theme]) {
      themeColor.value = themes[theme]
    }
  }

  return {
    themeColor,
    setThemeColor,
    setTheme,
    themes
  }
}
