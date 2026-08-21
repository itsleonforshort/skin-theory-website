import { ShortRule } from '../../components/ShortRule';

/**
 * Contact §6.1. Editorial statement. The reply window is stated in the first
 * paragraph, above the fold, so the visitor knows what sending costs them in
 * waiting.
 */
export function ContactLead() {
  return (
    <section aria-labelledby="contact-headline" className="py-24">
      <div className="shell">
        <h1 id="contact-headline" className="measure-display text-display-m text-ink">
          Write to the workshop.
        </h1>
        <p className="measure-lead mt-6 text-lead text-ink-soft">
          The same four people who make the products read this inbox. Expect a reply within one
          working day, Monday to Saturday.
        </p>
        <ShortRule />
      </div>
    </section>
  );
}
