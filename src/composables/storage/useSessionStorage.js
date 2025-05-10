export function useSessionStorage(key, initialValue) {
  const stored = sessionStorage.getItem(key);
  const data = ref(stored ? JSON.parse(stored) : initialValue);
  watch(data, val => sessionStorage.setItem(key, JSON.stringify(val)), { deep: true });
  return data;
}