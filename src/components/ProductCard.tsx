import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { accentStyle, nameColorClass } from '../lib/accent';
import { formatPeso } from '../lib/format';
import { BoxImage } from './BoxImage';
import { StarRating } from './StarRating';
import { AddToBagButton } from './AddToBagButton';

interface ProductCardProps {
  product: Product;
  /** Cards below the fold stay lazy. */
  priority?: boolean;
  /** The About page grid shows the line without prices. */
  showPrice?: boolean;
  showAdd?: boolean;
  className?: string;
}

/**
 * The whole card is a link to the detail page. The Add to bag button is a
 * nested control with its own accessible name. A card gets a border because
 * it is clickable, which is the only reason anything on this site gets one.
 * design/PAGE-BLUEPRINTS.md §2.3.
 */
export function ProductCard({
  product,
  priority = false,
  showPrice = true,
  showAdd = true,
  className = '',
}: ProductCardProps) {
  return (
    <article
      style={accentStyle(product.accent)}
      className={`group relative flex h-full flex-col border border-line bg-paper transition-colors duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent-deep focus-within:border-accent-deep ${className}`.trim()}
    >
      <BoxImage src={product.image} alt={product.imageAlt} ratio="4/5" priority={priority} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className={`font-display text-title ${nameColorClass(product.accent)}`}>
          <Link
            to={`/shop/${product.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-label uppercase text-ink-muted">{product.type}</p>

        <hr aria-hidden="true" className="rule-short bg-accent-deep" />

        <p className="text-label uppercase text-ink">{product.benefitLine}</p>
        <p className="mt-3 text-label uppercase text-ink-muted">{product.size}</p>

        {showPrice ? (
          <p className="mt-4 font-display text-title text-ink">{formatPeso(product.price)}</p>
        ) : null}

        <StarRating rating={product.rating} reviewCount={product.reviewCount} className="mt-2" />

        {showAdd ? (
          <div className="relative z-10 mt-auto pt-6">
            <AddToBagButton product={product} variant="secondary" fullWidth />
          </div>
        ) : null}
      </div>
    </article>
  );
}
