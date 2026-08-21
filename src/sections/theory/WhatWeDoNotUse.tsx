import { notUsed } from '../../data/theory';

/**
 * The Theory §5.3. Hairline strip, expanded to 96px at lg. Short, absolute,
 * and straight from the claims printed on every carton. A hard rhythm break in
 * the middle of the page.
 */
export function WhatWeDoNotUse() {
  return (
    <section aria-labelledby="not-used-heading" className="border-y border-line py-12">
      <div className="shell">
        <h2 id="not-used-heading" className="visually-hidden">
          What we do not use
        </h2>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {notUsed.map((entry) => (
            <li key={entry.name}>
              <p className="text-label uppercase text-ink">{entry.name}</p>
              <p className="mt-3 text-small text-ink-soft">{entry.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
