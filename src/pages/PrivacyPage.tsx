import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { privacySections } from '../data/legal';
import { LegalPage } from '../components/LegalPage';

/**
 * Privacy Policy §8.2. No closing band: pushing a sale at the end of a privacy
 * policy would undo the trust the page just built.
 */
export function PrivacyPage() {
  useMeta(meta.privacy.title, meta.privacy.description);

  return <LegalPage title="Privacy Policy" sections={privacySections} />;
}
