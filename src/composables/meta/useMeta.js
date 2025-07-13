import { ref, watch } from 'vue'
import { config, getFullUrl, getSocialImageUrl } from '@/config/env'

export default function useMeta(options = {}) {
  const {
    title = config.defaultTitle,
    description = config.defaultDescription,
    keywords = config.defaultKeywords,
    image = config.defaultImage,
    url = null,
    type = 'website',
    author = config.siteName,
    locale = 'en_US'
  } = options

  const currentTitle = ref(title)
  const currentDescription = ref(description)
  const currentKeywords = ref(keywords)
  const currentImage = ref(image)
  const currentUrl = ref(url || window.location.href)

  // Helper function to update meta tags
  const updateMetaTag = (name, content) => {
    let tag = document.querySelector(`meta[name="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', name)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  // Helper function to update meta properties
  const updateMetaProperty = (property, content) => {
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  // Function to update all meta tags
  const updateMeta = () => {
    // Basic meta tags
    document.title = currentTitle.value
    updateMetaTag('description', currentDescription.value)
    updateMetaTag('keywords', currentKeywords.value)
    updateMetaTag('author', author)
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')

    // Open Graph tags
    updateMetaProperty('og:title', currentTitle.value)
    updateMetaProperty('og:description', currentDescription.value)
    updateMetaProperty('og:type', type)
    updateMetaProperty('og:url', currentUrl.value)
    updateMetaProperty('og:image', getSocialImageUrl(currentImage.value))
    updateMetaProperty('og:site_name', config.siteName)
    updateMetaProperty('og:locale', locale)

    // Twitter tags
    updateMetaProperty('twitter:card', 'summary_large_image')
    updateMetaProperty('twitter:title', currentTitle.value)
    updateMetaProperty('twitter:description', currentDescription.value)
    updateMetaProperty('twitter:image', getSocialImageUrl(currentImage.value))
    updateMetaProperty('twitter:site', config.twitterHandle)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl.value)
  }

  // Watch for changes and update automatically
  watch([currentTitle, currentDescription, currentKeywords, currentImage, currentUrl], updateMeta, { immediate: true })

  // Return reactive references and update function
  return {
    title: currentTitle,
    description: currentDescription,
    keywords: currentKeywords,
    image: currentImage,
    url: currentUrl,
    updateMeta,
    
    // Convenience methods
    setTitle: (newTitle) => { currentTitle.value = newTitle },
    setDescription: (newDesc) => { currentDescription.value = newDesc },
    setKeywords: (newKeywords) => { currentKeywords.value = newKeywords },
    setImage: (newImage) => { currentImage.value = newImage },
    setUrl: (newUrl) => { currentUrl.value = newUrl }
  }
}
