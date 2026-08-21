/** Money and number formatting. Prices are whole Philippine pesos. */

export function formatPeso(amount: number): string {
  return `₱${amount.toLocaleString('en-PH')}`;
}

export function formatRating(rating: number): string {
  return `${rating.toFixed(1)} out of 5`;
}

export function formatReviewCount(count: number): string {
  return count === 1 ? '1 review' : `${count.toLocaleString('en-PH')} reviews`;
}

export function formatItemCount(count: number): string {
  return count === 1 ? '1 item' : `${count} items`;
}

/**
 * Order numbers look like ST-10482. Built from the clock so two orders placed
 * on the same device do not collide.
 */
export function makeOrderNumber(): string {
  const base = 10000 + (Date.now() % 89999);
  return `ST-${base}`;
}
