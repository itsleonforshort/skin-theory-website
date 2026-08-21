import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../lib/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Position in a group of siblings. 60ms apart, capped at 5. */
  index?: number;
  as?: ElementType;
}

/**
 * Fade in and rise 12px, once. Under prefers-reduced-motion the content
 * renders at its final state straight away. design/DESIGN-SYSTEM.md §8.
 */
export function Reveal({ children, className = '', index = 0, as }: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Tag = (as ?? 'div') as ElementType;
  const delay = Math.min(index, 4) * 60;

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
