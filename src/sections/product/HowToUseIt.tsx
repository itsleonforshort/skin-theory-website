import type { Product } from '../../types';
import { accentStyle } from '../../lib/accent';
import { Reveal } from '../../components/Reveal';

/**
 * Product detail §3.4. The Direction for use text, word for word off the
 * carton, set as lead, with the short rule above it. Beneath, a plain line on
 * how often and at what time of day, drawn only from what the carton says.
 */
export function HowToUseIt({ product }: { product: Product }) {
  return (
    <section
      style={accentStyle(product.accent)}
      aria-labelledby="how-to-use"
      className="section-pad"
    >
      <div className="shell">
        <Reveal>
          <h2 id="how-to-use" className="text-display-m text-ink">
            How to use it
          </h2>
          <hr aria-hidden="true" className="rule-short bg-accent-deep" />
          <p className="measure-lead text-lead text-ink">{product.direction}</p>
          <p className="measure-body mt-8 text-body text-ink-soft">{product.howOften}</p>
        </Reveal>
      </div>
    </section>
  );
}
