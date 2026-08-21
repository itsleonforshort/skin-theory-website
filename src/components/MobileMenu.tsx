import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from '@phosphor-icons/react';
import { cta, footerLegal, footerRead, navLinks, site } from '../data/site';
import { useFocusTrap } from '../lib/useFocusTrap';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-height panel from the right below 1024px. Scrim at z-50, panel at z-60,
 * focus trapped, Escape closes, focus returns to the menu button.
 * design/PAGE-BLUEPRINTS.md §0.1.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const handleClose = useCallback(() => onClose(), [onClose]);
  const panelRef = useFocusTrap<HTMLDivElement>(open, handleClose);

  if (!open) {
    return null;
  }

  return (
    <>
      <button type="button" className="scrim" aria-label="Close" onClick={handleClose} />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed top-0 right-0 z-60 flex h-[100dvh] w-full max-w-[420px] flex-col bg-paper"
      >
        <div className="flex h-[68px] items-center justify-between border-b border-line px-6">
          <span className="wordmark text-label">{site.wordmark}</span>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="flex cursor-pointer items-center bg-transparent p-2 text-ink"
          >
            <X size={20} weight="light" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Main" className="flex-1 overflow-y-auto px-6 py-12">
          <ul className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={handleClose}
                  className="font-display text-display-s text-ink"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <hr className="rule-full my-12" />

          <ul className="flex flex-col gap-4">
            {footerRead.concat(footerLegal).map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={handleClose} className="nav-link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line p-6">
          <NavLink to="/shop" onClick={handleClose} className="btn btn-primary w-full">
            {cta.shop}
          </NavLink>
        </div>
      </div>
    </>
  );
}
