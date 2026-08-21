/**
 * Small wrapper around localStorage.
 *
 * Private windows, blocked site data and full quotas all make localStorage
 * throw. Nothing here is allowed to break the page, so every call is guarded
 * and failure just means the value is not remembered.
 */

export function readStored<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStored(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage is unavailable. The bag still works for this visit.
  }
}

export function removeStored(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Nothing to do. The key was never written.
  }
}

export const CART_KEY = 'skin-theory-cart';
export const ORDER_KEY = 'skin-theory-last-order';
