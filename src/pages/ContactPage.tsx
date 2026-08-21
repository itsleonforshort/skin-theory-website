import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { ContactLead } from '../sections/contact/ContactLead';
import { ContactForm } from '../sections/contact/ContactForm';
import { BeforeYouWrite } from '../sections/contact/BeforeYouWrite';
import { ClosingBand } from '../sections/ClosingBand';

/**
 * Contact. One goal on this page: Send message. The shop CTA appears once, at
 * the very bottom, well below the form, so it never competes with it.
 * design/PAGE-BLUEPRINTS.md §6.
 */
export function ContactPage() {
  useMeta(meta.contact.title, meta.contact.description);

  return (
    <>
      <ContactLead />
      <ContactForm />
      <BeforeYouWrite />
      <ClosingBand headline="Or start with the carton itself." showRiskLine={false} />
    </>
  );
}
