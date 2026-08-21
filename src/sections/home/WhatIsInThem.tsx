import { Link } from 'react-router-dom';
import { getProduct } from '../../data/products';
import { BadgeRow } from '../../components/BadgeRow';
import { Reveal } from '../../components/Reveal';

/**
 * Home §1.5. Badge row, drawn from the Coco Kojic Gluta back panel, in gold,
 * word for word. It opens a loop: four actives here, seven on The Theory.
 */
export function WhatIsInThem() {
  const kojic = getProduct('coco-kojic-gluta-soap');

  if (!kojic) {
    return null;
  }

  return (
    <section aria-labelledby="actives-headline" className="section-pad bg-bone">
      <div className="shell">
        <Reveal>
          <h2 id="actives-headline" className="measure-display text-display-l text-ink">
            Four of the actives, straight off the back panel.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-16">
          <BadgeRow badges={kojic.badges} tone="gold" />
        </Reveal>

        <Reveal index={2} className="mt-12">
          <p className="measure-lead text-lead text-ink-soft">
            There are seven actives across the five products. Each one is named on the front of its
            carton and listed in full on the back.
          </p>
          <div className="mt-8">
            <Link to="/the-theory" className="btn-quiet">
              Read The Theory
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
