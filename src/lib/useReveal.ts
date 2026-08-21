import { useEffect, useRef, useState } from 'react';

/**
 * Under prefers-reduced-motion, or where IntersectionObserver is missing, the
 * content renders at its final state straight away rather than fading in.
 * This is decided before the first paint, not in an effect.
 */
function startsVisible(): boolean {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return true;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * One scroll reveal: fade in and rise 12px, once, then stop watching.
 * IntersectionObserver only. design/DESIGN-SYSTEM.md §8 bans scroll listeners.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(startsVisible);

  useEffect(() => {
    if (shown) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return { ref, shown };
}
