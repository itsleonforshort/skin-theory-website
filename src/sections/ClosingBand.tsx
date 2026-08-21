import { Link } from 'react-router-dom';
import { cta, riskLine } from '../data/site';
import { Reveal } from '../components/Reveal';

interface ClosingBandProps {
  headline: string;
  body?: string;
  /** Every closing band carries the shop CTA and the risk reducers. */
  showRiskLine?: boolean;
}

/**
 * The closing band: a full-width bone field, one headline, one line of body,
 * one primary button, and the risk reducers directly beneath it.
 * design/DESIGN-SYSTEM.md §10, family 9.
 */
export function ClosingBand({ headline, body, showRiskLine = true }: ClosingBandProps) {
  return (
    <section className="bg-bone py-24 lg:py-40">
      <div className="shell">
        <Reveal className="max-w-[52ch]">
          <h2 className="text-display-m text-ink">{headline}</h2>
          {body ? <p className="mt-6 text-lead text-ink-soft">{body}</p> : null}
          <div className="mt-12">
            <Link to="/shop" className="btn btn-primary">
              {cta.shop}
            </Link>
          </div>
          {showRiskLine ? <p className="mt-6 text-small text-ink-muted">{riskLine}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
