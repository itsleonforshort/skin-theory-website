import { site } from '../../data/site';
import { PhotoPlate } from '../../components/PhotoPlate';
import { Reveal } from '../../components/Reveal';

/**
 * About §4.2. Split panel. Four short paragraphs: what she did before, what
 * went wrong with the products she was buying, what she decided to print on
 * the box, and where the first batch was made.
 */
export function TheFounder() {
  return (
    <section aria-labelledby="founder-heading" className="section-pad bg-bone">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <PhotoPlate
              lines={[
                'Marianne Quiñones',
                'Founder and formulator',
                'Quality control before formulation',
              ]}
              ratio="4/5"
              className="bg-paper"
            />
          </Reveal>

          <Reveal index={1}>
            <h2 id="founder-heading" className="measure-display text-display-m text-ink">
              Marianne spent six years buying bars that told her nothing.
            </h2>

            <div className="measure-body mt-8 flex flex-col gap-6 text-body text-ink-soft">
              <p>
                She worked in quality control for a food manufacturer in Davao before any of this.
                She was used to specification sheets, so the first time she turned over a whitening
                soap and read &quot;fragrance, and other ingredients&quot; she assumed she had
                picked up a bad one. She had not. Most of them were like that.
              </p>
              <p>
                In 2022 she started a formulation course in Manila on weekends. What she learned was
                not a secret: the actives in most whitening bars are real, they are just present in
                amounts too small to do the thing on the label. Nobody has to tell you which one you
                are holding.
              </p>
              <p>
                The first Skin Theory run was forty bars in her mother&apos;s kitchen in 2023, made
                to test one rule. If the whole formula has to fit on the carton, in order, at a size
                a person can read, does the formula survive being read?
              </p>
              <p>
                It did, four times out of nine. Those four became the bars. The cleanser and the
                serum came the following year.
              </p>
            </div>

            <p className="mt-8 text-label uppercase text-ink">{site.founder}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
