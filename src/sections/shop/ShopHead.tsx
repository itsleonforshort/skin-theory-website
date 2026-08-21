import { ShortRule } from '../../components/ShortRule';

/**
 * Shop §2.1. Editorial statement, py-24 rather than py-40, because the grid
 * should start high. No hero image; the products are the images.
 */
export function ShopHead() {
  return (
    <section aria-labelledby="shop-headline" className="py-24">
      <div className="shell">
        <h1 id="shop-headline" className="measure-display text-display-l text-ink">
          The whole line, five products.
        </h1>
        <p className="measure-lead mt-6 text-lead text-ink-soft">
          One cleanser, three bars, one serum, all made in the same workshop in Davao City and
          priced in pesos.
        </p>
        <ShortRule />
      </div>
    </section>
  );
}
