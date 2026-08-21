import { productSets } from '../../data/sets';
import { getProducts } from '../../data/products';
import { formatPeso } from '../../lib/format';
import { AddToBagButton } from '../../components/AddToBagButton';
import { BoxImage } from '../../components/BoxImage';
import { Reveal } from '../../components/Reveal';

/**
 * Shop §2.4. Split panel: the type column lists what is in each set, its price
 * and what it saves; the artwork column shows a carton on the bone ground.
 */
export function Sets() {
  return (
    <section aria-labelledby="sets-headline" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="sets-headline" className="measure-display text-display-l text-ink">
            Two sets, if you want the routine rather than the product.
          </h2>
        </Reveal>

        <ul className="mt-16 flex flex-col gap-16">
          {productSets.map((set, index) => {
            const included = getProducts(set.includes);
            return (
              <Reveal
                as="li"
                key={set.slug}
                index={index}
                className="grid grid-cols-1 gap-8 border border-line bg-paper lg:grid-cols-2 lg:gap-0"
              >
                <div className="flex flex-col justify-center p-8 lg:p-16">
                  <h3 className="font-display text-display-s text-ink">{set.name}</h3>
                  <p className="measure-body mt-6 text-body text-ink-soft">{set.contents}</p>

                  <ul className="mt-6 flex flex-col gap-2">
                    {included.map((product) => (
                      <li key={product.slug} className="text-label uppercase text-ink-muted">
                        {product.shortName} · {product.size}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 font-display text-title text-ink">
                    {formatPeso(set.price)} instead of {formatPeso(set.fullPrice)}
                  </p>
                  <p className="mt-2 text-small text-ink-soft">
                    You save {formatPeso(set.saving)}.
                  </p>

                  <div className="mt-8">
                    <AddToBagButton set={set} />
                  </div>
                </div>

                <div className="order-first lg:order-last">
                  <BoxImage src={set.image} alt={set.imageAlt} ratio="4/5" />
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
