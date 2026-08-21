import type { Product } from '../../types';
import { riskReducers } from '../../data/site';
import { AddToBagButton } from '../../components/AddToBagButton';
import { Reveal } from '../../components/Reveal';

/**
 * Product detail §3.9. A closing band that names this product, with one
 * primary Add to bag and the risk reducers directly under the button.
 */
export function ProductClosingBand({ product }: { product: Product }) {
  return (
    <section aria-labelledby="product-closing" className="bg-bone py-24 lg:py-40">
      <div className="shell">
        <Reveal className="max-w-[52ch]">
          <h2 id="product-closing" className="text-display-m text-ink">
            {product.shortName}, {product.size}.
          </h2>
          <p className="mt-6 text-lead text-ink-soft">{product.audienceLine.toLowerCase()}.</p>

          <div className="mt-12">
            <AddToBagButton product={product} />
          </div>

          <ul className="mt-6 flex flex-col gap-2">
            {riskReducers.map((line) => (
              <li key={line} className="text-small text-ink-muted">
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
