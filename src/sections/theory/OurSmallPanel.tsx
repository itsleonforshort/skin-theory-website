import { Reveal } from '../../components/Reveal';

/**
 * The Theory §5.6. Editorial statement. The in-house tolerance panel stated
 * modestly and without medical language, and labelled as a tolerance panel
 * rather than a clinical trial.
 */
export function OurSmallPanel() {
  return (
    <section aria-labelledby="panel-heading" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="panel-heading" className="measure-display text-display-m text-ink">
            What we actually tested, and what we did not.
          </h2>

          <div className="measure-lead mt-12 flex flex-col gap-6 text-lead text-ink-soft">
            <p>
              Before the current formulas went on sale we ran a tolerance panel in Davao City: 32
              volunteers, eight weeks, one product each, recording irritation only. 30 of the 32
              finished with no irritation reported. Two stopped, both on the Salicylic bar, both
              citing dryness. That is why the direction on this site starts you at once a day.
            </p>
            <p>
              That is a tolerance panel, not a clinical trial. It tells you the products are
              unlikely to hurt you. It does not measure how much anything brightened, and we are not
              going to imply that it did. Nothing we sell is a medicine, and none of it treats a
              skin condition.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
