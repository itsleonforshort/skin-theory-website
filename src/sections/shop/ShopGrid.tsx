import type { Product } from '../../types';
import { ProductCard } from '../../components/ProductCard';
import { Reveal } from '../../components/Reveal';

interface ShopGridProps {
  items: Product[];
  onShowAll: () => void;
}

/**
 * Shop §2.3. Five cells for five products. At lg the grid is three columns and
 * the first cell spans two, so the field is asymmetric rather than a tidy
 * three plus two. There is never an empty cell: the span only applies when all
 * five are on screen.
 */
export function ShopGrid({ items, onShowAll }: ShopGridProps) {
  if (items.length === 0) {
    return (
      <section aria-labelledby="shop-empty" className="py-24">
        <div className="shell">
          <h2 id="shop-empty" className="text-display-s text-ink">
            Nothing in this group right now.
          </h2>
          <button type="button" className="btn-quiet mt-8" onClick={onShowAll}>
            Show all five
          </button>
        </div>
      </section>
    );
  }

  const asymmetric = items.length === 5;

  return (
    <section aria-labelledby="shop-grid-heading" className="py-24">
      <div className="shell">
        <h2 id="shop-grid-heading" className="visually-hidden">
          The five products
        </h2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, index) => (
            <Reveal
              as="li"
              key={product.slug}
              index={index}
              className={asymmetric && index === 0 ? 'lg:col-span-2' : ''}
            >
              <ProductCard product={product} priority={index === 0} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
