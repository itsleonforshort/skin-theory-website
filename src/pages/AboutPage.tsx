import { meta } from '../data/site';
import { useMeta } from '../lib/useMeta';
import { AboutLead } from '../sections/about/AboutLead';
import { TheFounder } from '../sections/about/TheFounder';
import { WhatWePrint } from '../sections/about/WhatWePrint';
import { WhereItIsMade } from '../sections/about/WhereItIsMade';
import { TheLineSoFar } from '../sections/about/TheLineSoFar';
import { ClosingBand } from '../sections/ClosingBand';

/**
 * About. Statement, split, sequence, split, grid, band.
 * design/PAGE-BLUEPRINTS.md §4.
 */
export function AboutPage() {
  useMeta(meta.about.title, meta.about.description);

  return (
    <>
      <AboutLead />
      <TheFounder />
      <WhatWePrint />
      <WhereItIsMade />
      <TheLineSoFar />
      <ClosingBand headline="The whole formula is on the carton. Read it before you buy it." />
    </>
  );
}
