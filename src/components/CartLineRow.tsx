import { Link } from 'react-router-dom';
import type { CartLine } from '../types';
import { formatPeso } from '../lib/format';
import { useCart } from '../lib/useCart';
import { strings } from '../data/site';
import { BoxImage } from './BoxImage';
import { QuantityStepper } from './QuantityStepper';

interface CartLineRowProps {
  line: CartLine;
  /** The drawer is 420px wide, so it stacks. The cart page has room. */
  layout?: 'drawer' | 'page';
  onNavigate?: () => void;
}

export function CartLineRow({ line, layout = 'drawer', onNavigate }: CartLineRowProps) {
  const { setQuantity, removeLine, cappedLineId } = useCart();
  const capped = cappedLineId === line.id;

  return (
    <li className="border-b border-line py-6">
      <div className={`flex gap-4 ${layout === 'page' ? 'sm:gap-8' : ''}`}>
        <div className={layout === 'page' ? 'w-24 shrink-0 sm:w-32' : 'w-20 shrink-0'}>
          <BoxImage src={line.image} alt={line.imageAlt} ratio="1/1" inset="tight" />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-display text-title text-ink">
                <Link to={line.href} onClick={onNavigate}>
                  {line.name}
                </Link>
              </p>
              <p className="mt-1 text-label uppercase text-ink-muted">{line.size}</p>
              <p className="mt-1 text-small text-ink-soft">{formatPeso(line.price)} each</p>
            </div>
            <p className="font-display text-title text-ink">
              {formatPeso(line.price * line.quantity)}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <QuantityStepper
              quantity={line.quantity}
              itemName={line.name}
              onChange={(quantity) => setQuantity(line.id, quantity)}
            />
            <button type="button" className="btn-quiet" onClick={() => removeLine(line.id)}>
              Remove
            </button>
          </div>

          {capped ? <p className="text-small text-ink-muted">{strings.quantityCap}</p> : null}
        </div>
      </div>
    </li>
  );
}
