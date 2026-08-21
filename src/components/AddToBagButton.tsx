import type { MouseEvent } from 'react';
import type { CartLine, Product, ProductSet } from '../types';
import { useCart } from '../lib/useCart';
import { cta } from '../data/site';

interface AddToBagButtonProps {
  product?: Product;
  set?: ProductSet;
  quantity?: number;
  variant?: 'primary' | 'secondary' | 'small';
  fullWidth?: boolean;
  className?: string;
}

function lineFromProduct(product: Product): Omit<CartLine, 'quantity'> {
  return {
    id: product.slug,
    kind: 'product',
    name: product.shortName,
    size: product.size,
    price: product.price,
    image: product.image,
    imageAlt: product.imageAlt,
    href: `/shop/${product.slug}`,
  };
}

function lineFromSet(set: ProductSet): Omit<CartLine, 'quantity'> {
  return {
    id: set.slug,
    kind: 'set',
    name: set.name,
    size: `${set.includes.length} products`,
    price: set.price,
    image: set.image,
    imageAlt: set.imageAlt,
    href: '/shop',
  };
}

/**
 * The one label for this intent is `Add to bag` and it never changes.
 * The accessible name adds the product so a screen reader user hears which
 * card the button belongs to. design/DESIGN-SYSTEM.md §7.1.
 */
export function AddToBagButton({
  product,
  set,
  quantity = 1,
  variant = 'primary',
  fullWidth = false,
  className = '',
}: AddToBagButtonProps) {
  const { addLine } = useCart();
  const name = product ? product.shortName : (set?.name ?? '');

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    // Cards are links. Adding must not follow the link underneath.
    event.preventDefault();
    event.stopPropagation();
    if (product) {
      addLine(lineFromProduct(product), quantity);
    } else if (set) {
      addLine(lineFromSet(set), quantity);
    }
  }

  const variantClass =
    variant === 'secondary' ? 'btn-secondary' : variant === 'small' ? 'btn-small' : 'btn-primary';

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${cta.add}, ${name}`}
      className={`btn ${variantClass} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
    >
      {cta.add}
    </button>
  );
}
