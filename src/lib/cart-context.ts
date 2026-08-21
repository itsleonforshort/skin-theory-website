import { createContext } from 'react';
import type { CartLine } from '../types';

export interface CartContextValue {
  /** Every line in the bag, in the order it was added. */
  lines: CartLine[];
  /** Total number of units, which is what the header badge shows. */
  count: number;
  subtotal: number;
  isOpen: boolean;
  /** Text for the cart live region. Screen readers hear every change. */
  announcement: string;
  /** The line that just hit the 12-unit cap, or null. */
  cappedLineId: string | null;
  addLine: (line: Omit<CartLine, 'quantity'>, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeLine: (id: string) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
