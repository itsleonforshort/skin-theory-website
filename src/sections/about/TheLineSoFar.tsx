import { getProducts } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { Reveal } from '../../components/Reveal';

/** The order the line was made in, from design/COPY.md §6.5. */
const releaseOrder = [
  'coco-kojic-gluta-soap',
  'gluta-soya-soap',
  'salicylic-soap',
  'bee-wash',
  'niacinamide-serum',
];

/**
 * About §4.5. The same five-cell grid as Shop, at smaller scale, without
 * prices, each cell linking to its detail page. It closes the story with the
 * actual products, in the order they were made.
 */
export function TheLineSoFar() {
  const byRelease = getProducts(releaseOrder);

  return (
    <section aria-labelledby="line-so-far" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="line-so-far" className="measure-display text-display-m text-ink">
            Five products, in the order they were made.
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {byRelease.map((product, index) => (
            <Reveal as="li" key={product.slug} index={index}>
              <ProductCard product={product} showPrice={false} showAdd={false} />
              <p className="mt-3 text-micro uppercase text-ink-muted">{product.released}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
