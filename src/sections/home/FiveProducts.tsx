import { Link } from 'react-router-dom';
import { cta } from '../../data/site';
import { getProduct, getProducts } from '../../data/products';
import { accentStyle, nameColorClass } from '../../lib/accent';
import { formatPeso } from '../../lib/format';
import { BoxImage } from '../../components/BoxImage';
import { ProductCard } from '../../components/ProductCard';
import { StarRating } from '../../components/StarRating';
import { RadianceSeal } from '../../components/RadianceSeal';
import { Reveal } from '../../components/Reveal';

/**
 * Home §1.4. Asymmetric product grid: one wide feature cell for the best
 * seller, then a two by two field for the other four. Exactly five cells.
 * This section carries one of the two tracked-caps labels on the page.
 */
export function FiveProducts() {
  const feature = getProduct('coco-kojic-gluta-soap');
  const rest = getProducts(['bee-wash', 'gluta-soya-soap', 'salicylic-soap', 'niacinamide-serum']);

  return (
    <section aria-labelledby="five-headline" className="section-pad">
      <div className="shell">
        <Reveal>
          <p className="text-label uppercase text-ink-muted">THE FIVE</p>
          <h2 id="five-headline" className="measure-display mt-6 text-display-l text-ink">
            Five formulas. That is the whole line.
          </h2>
          <p className="measure-lead mt-6 text-lead text-ink-soft">
            One cleanser, three bars, one serum. Each one does a single job, and the front of every
            carton says who it is for before you buy it.
          </p>
        </Reveal>

        {feature ? (
          <Reveal
            index={1}
            className="mt-16 border border-line lg:grid lg:grid-cols-2"
            as="article"
          >
            <div style={accentStyle(feature.accent)} className="relative">
              <BoxImage src={feature.image} alt={feature.imageAlt} ratio="4/5" />
              <RadianceSeal className="absolute right-8 bottom-8" />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-16">
              <p className="text-label uppercase text-ink-muted">Best seller</p>
              <h3 className={`mt-6 font-display text-display-s ${nameColorClass(feature.accent)}`}>
                {feature.name}
              </h3>
              <p className="mt-2 text-label uppercase text-ink-muted">{feature.type}</p>

              <hr aria-hidden="true" className="rule-short bg-sand" />

              <p className="text-label uppercase text-ink">{feature.benefitLine}</p>
              <p className="mt-3 text-label uppercase text-ink-muted">{feature.audienceLine}</p>
              <p className="mt-3 text-label uppercase text-ink-muted">{feature.size}</p>

              <p className="mt-8 font-display text-title text-ink">{formatPeso(feature.price)}</p>
              <StarRating
                rating={feature.rating}
                reviewCount={feature.reviewCount}
                className="mt-2"
              />

              <div className="mt-8">
                <Link
                  to={`/shop/${feature.slug}`}
                  className="btn btn-primary"
                  aria-label={`${cta.view}, ${feature.shortName}`}
                >
                  {cta.view}
                </Link>
              </div>
            </div>
          </Reveal>
        ) : null}

        <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rest.map((product, index) => (
            <Reveal as="li" key={product.slug} index={index}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-12">
          <Link to="/shop" className="btn-quiet">
            {cta.shop}
          </Link>
        </div>
      </div>
    </section>
  );
}
