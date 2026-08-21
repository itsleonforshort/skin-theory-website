import { useEffect } from 'react';

function setMetaTag(selector: string, attribute: string, name: string, content: string): void {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets the document title, description, canonical link and the Open Graph
 * pair for the page currently on screen.
 */
export function useMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = title;

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://skintheory.ph${window.location.pathname}`);
  }, [title, description]);
}
