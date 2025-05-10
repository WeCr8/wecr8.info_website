export function useScroll() {
  const scrollY = ref(window.scrollY);
  const onScroll = () => (scrollY.value = window.scrollY);

  window.addEventListener('scroll', onScroll);
  onUnmounted(() => window.removeEventListener('scroll', onScroll));

  return { scrollY };
}