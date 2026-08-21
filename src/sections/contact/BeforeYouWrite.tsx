import { contactQuestions } from '../../data/faq';
import { Accordion } from '../../components/Accordion';
import { Reveal } from '../../components/Reveal';

/**
 * Contact §6.3. Disclosure list. Four answers that save the visitor the email
 * and lower the support load.
 */
export function BeforeYouWrite() {
  const items = contactQuestions.map((entry) => ({
    heading: entry.question,
    body: <p>{entry.answer}</p>,
  }));

  return (
    <section aria-labelledby="before-you-write" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="before-you-write" className="measure-display text-display-m text-ink">
            Four answers that might save you the email.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <Accordion items={items} idPrefix="contact-questions" />
        </Reveal>
      </div>
    </section>
  );
}
