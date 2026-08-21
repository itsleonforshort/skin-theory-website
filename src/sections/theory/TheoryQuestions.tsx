import { theoryQuestions } from '../../data/faq';
import { Accordion } from '../../components/Accordion';
import { Reveal } from '../../components/Reveal';

/**
 * The Theory §5.7. Five questions about actives, sun exposure, pregnancy,
 * combining with retinol, and how long results take. The pregnancy and retinol
 * answers both end by saying to ask a doctor.
 */
export function TheoryQuestions() {
  const items = theoryQuestions.map((entry) => ({
    heading: entry.question,
    body: <p>{entry.answer}</p>,
  }));

  return (
    <section aria-labelledby="theory-questions" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="theory-questions" className="measure-display text-display-m text-ink">
            Questions people send us about actives.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <Accordion items={items} idPrefix="theory-questions" />
        </Reveal>
      </div>
    </section>
  );
}
