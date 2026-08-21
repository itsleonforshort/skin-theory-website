import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { TheoryLead } from '../sections/theory/TheoryLead';
import { SevenActives } from '../sections/theory/SevenActives';
import { WhatWeDoNotUse } from '../sections/theory/WhatWeDoNotUse';
import { HowToLayerThem } from '../sections/theory/HowToLayerThem';
import { PatchTest } from '../sections/theory/PatchTest';
import { OurSmallPanel } from '../sections/theory/OurSmallPanel';
import { TheoryQuestions } from '../sections/theory/TheoryQuestions';
import { ClosingBand } from '../sections/ClosingBand';

/**
 * The Theory. The proof engine the rest of the site links into.
 * design/PAGE-BLUEPRINTS.md §5.
 */
export function TheoryPage() {
  useMeta(meta.theory.title, meta.theory.description);

  return (
    <>
      <TheoryLead />
      <SevenActives />
      <WhatWeDoNotUse />
      <HowToLayerThem />
      <PatchTest />
      <OurSmallPanel />
      <TheoryQuestions />
      <ClosingBand headline="Now you know what is in them." />
    </>
  );
}
