import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { ClaimStrip } from '../components/ClaimStrip';
import { Hero } from '../sections/home/Hero';
import { ProblemNamed } from '../sections/home/ProblemNamed';
import { FiveProducts } from '../sections/home/FiveProducts';
import { WhatIsInThem } from '../sections/home/WhatIsInThem';
import { DayInTheRoutine } from '../sections/home/DayInTheRoutine';
import { Proof } from '../sections/home/Proof';
import { WhoMakesIt } from '../sections/home/WhoMakesIt';
import { Objections } from '../sections/home/Objections';
import { ClosingBand } from '../sections/ClosingBand';

/**
 * Ten content sections in the order set by design/PAGE-BLUEPRINTS.md §1.
 * The rhythm is split, strip, statement, grid, badges, sequence, quotes,
 * split, accordion, band, so no two card grids ever stack.
 */
export function HomePage() {
  useMeta(meta.home.title, meta.home.description);

  return (
    <>
      <Hero />
      <ClaimStrip />
      <ProblemNamed />
      <FiveProducts />
      <WhatIsInThem />
      <DayInTheRoutine />
      <Proof />
      <WhoMakesIt />
      <Objections />
      <ClosingBand
        headline="Five products. One page of ingredients. No surprises."
        body="Start with the one that matches the concern on the front of the carton."
      />
    </>
  );
}
