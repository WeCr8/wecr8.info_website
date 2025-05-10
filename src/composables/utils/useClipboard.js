export function useClipboard(text) {
  navigator.clipboard.writeText(text);
}