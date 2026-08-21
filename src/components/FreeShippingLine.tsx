import { formatPeso } from '../lib/format';
import { site } from '../data/site';

/**
 * A plain line of text, not a progress bar. It states either how much more is
 * needed to reach free shipping, or that shipping is already free.
 * design/PAGE-BLUEPRINTS.md §7.1.
 */
export function FreeShippingLine({ subtotal }: { subtotal: number }) {
  const remaining = site.freeShippingThreshold - subtotal;

  if (remaining > 0) {
    return (
      <p className="text-small text-ink-soft">
        Add {formatPeso(remaining)} more for free nationwide shipping.
      </p>
    );
  }

  return <p className="text-small text-ink-soft">Your order ships free.</p>;
}
