import { shopNumbers } from '../../data/theory';
import { Reveal } from '../../components/Reveal';

/**
 * Shop §2.5. Vertical sequence. The price objection answered inside the shop,
 * where it bites hardest. One rule per row, bottom only.
 */
export function WhatTheNumbersMean() {
  return (
    <section aria-labelledby="numbers-headline" className="section-pad">
      <div className="shell">
        <Reveal>
          <h2 id="numbers-headline" className="measure-display text-display-l text-ink">
            What you are actually buying.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-16">
          <ol>
            {shopNumbers.map((entry, index) => (
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
