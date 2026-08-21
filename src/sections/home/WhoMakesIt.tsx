import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { PhotoPlate } from '../../components/PhotoPlate';
import { Reveal } from '../../components/Reveal';

/**
 * Home §1.8. Split panel, inverted: the plate on the left at 40%, the type on
 * the right at 60%. This section carries the second and last tracked-caps
 * label on the page.
 */
export function WhoMakesIt() {
  return (
    <section aria-labelledby="founder-headline" className="section-pad">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40fr_60fr] lg:gap-24">
          <Reveal>
            <PhotoPlate
              lines={['Tigatto, Davao City', 'Small batches of about six hundred', 'Since 2023']}
              ratio="4/5"
            />
          </Reveal>

          <Reveal index={1}>
            <p className="text-label uppercase text-ink-muted">DAVAO CITY</p>
            <h2 id="founder-headline" className="measure-display mt-6 text-display-l text-ink">
              Marianne mixed the first batch in her mother&apos;s kitchen.
            </h2>

            <div className="measure-body mt-8 flex flex-col gap-6 text-body text-ink-soft">
              <p>
                She spent six years buying whitening bars that listed &quot;fragrance&quot; and
                little else. When she started studying formulation, she found out why: nobody is
                required to tell you the ratio, only the ingredients, and most brands stop at the
                minimum.
              </p>
              <p>
                Skin Theory started in 2023 as a run of forty bars, made to answer one question. If
                a carton had to carry the whole formula on it, would the formula still be worth
                selling?
              </p>
              <p>
                It is now made in a small workshop in Tigatto with a team of four, in batches of
                about six hundred. The address on the back of your carton is the room the soap was
                cut in.
              </p>
            </div>

            <p className="mt-8 text-label uppercase text-ink">{site.founder}</p>

            <div className="mt-8">
              <Link to="/about" className="btn-quiet">
                Read the whole story
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
