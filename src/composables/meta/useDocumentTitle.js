import { ref, watch } from 'vue'
import { config } from '@/config/env'

export default function useDocumentTitle(initialTitle = config.defaultTitle) {
  const title = ref(initialTitle)

  // Watch for title changes and update document title
  watch(title, (newTitle) => {
    document.title = newTitle
  }, { immediate: true })

  // Helper function to set title with site name
  const setTitle = (pageTitle) => {
    if (pageTitle === config.siteName || pageTitle === config.defaultTitle) {
      title.value = pageTitle
    } else {
      title.value = `${pageTitle} – ${config.siteName}`
    }
  }

  // Helper function to set title without site name
  const setTitleOnly = (pageTitle) => {
    title.value = pageTitle
  }

  return {
    title,
    setTitle,
    setTitleOnly
  }
}
