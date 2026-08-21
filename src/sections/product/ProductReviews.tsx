import { useState } from 'react';
import type { Product } from '../../types';
import { getReviews } from '../../data/reviews';
import { formatRating, formatReviewCount } from '../../lib/format';
import { Reveal } from '../../components/Reveal';

const INITIAL_SHOWN = 2;

/**
 * Product detail §3.6. The average, the total, and a five to one star
 * distribution drawn as plain rows with a count each. No filled progress
 * tracks. Then the written reviews, with a Show all button that reveals the
 * rest in place.
 */
export function ProductReviews({ product }: { product: Product }) {
  const [showAll, setShowAll] = useState(false);
  const reviews = getReviews(product.slug);
  const shown = showAll ? reviews : reviews.slice(0, INITIAL_SHOWN);

  const distribution = [
    { stars: 5, count: product.starDistribution.five },
    { stars: 4, count: product.starDistribution.four },
    { stars: 3, count: product.starDistribution.three },
    { stars: 2, count: product.starDistribution.two },
    { stars: 1, count: product.starDistribution.one },
  ];

  return (
    <section aria-labelledby="product-reviews" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="product-reviews" className="text-display-m text-ink">
            What buyers wrote
          </h2>
          <p className="mt-6 text-lead text-ink-soft">
            {formatRating(product.rating)} from {formatReviewCount(product.reviewCount)}.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <Reveal>
            <h3 className="text-label uppercase text-ink-muted">How the ratings fall</h3>
            <ul className="mt-6">
              {distribution.map((row) => (
                <li
                  key={row.stars}
                  className="flex items-center justify-between border-b border-line py-3"
                >
                  <span className="text-small text-ink-soft">
                    {row.stars} {row.stars === 1 ? 'star' : 'stars'}
                  </span>
                  <span className="text-small text-ink">{row.count}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1}>
            <h3 className="visually-hidden">Written reviews</h3>
            <ul>
              {shown.map((review) => (
                <li key={review.id} className="border-b border-line py-8">
                  <blockquote className="text-lead text-ink">
                    <p>{review.quote}</p>
                  </blockquote>
                  <p className="mt-4 text-label uppercase text-ink">{review.name}</p>
                  <p className="mt-1 text-small text-ink-soft">
                    {review.city} · {review.stars} out of 5 · {review.purchased}
                  </p>
                </li>
              ))}
            </ul>

            {reviews.length > INITIAL_SHOWN && !showAll ? (
              <button type="button" className="btn-quiet mt-8" onClick={() => setShowAll(true)}>
                Show all
              </button>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
