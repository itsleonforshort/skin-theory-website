import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { shippingSections } from '../data/legal';
import { LegalPage } from '../components/LegalPage';
import { ClosingBand } from '../sections/ClosingBand';

/**
 * Shipping and Returns §8.1. This page carries a closing band, because it is
 * read before buying as often as after.
 */
export function ShippingReturnsPage() {
  useMeta(meta.shipping.title, meta.shipping.description);

  return (
    <>
      <LegalPage title="Shipping and Returns" sections={shippingSections} />
      <ClosingBand headline="Now you know how it gets to you." />
    </>
  );
}
