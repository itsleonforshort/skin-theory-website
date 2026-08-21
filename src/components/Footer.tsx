import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { footerLegal, footerRead, site } from '../data/site';
import { products } from '../data/products';
import { useTheme } from '../lib/useTheme';
import { isFormConfigured, notConfiguredMessage, submitToWeb3Forms } from '../lib/web3forms';
import { PlantDerivedMark } from './PlantDerivedMark';

type NewsletterState = 'idle' | 'sending' | 'done' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * The back panel of the box. Small print, complete, honest.
 * The newsletter lives here and nowhere else, so it never competes with a buy
 * button. design/PAGE-BLUEPRINTS.md §0.2.
 */
export function Footer() {
  const { theme, toggleTheme } = useTheme();
  const emailId = useId();
  const helperId = `${emailId}-helper`;
  const [email, setEmail] = useState('');
  const [state, setState] = useState<NewsletterState>('idle');
  const [message, setMessage] = useState('');

  async function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email.trim())) {
      setState('error');
      setMessage('That email address does not look right. Please check it.');
      return;
    }

    if (!isFormConfigured) {
      setState('error');
      setMessage(notConfiguredMessage);
      return;
    }

    setState('sending');
    setMessage('');

    const result = await submitToWeb3Forms({
      subject: 'Skin Theory newsletter signup',
      from_name: 'Skin Theory newsletter',
      replyto: email.trim(),
      email: email.trim(),
    });

    if (result.status === 'sent') {
      setState('done');
      setMessage('You are on the list. Look for the confirmation email.');
      setEmail('');
      return;
    }

    setState('error');
    setMessage(
      result.status === 'not-configured'
        ? notConfiguredMessage
        : 'We could not reach the server. Check your connection and try again.',
    );
  }

  return (
    <footer className="border-t border-line py-24">
      <div className="shell">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="wordmark text-title leading-tight">
              SKIN
              <br />
              THEORY
            </p>
            <address className="mt-8 text-small text-ink-soft not-italic">
              {site.manufacturerLine}
              <br />
              {site.address}
            </address>
            <PlantDerivedMark className="mt-8" />
          </div>

          <nav aria-labelledby="footer-shop">
            <h2 id="footer-shop" className="text-label uppercase text-ink-muted">
              Shop
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link to={`/shop/${product.slug}`} className="nav-link">
                    {product.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-read">
            <h2 id="footer-read" className="text-label uppercase text-ink-muted">
              Read
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {footerRead.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-labelledby="footer-legal">
              <h2 id="footer-legal" className="text-label uppercase text-ink-muted">
                Legal
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {footerLegal.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <form className="mt-12" onSubmit={handleSubscribe} noValidate>
              <p className="font-display text-title text-ink">Two emails a month, at most.</p>
              <p className="mt-3 text-small text-ink-soft">
                New batches, restocks, and the occasional note on an ingredient. No sale countdowns.
              </p>

              <label className="field-label mt-6" htmlFor={emailId}>
                Email address
              </label>
              <div className="flex flex-wrap items-start gap-4">
                <input
                  id={emailId}
                  name="newsletter_email"
                  type="email"
                  autoComplete="email"
                  className="field-input flex-1 min-w-[200px]"
                  value={email}
                  aria-describedby={helperId}
                  aria-invalid={state === 'error' ? true : undefined}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit" className="btn-quiet h-13 items-center" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending' : 'Join'}
                </button>
              </div>
              <span className="field-helper" id={helperId}>
                We use this for the newsletter only.
              </span>

              <p role="status" aria-live="polite" className="mt-2 text-small">
                <span className={state === 'error' ? 'text-error' : 'text-ink-soft'}>{message}</span>
              </p>
            </form>
          </div>
        </div>

        <hr className="rule-full mt-16" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-micro uppercase text-ink-muted">{site.claimStrip.join(' | ')}</p>

          <div className="flex flex-col gap-2 lg:items-end">
            <p className="text-small text-ink-muted">{site.copyright}</p>
            <p className="text-small text-ink-muted">
              DTI Business Name Registration No. {site.dti}
            </p>
          </div>

          <button type="button" className="btn-quiet self-start" onClick={toggleTheme}>
            {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          </button>
        </div>
      </div>
    </footer>
  );
}
