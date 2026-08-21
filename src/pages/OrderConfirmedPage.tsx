import { Link } from 'react-router-dom';
import { cta, meta, site } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { formatPeso } from '../lib/format';
import { readOrder } from '../lib/order';

/**
 * Order confirmed §7.4. A single centred column. The order number, the full
 * summary, the delivery address as entered, and the window for their region.
 * No upsell block. The cart badge is already zero, because the cart is cleared
 * when the order goes through.
 */
export function OrderConfirmedPage() {
  useMeta(meta.confirmed.title, meta.confirmed.description);
  const order = readOrder();

  if (!order) {
    return (
      <div className="py-40">
        <div className="shell mx-auto max-w-[72ch]">
          <h1 className="text-display-m text-ink">No recent order on this device.</h1>
          <p className="mt-6 text-body text-ink-soft">
            Order confirmations are held in your own browser. If you have just ordered from another
            device, or cleared your browser data, email {site.email} with your order number and we
            will send the details again.
          </p>
          <Link to="/shop" className="btn-quiet mt-8">
            {cta.shop}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-40">
      <div className="shell mx-auto max-w-[72ch]">
        <h1 className="text-display-m text-ink">Order {order.orderNumber} is in.</h1>

        {order.emailed ? (
          <div className="mt-8 flex flex-col gap-6 text-body text-ink-soft">
            <p>
              A copy of this is on its way to your email. We pack and hand over to the courier
              within one working day, and your tracking number follows by email as soon as the
              parcel is picked up.
            </p>
            <p>
              Paying by GCash, Maya, or bank transfer? The account details are in that email. We
              dispatch once payment clears.
            </p>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-6 text-body text-ink-soft">
            <p>
              Your order is recorded on this device, but our order inbox is not connected yet, so
              no confirmation email has gone out. Send this order number to {site.email}, or call{' '}
              {site.mobile} during shop hours, and we will pick it up from there.
            </p>
            <p>
              Nothing has been charged. We only take payment once we have confirmed the order with
              you.
            </p>
          </div>
        )}

        <h2 className="mt-16 text-label uppercase text-ink-muted">What you ordered</h2>
        <ul className="mt-6">
          {order.lines.map((line) => (
            <li
              key={line.id}
              className="flex items-start justify-between gap-4 border-b border-line py-4"
            >
              <span className="text-body text-ink-soft">
                {line.quantity} x {line.name}
                <span className="mt-1 block text-micro uppercase text-ink-muted">{line.size}</span>
              </span>
              <span className="text-body text-ink">{formatPeso(line.price * line.quantity)}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <dt className="text-label uppercase text-ink-muted">Subtotal</dt>
            <dd className="text-body text-ink">{formatPeso(order.subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-label uppercase text-ink-muted">Shipping</dt>
            <dd className="text-body text-ink">
              {order.shipping === 0 ? 'Free' : formatPeso(order.shipping)}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t border-line pt-3">
            <dt className="text-label uppercase text-ink">Total</dt>
            <dd className="font-display text-title text-ink">{formatPeso(order.total)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-label uppercase text-ink-muted">Paying by</dt>
            <dd className="text-body text-ink">{order.paymentLabel}</dd>
          </div>
        </dl>

        <h2 className="mt-16 text-label uppercase text-ink-muted">Delivering to</h2>
        <address className="mt-6 text-body text-ink-soft not-italic">
          {order.fullName}
          <br />
          {order.street}
          <br />
          Barangay {order.barangay}
          <br />
          {order.city}, {order.province} {order.postalCode}
          <br />
          {order.regionLabel}
          <br />
          {order.mobile}
        </address>
        {order.notes ? <p className="mt-4 text-small text-ink-muted">{order.notes}</p> : null}

        <h2 className="mt-16 text-label uppercase text-ink-muted">When to expect it</h2>
        <p className="mt-6 text-body text-ink-soft">
          Dispatch within one working day. Delivery in {order.regionDays} for {order.regionLabel}.
        </p>

        <Link to="/shop" className="btn-quiet mt-16">
          {cta.shop}
        </Link>
      </div>
    </div>
  );
}
