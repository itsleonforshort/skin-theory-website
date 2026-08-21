import { useContext } from 'react';
import { CartContext } from './cart-context';
import type { CartContextValue } from './cart-context';

export function useCart(): CartContextValue {
  const value = useContext(CartContext);
  if (value === null) {
    throw new Error('useCart must be used inside a CartProvider.');
  }
  return value;
}
