import type { CSSProperties } from 'react';
import type { AccentFamily } from '../types';

/**
 * Scopes one product accent to one surface. Only that product's card, detail
 * page and artwork panel ever see it, so two accents never meet in a section.
 * See design/DESIGN-SYSTEM.md §1.4.
 */
export function accentStyle(accent: AccentFamily): CSSProperties {
  return {
    '--st-accent-deep': `var(--st-${accent}-deep)`,
    '--st-accent-base': `var(--st-${accent}-base)`,
    '--st-accent-mid': `var(--st-${accent}-mid)`,
    '--st-accent-light': `var(--st-${accent}-light)`,
  } as CSSProperties;
}

/**
 * The class the product name is set in.
 *
 * The cartons print Coco Kojic Gluta and Gluta Soya in sand #D2AC81, which
 * measures 2.1:1 against white and fails at any size. On the web those two are
 * set in ink instead, and sand moves to the short rule. Salicylic keeps its
 * printed forest green, which measures 8.9:1 and passes.
 */
export function nameColorClass(accent: AccentFamily): string {
  if (accent === 'leaf') {
    return 'text-forest';
  }
  if (accent === 'stone') {
    return 'text-ink-soft';
  }
  return 'text-ink';
}
