import { Link } from 'react-router-dom';
import { actives } from '../../data/theory';
import { getProducts } from '../../data/products';
import { Reveal } from '../../components/Reveal';

/**
 * The Theory §5.2. Seven rows is past the five-item limit for a plain list, so
 * this is built as a two-column split at lg with grouped rows and a single
 * hairline between groups, not a hairline under every row.
 */
export function SevenActives() {
  return (
    <section aria-labelledby="actives-heading" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="actives-heading" className="measure-display text-display-m text-ink">
            The seven actives, one by one.
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-24 gap-y-12 lg:grid-cols-2">
          {actives.map((active, index) => {
            const carriers = getProducts(active.inSlugs);
            return (
              <Reveal
                as="li"
                key={active.name}
                index={index}
                className={index >= 2 ? 'border-t border-line pt-12' : ''}
              >
                <h3 className="font-display text-title text-ink">{active.name}</h3>
                <p className="measure-body mt-4 text-body text-ink-soft">{active.what}</p>

                <p className="mt-4 text-small text-ink-soft">
                  In:{' '}
                  {carriers.map((product, position) => (
                    <span key={product.slug}>
                      {position > 0 ? ', ' : ''}
                      <Link
                        to={`/shop/${product.slug}`}
                        className="underline decoration-line underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
                      >
                        {product.shortName}
                      </Link>
                    </span>
                  ))}
                  {active.inNote ? ` ${active.inNote}` : ''}
                </p>

                <p className="measure-body mt-2 text-small text-ink-muted">
                  Be careful if: {active.careful}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
