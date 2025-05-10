export function useWindowSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  window.addEventListener('resize', update);

  onUnmounted(() => {
    window.removeEventListener('resize', update);
  });

  return { width, height };
}