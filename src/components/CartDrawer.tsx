import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from '@phosphor-icons/react';
import { cta, strings } from '../data/site';
import { formatItemCount, formatPeso } from '../lib/format';
import { useCart } from '../lib/useCart';
import { useFocusTrap } from '../lib/useFocusTrap';
import { getProducts } from '../data/products';
import { CartLineRow } from './CartLineRow';
import { FreeShippingLine } from './FreeShippingLine';
import { BoxImage } from './BoxImage';

/**
 * Slides from the right at 420px, full width below 480px. Scrim at z-50,
 * panel at z-60, focus trapped, Escape closes, focus returns to the cart
 * button. design/PAGE-BLUEPRINTS.md §7.1.
 */
export function CartDrawer() {
  const { isOpen, closeCart, lines, count, subtotal } = useCart();
  const navigate = useNavigate();
  const handleClose = useCallback(() => closeCart(), [closeCart]);
  const panelRef = useFocusTrap<HTMLDivElement>(isOpen, handleClose);
  const starters = getProducts(['coco-kojic-gluta-soap', 'bee-wash']);

  if (!isOpen) {
    return null;
  }

  function goToCheckout() {
    closeCart();
    navigate('/checkout');
  }

  return (
    <>
      <button type="button" className="scrim" aria-label="Close" onClick={handleClose} />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Your bag"
        className="fixed top-0 right-0 z-60 flex h-[100dvh] w-full max-w-[420px] flex-col bg-paper"
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-line px-6">
          <h2 className="font-display text-title text-ink">
            Your bag
            <span className="ml-3 text-label uppercase text-ink-muted">
              {formatItemCount(count)}
            </span>
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="flex cursor-pointer items-center bg-transparent p-2 text-ink"
          >
            <X size={20} weight="light" aria-hidden="true" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 overflow-y-auto px-6 py-12">
            <h3 className="font-display text-display-s text-ink">Your bag is empty.</h3>
            <p className="mt-6 text-body text-ink-soft">
              Five products, one page. Start with the one that matches the concern printed on the
              front of the carton.
            </p>
            <Link to="/shop" onClick={handleClose} className="btn btn-primary mt-8 w-full">
              {cta.shop}
            </Link>

            <p className="mt-12 text-label uppercase text-ink-muted">Most people start here</p>
            <ul className="mt-6 flex flex-col gap-6">
              {starters.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/shop/${product.slug}`}
                    onClick={handleClose}
                    className="flex items-center gap-4 border border-line p-4"
                  >
                    <span className="block w-20 shrink-0">
                      <BoxImage
                        src={product.image}
                        alt={product.imageAlt}
                        ratio="1/1"
                        inset="tight"
                      />
                    </span>
                    <span className="block">
                      <span className="block font-display text-title text-ink">{product.name}</span>
                      <span className="mt-1 block text-small text-ink-soft">
                        {formatPeso(product.price)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6">
            <ul>
              {lines.map((line) => (
                <CartLineRow key={line.id} line={line} onNavigate={handleClose} />
              ))}
            </ul>
          </div>
        )}

        {lines.length > 0 ? (
          <div className="shrink-0 border-t border-line px-6 py-6">
            <FreeShippingLine subtotal={subtotal} />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-label uppercase text-ink-muted">Subtotal</span>
              <span className="font-display text-title text-ink">{formatPeso(subtotal)}</span>
            </div>

            <p className="mt-2 text-small text-ink-muted">{strings.shippingNote}</p>

            <button type="button" onClick={goToCheckout} className="btn btn-primary mt-6 w-full">
              {cta.checkout}
            </button>

            <div className="mt-4 flex justify-center">
              <button type="button" className="btn-quiet" onClick={handleClose}>
                {strings.keepShopping}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
