import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { termsSections } from '../data/legal';
import { LegalPage } from '../components/LegalPage';

/**
 * Terms of Sale §8.3. No closing band, for the same reason as Privacy. Its
 * conversion job is removing doubt, and the sticky header keeps Shop one click
 * away.
 */
export function TermsPage() {
  useMeta(meta.terms.title, meta.terms.description);

  return <LegalPage title="Terms of Sale" sections={termsSections} />;
}
