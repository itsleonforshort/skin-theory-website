import type { Product } from '../../types';
import { accentStyle } from '../../lib/accent';
import { BadgeRow } from '../../components/BadgeRow';
import { Reveal } from '../../components/Reveal';

/**
 * Product detail §3.3. Badge row. The badge count always matches the content
 * printed on that carton, so there is never a filler circle. Coco Kojic Gluta
 * keeps the printed gold stroke; the rest use their own accent.
 */
export function WhyItWorks({ product }: { product: Product }) {
  return (
    <section
      style={accentStyle(product.accent)}
      aria-labelledby="why-it-works"
      className="section-pad bg-bone"
    >
      <div className="shell">
        <Reveal>
          <h2 id="why-it-works" className="measure-display text-display-m text-ink">
            Why it works
          </h2>
          <p className="measure-body mt-6 text-body text-ink-soft">{product.description}</p>
        </Reveal>

        <Reveal index={1} className="mt-16">
          <BadgeRow badges={product.badges} tone={product.accent === 'amber' ? 'gold' : 'accent'} />
        </Reveal>
      </div>
    </section>
  );
}
