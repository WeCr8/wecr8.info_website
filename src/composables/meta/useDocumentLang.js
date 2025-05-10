export function useDocumentLang(lang = 'en') {
  onMounted(() => document.documentElement.lang = lang);
}