import { Minus, Plus } from '@phosphor-icons/react';
import { site } from '../data/site';

interface QuantityStepperProps {
  quantity: number;
  onChange: (quantity: number) => void;
  /** Named so a screen reader hears which line it is changing. */
  itemName: string;
  /** Below 1 the caller removes the line instead. */
  allowZero?: boolean;
}

export function QuantityStepper({
  quantity,
  onChange,
  itemName,
  allowZero = false,
}: QuantityStepperProps) {
  const minimum = allowZero ? 0 : 1;

  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        className="btn btn-small size-10 rounded-full !px-0"
        onClick={() => onChange(quantity - 1)}
        disabled={quantity <= minimum}
        aria-label={`Decrease quantity, ${itemName}`}
      >
        <Minus size={16} weight="light" aria-hidden="true" />
      </button>
      <output className="w-8 text-center text-body text-ink" aria-label={`Quantity, ${itemName}`}>
        {quantity}
      </output>
      <button
        type="button"
        className="btn btn-small size-10 rounded-full !px-0"
        onClick={() => onChange(quantity + 1)}
        disabled={quantity >= site.maxQuantityPerLine}
        aria-label={`Increase quantity, ${itemName}`}
      >
        <Plus size={16} weight="light" aria-hidden="true" />
      </button>
    </div>
  );
}
