/** Content for The Theory page. Copy from design/COPY.md §7. */

export interface Active {
  name: string;
  what: string;
  inSlugs: string[];
  /** Extra note where a product carries a different form of the same active. */
  inNote?: string;
  careful: string;
}

export const actives: Active[] = [
  {
    name: 'Kojic Acid',
    what: 'Slows the enzyme that makes pigment, so new skin comes up more evenly than the skin it replaces. Helps reduce the look of dark spots and uneven tone over weeks, not days.',
    inSlugs: ['coco-kojic-gluta-soap'],
    careful:
      'your skin is reactive, or you cannot commit to daily sunscreen. New skin without sun protection undoes the work.',
  },
  {
    name: 'Glutathione',
    what: 'An antioxidant the body already makes. Applied to the skin it helps brighten and supports a radiant-looking finish. It is gentle, which is why it carries the softer of our two brightening bars on its own.',
    inSlugs: ['coco-kojic-gluta-soap', 'gluta-soya-soap'],
    careful: 'nothing specific. This is the mildest active in the line.',
  },
  {
    name: 'Ascorbic Acid (Vitamin C)',
    what: 'Brightens and protects skin. It also helps the other brightening actives work by holding pigment production down from a second direction.',
    inSlugs: ['coco-kojic-gluta-soap', 'gluta-soya-soap'],
    inNote: 'A stable form, sodium ascorbyl phosphate, is in the serum.',
    careful:
      'you already use a separate high-strength vitamin C serum. Two at once is where stinging usually starts.',
  },
  {
    name: 'Salicylic Acid',
    what: 'Oil-soluble, so it gets inside the pore instead of resting on the surface. Helps remove excess oil, unclog blocked pores, and reduce breakouts.',
    inSlugs: ['salicylic-soap'],
    careful:
      'your skin is dry or you are already using a prescription acne treatment. Ask your doctor before stacking them.',
  },
  {
    name: 'Niacinamide',
    what: 'Vitamin B3. Helps control oil, helps even out the look of tone, and helps the skin barrier hold water. It is the most tolerated active on this list, which is why it is the base of our only leave-on product.',
    inSlugs: ['niacinamide-serum'],
    careful:
      'nothing specific, though a small number of people flush at high strengths. Patch test.',
  },
  {
    name: 'Centella Asiatica',
    what: 'Sometimes sold as cica. Helps calm and soothe skin that has been through something, which in this line usually means an active. It is in the serum for exactly that reason.',
    inSlugs: ['niacinamide-serum'],
    careful: 'nothing specific.',
  },
  {
    name: 'Honey Extract and Witch Hazel Extract',
    what: 'Treated as one entry because they only appear together, in the cleanser. Honey extract helps skin feel smooth and balanced. Hamamelis virginiana, witch hazel, helps refresh and tighten the look of the skin after washing.',
    inSlugs: ['bee-wash'],
    careful: 'you have a known bee product allergy.',
  },
];

export const notUsed = [
  {
    name: 'PARABENS',
    line: 'Not in any of the five. Preservation is done with sodium benzoate, caprylyl glycol and citric acid instead.',
  },
  {
    name: 'SULFATES',
    line: 'Not in any of the five. The cleanser uses cocamidopropyl betaine, which is why it does not leave your face tight.',
  },
  {
    name: 'ANIMAL TESTING',
    line: 'Not by us, and not by any supplier we buy from. Confirmed in writing before we place an order.',
  },
];

export interface Routine {
  heading: string;
  morning: string;
  night: string;
  note: string;
  slugs: string[];
}

export const routines: Routine[] = [
  {
    heading: 'If it is dark spots and uneven tone',
    morning: 'Bee Wash, serum, sunscreen.',
    night: 'Bee Wash, Coco Kojic Gluta left on for two minutes, serum.',
    note: 'Give it eight weeks before you judge it. Sunscreen is not optional here.',
    slugs: ['bee-wash', 'coco-kojic-gluta-soap', 'niacinamide-serum'],
  },
  {
    heading: 'If it is oil and breakouts',
    morning: 'Bee Wash, serum, sunscreen.',
    night: 'Bee Wash, Salicylic left on for two minutes, serum.',
    note: 'Start the bar every other night for the first two weeks.',
    slugs: ['bee-wash', 'salicylic-soap', 'niacinamide-serum'],
  },
  {
    heading: 'If your skin is sensitive or you are starting out',
    morning: 'Bee Wash, serum, sunscreen.',
    night: 'Bee Wash, Gluta Soya left on for two minutes.',
    note: 'Add the serum at night once, after two comfortable weeks. Add nothing else until week four.',
    slugs: ['bee-wash', 'gluta-soya-soap'],
  },
];

