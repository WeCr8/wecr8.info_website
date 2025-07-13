import { ref, watch } from 'vue'

export default function useDocumentViewport(initialViewport = 'width=device-width, initial-scale=1.0') {
  const viewport = ref(initialViewport)

  // Watch for viewport changes and update meta tag
  watch(viewport, (newViewport) => {
    let tag = document.querySelector('meta[name="viewport"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'viewport')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', newViewport)
  }, { immediate: true })

  // Helper function to set viewport
  const setViewport = (newViewport) => {
    viewport.value = newViewport
  }

  // Preset viewport configurations
  const presets = {
    default: 'width=device-width, initial-scale=1.0',
    noZoom: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    desktop: 'width=1024',
    mobile: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
  }

  // Helper function to set preset
  const setPreset = (preset) => {
    if (presets[preset]) {
      viewport.value = presets[preset]
    }
  }

  return {
    viewport,
    setViewport,
    setPreset,
    presets
  }
}
