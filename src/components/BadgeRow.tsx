import {
  Drop,
  Flower,
  HandSoap,
  Leaf,
  OrangeSlice,
  Plant,
  ShieldCheck,
  Sparkle,
  Sun,
  Wind,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import type { BadgeIcon, IngredientBadge } from '../types';

const icons: Record<BadgeIcon, Icon> = {
  leaf: Leaf,
  'orange-slice': OrangeSlice,
  drop: Drop,
  sun: Sun,
  sparkle: Sparkle,
  'shield-check': ShieldCheck,
  flower: Flower,
  'hand-soap': HandSoap,
  wind: Wind,
  plant: Plant,
};

interface BadgeRowProps {
  badges: IngredientBadge[];
  /** Gold on Coco Kojic Gluta, matching the print. Accent elsewhere. */
  tone?: 'gold' | 'accent';
}

/**
 * The outlined ingredient badges from the Kojic back panel: a 64px circle with
 * one line icon, the caption to the right of it, and one 2px rule closing the
 * group. design/DESIGN-SYSTEM.md §6.2.
 */
export function BadgeRow({ badges, tone = 'accent' }: BadgeRowProps) {
  const stroke = tone === 'gold' ? 'border-gold text-gold-deep' : 'border-accent-deep text-ink';
  const captionColor = tone === 'gold' ? 'text-gold-deep' : 'text-ink';
  const rule = tone === 'gold' ? 'bg-gold' : 'bg-accent-deep';

  return (
    <div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge) => {
          const IconComponent = icons[badge.icon];
          return (
            <li key={badge.name} className="flex items-start gap-4">
              <span
                className={`flex size-16 shrink-0 items-center justify-center rounded-full border ${stroke}`}
              >
                <IconComponent size={24} weight="light" aria-hidden="true" />
              </span>
              <span className="block pt-2">
                <span className={`block text-label uppercase ${captionColor}`}>{badge.name}</span>
                <span className="mt-2 block text-small text-ink-soft">{badge.line}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <div aria-hidden="true" className={`mt-12 h-0.5 w-full ${rule}`} />
    </div>
  );
}