export const patchTestSteps = [
  {
    heading: 'Pick the spot.',
    body: 'The soft skin on the inside of your forearm, near the elbow. It reacts more like your face than the back of your hand does.',
  },
  {
    heading: 'Use the product normally.',
    body: 'For a bar, lather it there and leave it for two minutes, then rinse. For the serum, two drops and leave it on.',
  },
  {
    heading: 'Wait a full 24 hours, then repeat once.',
    body: 'Most reactions show inside a day. Doing it twice catches the slower ones.',
  },
  {
    heading: 'Read the result honestly.',
    body: 'Slight tingling that passes is common with actives. Redness that is still there the next morning, itching, or bumps mean stop, and that product is not for you.',
  },
];

/** Home §1.6, the morning and evening routine. Copy from design/COPY.md §3.6. */
export interface RoutineStep {
  name: string;
  body: string;
  /** Present when the step is a product we sell. */
  slug?: string;
}

export const morningRoutine: RoutineStep[] = [
  {
    name: 'Bee Wash',
    slug: 'bee-wash',
    body: 'Wet the face, work in a small amount, rinse.',
  },
  {
    name: 'Niacinamide + Centella + Aloe Barbadensis Serum',
    slug: 'niacinamide-serum',
    body: 'A few drops, avoiding the eyes.',
  },
  {
    name: 'Sunscreen',
    body: 'We do not make one. Use any broad-spectrum sunscreen you already trust. Kojic acid and ascorbic acid both make sun protection matter more, so this step is not optional.',
  },
];

export const eveningRoutine: RoutineStep[] = [
  {
    name: 'Bee Wash',
    slug: 'bee-wash',
    body: 'Same as the morning, to take the day off.',
  },
  {
    name: 'Your bar',
    body: 'Coco Kojic Gluta for uneven tone, Gluta Soya for dullness, Salicylic for oil and breakouts. Lather, leave on for two minutes, rinse.',
  },
  {
    name: 'Niacinamide + Centella + Aloe Barbadensis Serum',
    slug: 'niacinamide-serum',
    body: 'A few drops again.',
  },
];

/** About §4.3. Copy from design/COPY.md §6.3. */
export const commitments = [
  {
    heading: 'The full ingredient list, in INCI order.',
    body: 'Not a highlight reel. Order matters, because it tells you roughly how much of each thing is in there. It costs us the ability to hide a thin formula behind four impressive names.',
  },
  {
    heading: 'Claims we can defend, and no others.',
    body: 'The cartons say "helps brighten" and "radiant-looking" because that is what these ingredients do. They will never say "whitens in seven days". It costs us the customers who want that sentence, and there are a lot of them.',
  },
  {
    heading: 'A batch code and both dates on every carton.',
    body: 'Manufacture and expiry, printed on the back, per run. It costs us the option of holding stock past its window and quietly selling it anyway.',
  },
  {
    heading: 'Nothing tested on animals, at any stage.',
    body: 'Not by us and not by anyone we buy from. It costs us three suppliers who could not confirm it in writing.',
  },
];

/** Shop §2.5. Copy from design/COPY.md §4.5. */
export const shopNumbers = [
  {
    heading: 'A bar is 135 g, and that is a big bar.',
    body: 'At one wash a day most people finish one in seven to nine weeks. Two washes a day brings that closer to four.',
  },
  {
    heading: 'Cost per wash, not cost per bar.',
    body: 'Coco Kojic Gluta comes to about ₱4.50 a wash. Salicylic is about ₱4.00. The serum is about ₱9.00 a day at four drops.',
  },
  {
    heading: 'The cleanser is 100 mL of gel, not foam.',
    body: 'A pea-sized amount is enough for a full face. Most people get about ten weeks from a bottle.',
  },
  {
    heading: 'A set ships in one box.',
    body: 'You pay one shipping rate, not five, and the set price is already lower than buying the items apart.',
  },
];
