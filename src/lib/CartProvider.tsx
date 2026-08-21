import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { CartLine } from '../types';
import { CART_KEY, readStored, writeStored } from './storage';
import { site, strings } from '../data/site';
import { CartContext } from './cart-context';
import type { CartContextValue } from './cart-context';

/** Guards against a stored value that is not the shape we expect. */
function isCartLine(value: unknown): value is CartLine {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const line = value as Partial<CartLine>;
  return (
    typeof line.id === 'string' &&
    (line.kind === 'product' || line.kind === 'set') &&
    typeof line.name === 'string' &&
    typeof line.size === 'string' &&
    typeof line.price === 'number' &&
    typeof line.image === 'string' &&
    typeof line.imageAlt === 'string' &&
    typeof line.href === 'string' &&
    typeof line.quantity === 'number' &&
    line.quantity > 0
  );
}

function clampQuantity(quantity: number): number {
  const whole = Math.floor(quantity);
  if (whole < 1) {
    return 1;
  }
  if (whole > site.maxQuantityPerLine) {
    return site.maxQuantityPerLine;
  }
  return whole;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  announcement: string;
  cappedLineId: string | null;
}

type CartAction =
  | { type: 'add'; line: Omit<CartLine, 'quantity'>; quantity: number }
  | { type: 'set-quantity'; id: string; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'clear' }
  | { type: 'open' }
  | { type: 'close' };

/**
 * The bag is read straight out of localStorage when the provider first
 * renders, so a refresh never flashes an empty bag and no effect has to write
 * state back in.
 */
function createInitialState(): CartState {
  const stored = readStored<unknown[]>(CART_KEY, []);
  const restored = Array.isArray(stored) ? stored.filter(isCartLine) : [];
  return {
    lines: restored.map((line) => ({ ...line, quantity: clampQuantity(line.quantity) })),
    isOpen: false,
    announcement: '',
    cappedLineId: null,
  };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.lines.find((item) => item.id === action.line.id);
      if (!existing) {
        return {
          lines: [...state.lines, { ...action.line, quantity: clampQuantity(action.quantity) }],
          isOpen: true,
          announcement: `${strings.addedToBag} ${action.line.name}.`,
          cappedLineId: null,
        };
      }
      const wanted = existing.quantity + action.quantity;
      const next = clampQuantity(wanted);
      return {
        lines: state.lines.map((item) =>
          item.id === action.line.id ? { ...item, quantity: next } : item,
        ),
        isOpen: true,
        announcement: `${strings.addedToBag} ${action.line.name}.`,
        cappedLineId: wanted > site.maxQuantityPerLine ? action.line.id : null,
      };
    }

    case 'set-quantity': {
      const target = state.lines.find((item) => item.id === action.id);
      if (!target) {
        return state;
      }
      if (action.quantity < 1) {
        return {
          ...state,
          lines: state.lines.filter((item) => item.id !== action.id),
          announcement: `${strings.removedFromBag} ${target.name}.`,
          cappedLineId: null,
        };
      }
      const next = clampQuantity(action.quantity);
      return {
        ...state,
        lines: state.lines.map((item) =>
          item.id === action.id ? { ...item, quantity: next } : item,
        ),
        announcement: `${target.name}, quantity ${next}.`,
        cappedLineId: action.quantity > site.maxQuantityPerLine ? action.id : null,
      };
    }

    case 'remove': {
      const target = state.lines.find((item) => item.id === action.id);
      return {
        ...state,
        lines: state.lines.filter((item) => item.id !== action.id),
        announcement: target
          ? `${strings.removedFromBag} ${target.name}.`
          : strings.removedFromBag,
        cappedLineId: null,
      };
    }

    case 'clear':
      return { lines: [], isOpen: false, announcement: 'Your bag is empty.', cappedLineId: null };

    case 'open':
      return { ...state, isOpen: true };

    case 'close':
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, createInitialState);

  // Persist on every change. The bag survives a refresh.
  useEffect(() => {
    writeStored(CART_KEY, state.lines);
  }, [state.lines]);

  const addLine = useCallback((line: Omit<CartLine, 'quantity'>, quantity = 1) => {
    dispatch({ type: 'add', line, quantity });
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: 'set-quantity', id, quantity });
  }, []);

  const removeLine = useCallback((id: string) => {
    dispatch({ type: 'remove', id });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: 'clear' });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: 'open' });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: 'close' });
  }, []);

  const count = useMemo(
    () => state.lines.reduce((total, line) => total + line.quantity, 0),
    [state.lines],
  );

  const subtotal = useMemo(
    () => state.lines.reduce((total, line) => total + line.price * line.quantity, 0),
    [state.lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines: state.lines,
      count,
      subtotal,
      isOpen: state.isOpen,
      announcement: state.announcement,
      cappedLineId: state.cappedLineId,
      addLine,
      setQuantity,
      removeLine,
      clear,
      openCart,
      closeCart,
    }),
    [
      state.lines,
      state.isOpen,
      state.announcement,
      state.cappedLineId,
      count,
      subtotal,
      addLine,
      setQuantity,
      removeLine,
      clear,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
