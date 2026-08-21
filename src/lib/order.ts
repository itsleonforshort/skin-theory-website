import type { CartLine } from '../types';
import { ORDER_KEY, readStored, writeStored } from './storage';

export interface PlacedOrder {
  orderNumber: string;
  email: string;
  mobile: string;
  fullName: string;
  street: string;
  barangay: string;
  city: string;
  province: string;
  regionLabel: string;
  regionDays: string;
  postalCode: string;
  notes: string;
  paymentLabel: string;
  lines: CartLine[];
  subtotal: number;
  shipping: number;
  total: number;
  /** False when the shop has not connected its Web3Forms key yet. */
  emailed: boolean;
}

export function saveOrder(order: PlacedOrder): void {
  writeStored(ORDER_KEY, order);
}

export function readOrder(): PlacedOrder | null {
  const stored = readStored<PlacedOrder | null>(ORDER_KEY, null);
  if (
    stored &&
    typeof stored === 'object' &&
    typeof stored.orderNumber === 'string' &&
    Array.isArray(stored.lines)
  ) {
    return stored;
  }
  return null;
}
