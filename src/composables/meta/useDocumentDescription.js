import { ref, watch } from 'vue'
import { config } from '@/config/env'

export default function useDocumentDescription(initialDescription = config.defaultDescription) {
  const description = ref(initialDescription)

  // Watch for description changes and update meta tag
  watch(description, (newDescription) => {
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', newDescription)
  }, { immediate: true })

  // Helper function to set description
  const setDescription = (newDescription) => {
    description.value = newDescription
  }

  return {
    description,
    setDescription
  }
}
