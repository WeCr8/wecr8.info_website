// src/composables/index.js

// 🌐 Meta
export { default as useMeta } from '@/composables/meta/useMeta'
export { default as useDocumentTitle } from '@/composables/meta/useDocumentTitle'
export { default as useDocumentDescription } from '@/composables/meta/useDocumentDescription'
export { default as useDocumentTheme } from '@/composables/meta/useDocumentTheme'
export { default as useDocumentViewport } from '@/composables/meta/useDocumentViewport'

// 🔍 Browser
export { default as useScroll } from '@/composables/browser/useScroll'
export { default as useWindowSize } from '@/composables/browser/useWindowSize'
export { default as useIntersectionObserver } from '@/composables/browser/useIntersectionObserver'

// 🧠 Utilities
export { default as useDebounce } from '@/composables/utils/useDebounce'
export { default as useThrottle } from '@/composables/utils/useThrottle'

// 💾 Storage
export { default as useLocalStorage } from '@/composables/storage/useLocalStorage'
export { default as useSessionStorage } from '@/composables/storage/useSessionStorage'

// 🌐 Fetch
export { default as useFetch } from '@/composables/fetch/useFetch'
export { default as useFetchGet } from '@/composables/fetch/useFetchGet'
export { default as useFetchPost } from '@/composables/fetch/useFetchPost'
export { default as useFetchJson } from '@/composables/fetch/useFetchJson'

// 🔎 Search
export { default as useSearch } from '@/composables/search/useSearch'
export { default as useSearchQuery } from '@/composables/search/useSearchQuery'
export { default as useSearchResults } from '@/composables/search/useSearchResults'
export { default as useSearchFilters } from '@/composables/search/useSearchFilters'
export { default as useSearchSort } from '@/composables/search/useSearchSort'
export { default as useSearchPagination } from '@/composables/search/useSearchPagination'
export { default as useSearchHistory } from '@/composables/search/useSearchHistory'
export { default as useSearchSuggestions } from '@/composables/search/useSearchSuggestions'
