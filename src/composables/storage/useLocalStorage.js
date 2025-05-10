export function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key);
  const data = ref(stored ? JSON.parse(stored) : initialValue);
  watch(data, val => localStorage.setItem(key, JSON.stringify(val)), { deep: true });
  return data;
}