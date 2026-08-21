import { Link } from 'react-router-dom';
import { cta, meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { ShortRule } from '../components/ShortRule';

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'The Theory', to: '/the-theory' },
  { label: 'Contact', to: '/contact' },
];

/**
 * 404 §9. A single centred column, no illustration. A mistyped link has to go
 * somewhere real, which PRD §9 requires.
 */
export function NotFoundPage() {
  useMeta(meta.notFound.title, meta.notFound.description);

  return (
    <div className="py-40">
      <div className="shell mx-auto max-w-[60ch]">
        <h1 className="text-display-m text-ink">That page is not here.</h1>
        <p className="mt-6 text-lead text-ink-soft">
          The link may be old, or the address may have a typo in it. These three go somewhere real.
        </p>

        <ShortRule />

        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="btn-quiet">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/shop" className="btn btn-primary mt-12">
          {cta.shop}
        </Link>
      </div>
    </div>
  );
}
