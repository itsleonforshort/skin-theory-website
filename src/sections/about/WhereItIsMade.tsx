import { site } from '../../data/site';
import { PhotoPlate } from '../../components/PhotoPlate';
import { Reveal } from '../../components/Reveal';

/**
 * About §4.4. Split panel, inverted. The manufacturer block from the cartons,
 * the batch process in three lines, and the small-batch number.
 */
export function WhereItIsMade() {
  return (
    <section aria-labelledby="workshop-heading" className="section-pad bg-bone">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 id="workshop-heading" className="measure-display text-display-m text-ink">
              A workshop in Tigatto, four people, batches of six hundred.
            </h2>

            <address className="mt-8 text-label uppercase text-ink not-italic">
              {site.manufacturerLine}
              <br />
              {site.address}
            </address>

            <div className="measure-body mt-8 flex flex-col gap-6 text-body text-ink-soft">
              <p>
                Bars are cold-processed, cut by hand, and cured for four weeks before they are
                wrapped. The gel and the serum are mixed in smaller runs because they have a shorter
                window. Every batch is held back for a week and tested on the team before any of it
                is boxed.
              </p>
              <p>
                The workshop is not a shop. If you want to buy in person, the stockists are listed
                on the Contact page.
              </p>
            </div>

            <p className="mt-8 text-label uppercase text-ink">{site.productionLead}</p>
          </Reveal>

          <Reveal index={1} className="order-first lg:order-last">
            <PhotoPlate
              lines={[
                'The Tigatto workshop',
                'Trays of cured bars on steel racks',
                'Four weeks of curing before wrapping',
              ]}
              ratio="4/5"
              className="bg-paper"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
