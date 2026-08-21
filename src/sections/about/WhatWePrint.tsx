import { commitments } from '../../data/theory';
import { Reveal } from '../../components/Reveal';

/**
 * About §4.3. Vertical sequence. Four numbered commitments, each one line of
 * promise and what it costs the brand to keep it. That cost detail is what
 * makes it believable.
 */
export function WhatWePrint() {
  return (
    <section aria-labelledby="commitments-heading" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="commitments-heading" className="measure-display text-display-m text-ink">
            Four things on every carton, and what each one costs us.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-16">
          <ol>
            {commitments.map((entry, index) => (
              <li key={entry.heading} className="border-b border-line py-8">
                <div className="flex gap-6 lg:gap-12">
                  <span aria-hidden="true" className="font-display text-title text-ink-muted">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-title text-ink">{entry.heading}</h3>
                    <p className="measure-body mt-3 text-body text-ink-soft">{entry.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
