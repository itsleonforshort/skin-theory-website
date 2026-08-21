import { Link } from 'react-router-dom';
import { cta, meta, strings } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { useCart } from '../lib/useCart';
import { formatItemCount, formatPeso } from '../lib/format';
import { getProducts } from '../data/products';
import { CartLineRow } from '../components/CartLineRow';
import { FreeShippingLine } from '../components/FreeShippingLine';
import { ProductCard } from '../components/ProductCard';

/**
 * Cart §7.2. The same contents at full width for people who prefer a page.
 * The order summary is the only bordered card on the site that is not
 * clickable, and it earns its border because it must stay visually attached
 * while the rows scroll past.
 */
export function CartPage() {
  useMeta(meta.cart.title, meta.cart.description);
  const { lines, count, subtotal } = useCart();
  const starters = getProducts(['coco-kojic-gluta-soap', 'bee-wash']);

  return (
    <div className="py-24">
      <div className="shell">
        <h1 className="text-display-m text-ink">Your bag</h1>

        {lines.length === 0 ? (
          <div className="mt-12">
            <p className="font-display text-title text-ink">Your bag is empty.</p>
            <p className="measure-body mt-4 text-body text-ink-soft">
              Five products, one page. Start with the one that matches the concern printed on the
              front of the carton.
            </p>
            <Link to="/shop" className="btn btn-primary mt-8">
              {cta.shop}
            </Link>

            <h2 className="mt-16 text-label uppercase text-ink-muted">Most people start here</h2>
            <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-[720px]">
              {starters.map((product) => (
                <li key={product.slug}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr] lg:gap-24">
            <div>
              <h2 className="text-label uppercase text-ink-muted">{formatItemCount(count)}</h2>
              <ul className="mt-6">
                {lines.map((line) => (
                  <CartLineRow key={line.id} line={line} layout="page" />
                ))}
              </ul>
              <Link to="/shop" className="btn-quiet mt-8">
                {strings.keepShopping}
              </Link>
            </div>

            <div className="lg:sticky lg:top-[92px] lg:self-start">
              <div className="border border-line p-8">
                <h2 className="font-display text-title text-ink">Order summary</h2>

                <div className="mt-6 flex items-center justify-between border-b border-line pb-4">
                  <span className="text-label uppercase text-ink-muted">Subtotal</span>
                  <span className="font-display text-title text-ink">{formatPeso(subtotal)}</span>
                </div>

                <div className="mt-4">
                  <FreeShippingLine subtotal={subtotal} />
                </div>

                <p className="mt-2 text-small text-ink-muted">{strings.shippingNote}</p>

                <Link to="/checkout" className="btn btn-primary mt-8 w-full">
                  {cta.checkout}
                </Link>
              </div>

              <div className="mt-8">
                <h2 className="text-label uppercase text-ink-muted">We accept</h2>
                <p className="mt-3 text-small text-ink-soft">
                  GCash, Maya, bank transfer to BPI or BDO, Visa and Mastercard, and cash on
                  delivery.
                </p>
                <p className="mt-4 text-small text-ink-soft">
                  Seven-day returns on unopened items. Full conditions are on the{' '}
                  <Link
                    to="/shipping-and-returns"
                    className="underline decoration-line underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
                  >
                    Shipping and Returns
                  </Link>{' '}
                  page.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
