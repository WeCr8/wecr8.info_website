export function useMeta({ title, description, image }) {
  if (title) document.title = title;
  if (description) updateMeta('description', description);
  if (image) updateMeta('og:image', image);
}

function updateMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}