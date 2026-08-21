import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A new route starts at the top of the page, unless the link points at an
 * anchor on that page, which the legal tables of contents rely on.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
