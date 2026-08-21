import { Link } from 'react-router-dom';
import { cta } from '../../data/site';
import { getProduct } from '../../data/products';
import { ShortRule } from '../../components/ShortRule';

const heroAlt =
  'A Coco Kojic Gluta soap carton standing upright, white type panel on the left and a yellow watercolor wash with a palm frond shadow on the right, with a gold 3X radiance boost seal.';

/**
 * Home §1.1. Split panel, 55 / 45 at xl. Three text elements and one button.
 * No eyebrow, no tagline under the button, no trust strip inside the hero.
 */
export function Hero() {
  const hero = getProduct('coco-kojic-gluta-soap');

  return (
    <section
      aria-labelledby="hero-headline"
      className="grid min-h-[88dvh] grid-cols-1 lg:min-h-[100dvh] lg:grid-cols-[55fr_45fr]"
    >
      <div className="gutter-left flex flex-col justify-center pt-24 pb-16 lg:py-24">
        <h1 id="hero-headline" className="measure-display text-display-xl text-ink">
          Skin care with the whole formula on the box.
        </h1>

        <p className="measure-lead mt-6 text-lead text-ink-soft">
          Five products, made in Davao City. Every ingredient printed in full, every claim kept to
          what it can do.
        </p>

        <ShortRule />

        <div>
          <Link to="/shop" className="btn btn-primary">
            {cta.shop}
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center bg-bone px-6 py-16 lg:px-12 lg:py-24">
        {hero ? (
          <img
            src={hero.image}
            alt={heroAlt}
            className="box-render h-auto w-full max-w-[520px] object-contain"
            fetchPriority="high"
            decoding="sync"
          />
        ) : null}
      </div>
    </section>
  );
}
