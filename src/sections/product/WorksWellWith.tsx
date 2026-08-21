import type { Product } from '../../types';
import { getProducts } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { Reveal } from '../../components/Reveal';

/**
 * Product detail §3.7. Two cells, never four. Two is a recommendation, four is
 * a shrug. The pairings are fixed per product in the data.
 */
export function WorksWellWith({ product }: { product: Product }) {
  const pairs = getProducts(product.pairsWith);

  if (pairs.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="works-well-with" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="works-well-with" className="text-display-m text-ink">
            Works well with
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {pairs.map((pair, index) => (
            <Reveal as="li" key={pair.slug} index={index}>
              <ProductCard product={pair} className="bg-paper" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
