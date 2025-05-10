export function useIntersectionObserver(target, callback, options = {}) {
  let observer = new IntersectionObserver(callback, options);
  onMounted(() => observer.observe(target.value));
  onUnmounted(() => observer.disconnect());
}