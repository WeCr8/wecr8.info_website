// src/composables/useThrottle.js
import { ref, watch } from 'vue'

export default function useThrottle(value, delay = 300) {
  const throttled = ref(value.value)

  let timeout
  watch(value, (newVal) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        throttled.value = newVal
        timeout = null
      }, delay)
    }
  })

  return throttled
}
