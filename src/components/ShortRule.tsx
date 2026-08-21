/**
 * The 40px rule off every box front. It is the site's only divider ornament.
 * design/DESIGN-SYSTEM.md §6.1.
 */
export function ShortRule({ tone = 'ink' }: { tone?: 'ink' | 'accent' | 'sand' | 'gold' }) {
  const background =
    tone === 'accent'
      ? 'bg-accent-deep'
      : tone === 'sand'
        ? 'bg-sand'
        : tone === 'gold'
          ? 'bg-gold'
          : 'bg-ink';

  return <hr aria-hidden="true" className={`rule-short ${background}`} />;
}
