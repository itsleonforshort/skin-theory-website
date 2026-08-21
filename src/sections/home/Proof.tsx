import { getReview, homeProof } from '../../data/reviews';
import { site } from '../../data/site';
import { Reveal } from '../../components/Reveal';

/**
 * Home §1.7. Quote row. Three reviews, no avatars, no cards, no star graphics
 * inside the quote. Vertical rules at lg, horizontal rules when stacked.
 */
export function Proof() {
  const quotes = homeProof
    .map((entry) => ({ review: getReview(entry.reviewId), productName: entry.productName }))
    .filter((entry) => entry.review !== undefined);

  return (
    <section aria-labelledby="proof-headline" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="proof-headline" className="measure-display text-display-l text-ink">
            What people wrote after the second bottle.
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 lg:grid-cols-3">
          {quotes.map((entry, index) => {
            const review = entry.review;
            if (!review) {
              return null;
            }
            return (
              <Reveal
                as="li"
                key={review.id}
                index={index}
                className={`py-8 lg:px-10 lg:py-0 ${
                  index > 0 ? 'border-t border-line lg:border-t-0 lg:border-l' : ''
                } ${index === 0 ? 'lg:pl-0' : ''}`}
              >
                <blockquote className="text-lead text-ink">
                  <p>{review.quote}</p>
                </blockquote>
                <p className="mt-6 text-label uppercase text-ink">{review.name}</p>
                <p className="mt-1 text-small text-ink-soft">
                  {review.city} · {entry.productName}
                </p>
                <p className="mt-2 text-micro uppercase text-ink-muted">
                  {review.stars} out of 5
                </p>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-16 text-small text-ink-muted">
          {site.totalReviews} reviews across the five products. {site.averageRating} on average.
        </p>
      </div>
    </section>
  );
}
