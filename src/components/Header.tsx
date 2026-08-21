import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Handbag, List } from '@phosphor-icons/react';
import { navLinks, site } from '../data/site';
import { formatItemCount } from '../lib/format';
import { useCart } from '../lib/useCart';
import { MobileMenu } from './MobileMenu';

/**
 * Sticky, 68px, one line at lg and above. The bottom hairline appears only
 * after 24px of scroll, which is measured with an IntersectionObserver on a
 * sentinel at the top of the document. Scroll listeners are banned by
 * design/DESIGN-SYSTEM.md §8.
 */
export function Header() {
  const { count, openCart, announcement } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setScrolled(!entry.isIntersecting));
      },
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cartLabel = count === 0 ? 'Cart, empty' : `Cart, ${formatItemCount(count)}`;

  return (
    <>
      <a className="skip-link btn btn-primary" href="#main-content">
        Skip to main content
      </a>

      <div className="relative h-0">
        <div ref={sentinelRef} aria-hidden="true" className="absolute top-0 left-0 h-6 w-px" />
      </div>

      <header
        className={`sticky top-0 z-40 bg-paper ${scrolled ? 'border-b border-line' : 'border-b border-transparent'}`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6">
          <Link
            to="/"
            aria-label="Skin Theory, home"
            className="wordmark text-label whitespace-nowrap"
          >
            {site.wordmark}
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="nav-link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openCart}
              aria-label={cartLabel}
              className="flex cursor-pointer items-center gap-2 bg-transparent p-2 text-ink"
            >
              <Handbag size={20} weight="light" aria-hidden="true" />
              {count > 0 ? (
                <span aria-hidden="true" className="text-micro">
                  {count}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="flex cursor-pointer items-center bg-transparent p-2 text-ink lg:hidden"
            >
              <List size={20} weight="light" aria-hidden="true" />
            </button>
          </div>
        </div>

        <span role="status" aria-live="polite" className="visually-hidden">
          {announcement}
        </span>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
