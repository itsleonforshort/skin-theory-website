import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { CaretDown } from '@phosphor-icons/react';

export interface AccordionItem {
  heading: string;
  body: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Used so two accordions on one page never share a DOM id. */
  idPrefix?: string;
}

/**
 * One rule per row, bottom only. Closed by default so the page stays calm.
 * Buttons, not custom widgets, so the keyboard already works.
 */
export function Accordion({ items, idPrefix }: AccordionProps) {
  const generatedId = useId();
  const prefix = idPrefix ?? generatedId;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${prefix}-panel-${index}`;
        const buttonId = `${prefix}-button-${index}`;

        return (
          <div key={item.heading} className="border-b border-line">
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 bg-transparent py-6 text-left"
              >
                <span className="font-display text-title text-ink">{item.heading}</span>
                <CaretDown
                  size={20}
                  weight="light"
                  aria-hidden="true"
                  className="shrink-0 text-ink-muted transition-transform duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <div className="measure-body pb-8 text-body text-ink-soft">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
