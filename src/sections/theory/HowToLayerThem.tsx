import { Link } from 'react-router-dom';
import { routines } from '../../data/theory';
import { getProducts } from '../../data/products';
import { Reveal } from '../../components/Reveal';

/**
 * The Theory §5.4. Three cells for three real routines, with fixed product
 * sets. No empty cell. Every routine links to its products.
 */
export function HowToLayerThem() {
  return (
    <section aria-labelledby="layer-heading" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="layer-heading" className="measure-display text-display-m text-ink">
            Three routines, depending on what is bothering you.
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {routines.map((routine, index) => {
            const used = getProducts(routine.slugs);
            return (
              <Reveal
                as="li"
                key={routine.heading}
                index={index}
                className="flex h-full flex-col border border-line p-8"
              >
                <h3 className="font-display text-title text-ink">{routine.heading}</h3>

                <dl className="mt-8 flex flex-col gap-4">
                  <div>
                    <dt className="text-label uppercase text-ink-muted">Morning</dt>
                    <dd className="mt-2 text-body text-ink-soft">{routine.morning}</dd>
                  </div>
                  <div>
                    <dt className="text-label uppercase text-ink-muted">Night</dt>
                    <dd className="mt-2 text-body text-ink-soft">{routine.night}</dd>
                  </div>
                </dl>

                <p className="mt-6 text-small text-ink-muted">{routine.note}</p>

                <ul className="mt-auto flex flex-col gap-2 pt-8">
                  {used.map((product) => (
                    <li key={product.slug}>
                      <Link to={`/shop/${product.slug}`} className="nav-link">
                        {product.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
