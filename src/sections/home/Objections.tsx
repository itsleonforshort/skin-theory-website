import { homeObjections } from '../../data/faq';
import { Accordion } from '../../components/Accordion';
import { Reveal } from '../../components/Reveal';

/**
 * Home §1.9. Disclosure list. Price, fit and failure, answered head on, each
 * ending in a concrete fact.
 */
export function Objections() {
  const items = homeObjections.map((entry) => ({
    heading: entry.question,
    body: <p>{entry.answer}</p>,
  }));

  return (
    <section aria-labelledby="objections-headline" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="objections-headline" className="measure-display text-display-l text-ink">
            The three things people ask before they buy.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-16">
          <Accordion items={items} idPrefix="home-objections" />
        </Reveal>
      </div>
    </section>
  );
}
