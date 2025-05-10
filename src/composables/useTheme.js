import { ref, watchEffect } from 'vue'

const theme = ref('light')

export default function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return { theme, toggleTheme }
}