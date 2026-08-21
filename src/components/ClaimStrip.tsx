import { site } from '../data/site';

/**
 * PARABEN FREE | SULFATE FREE | CRUELTY FREE, straight off the cartons.
 * 56px tall, one hairline above and below, no images.
 * design/DESIGN-SYSTEM.md §6.3.
 */
export function ClaimStrip() {
  return (
    <div className="border-y border-line">
      <div className="shell flex h-14 items-center justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-micro uppercase text-ink-muted">
          {site.claimStrip.map((claim, index) => (
            <li key={claim} className="flex items-center gap-6">
              {index > 0 ? (
                <span aria-hidden="true" className="block h-3 w-px bg-line" />
              ) : null}
              <span>{claim}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
