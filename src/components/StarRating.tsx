import { formatRating, formatReviewCount } from '../lib/format';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

/**
 * The rating is set as plain text, not star graphics. design/PAGE-BLUEPRINTS.md
 * §1.7 keeps star pictures out of the quote rows, and one text treatment
 * everywhere means one thing for a screen reader to read.
 */
export function StarRating({ rating, reviewCount, className = '' }: StarRatingProps) {
  const label =
    reviewCount === undefined
      ? formatRating(rating)
      : `${formatRating(rating)}, ${formatReviewCount(reviewCount)}`;

  return (
    <p className={`text-micro uppercase text-ink-muted ${className}`.trim()}>{label}</p>
  );
}
