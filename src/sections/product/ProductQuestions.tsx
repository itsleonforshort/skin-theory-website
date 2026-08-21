import type { Product } from '../../types';
import { Accordion } from '../../components/Accordion';
import { Reveal } from '../../components/Reveal';

/**
 * Product detail §3.8. Three product-specific questions, answered in four
 * lines or fewer.
 */
export function ProductQuestions({ product }: { product: Product }) {
  const items = product.questions.map((entry) => ({
    heading: entry.question,
    body: <p>{entry.answer}</p>,
  }));

  return (
    <section aria-labelledby="product-questions" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="product-questions" className="text-display-m text-ink">
            Questions about this one
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <Accordion items={items} idPrefix={`questions-${product.slug}`} />
        </Reveal>
      </div>
    </section>
  );
}
