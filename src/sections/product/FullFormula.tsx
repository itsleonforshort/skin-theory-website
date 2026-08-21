import type { Product } from '../../types';
import { site } from '../../data/site';
import { Accordion } from '../../components/Accordion';
import type { AccordionItem } from '../../components/Accordion';
import { Reveal } from '../../components/Reveal';

/**
 * Product detail §3.5. Three accordion rows, closed by default so the page
 * stays calm. Every word inside them is the carton's own. Nothing here is
 * reworded, shortened, or summarised, and there is no read-more.
 */
export function FullFormula({ product }: { product: Product }) {
  const items: AccordionItem[] = [
    {
      heading: 'Ingredients',
      body: <p>{product.ingredients}</p>,
    },
    {
      heading: 'Precaution',
      body: (
        <div className="flex flex-col gap-4">
          <p>{product.precaution}</p>
          {product.storage ? (
            <>
              <p className="text-label uppercase text-ink-muted">Storage</p>
              <p>{product.storage}</p>
            </>
          ) : null}
        </div>
      ),
    },
    {
      heading: 'Size and manufacturer',
      body: (
        <div className="flex flex-col gap-4">
          <p>{product.size}</p>
          <p>
            {site.manufacturerLine}, {site.address}.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section aria-labelledby="full-formula" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="full-formula" className="text-display-m text-ink">
            The full formula
          </h2>
          <p className="measure-body mt-6 text-body text-ink-soft">
            This is the same text printed on the carton, word for word.
          </p>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <Accordion items={items} idPrefix={`formula-${product.slug}`} />
        </Reveal>
      </div>
    </section>
  );
}
