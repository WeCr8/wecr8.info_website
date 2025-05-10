// src/composables/index.js

// ✅ Utility Hooks (Local use or Core Logic)
export { default as useMeta } from './useMeta'
export { default as useScroll } from './useScroll'
export { default as useDebounce } from './useDebounce'
export { default as useThrottle } from './useThrottle'
export { default as useIntersectionObserver } from './useIntersectionObserver'
export { default as useWindowSize } from './useWindowSize'
export { default as useLocalStorage } from './useLocalStorage'
export { default as useSessionStorage } from './useSessionStorage'

// ✅ Data Fetching Utilities
export { default as useFetch } from './useFetch'
export { default as useFetchGet } from './useFetchGet'
export { default as useFetchPost } from './useFetchPost'
export { default as useFetchPut } from './useFetchPut'
export { default as useFetchDelete } from './useFetchDelete'
export { default as useFetchPatch } from './useFetchPatch'
export { default as useFetchJson } from './useFetchJson'
export { default as useFetchForm } from './useFetchForm'
export { default as useFetchText } from './useFetchText'

// ✅ Advanced Fetching (Optional Extensions)
export { default as useFetchAbort } from './useFetchAbort'
export { default as useFetchRetry } from './useFetchRetry'
export { default as useFetchCache } from './useFetchCache'
export { default as useFetchBlob } from './useFetchBlob'
export { default as useFetchStream } from './useFetchStream'
export { default as useFetchArrayBuffer } from './useFetchArrayBuffer'

// ✅ Fetch Headers / Meta Extensions
export { default as useFetchHeaders } from './useFetchHeaders'
export { default as useFetchCredentials } from './useFetchCredentials'
export { default as useFetchRedirect } from './useFetchRedirect'
export { default as useFetchReferrer } from './useFetchReferrer'
export { default as useFetchReferrerPolicy } from './useFetchReferrerPolicy'
export { default as useFetchKeepalive } from './useFetchKeepalive'
export { default as useFetchMode } from './useFetchMode'
export { default as useFetchMethod } from './useFetchMethod'
export { default as useFetchBody } from './useFetchBody'
export { default as useFetchSignal } from './useFetchSignal'
export { default as useFetchResponse } from './useFetchResponse'

// ✅ Search (Router/Search integration)
export { default as useSearch } from './useSearch'
