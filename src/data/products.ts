import type { Product } from '../types';

/**
 * The five real products.
 *
 * Everything marked WORD FOR WORD below is copied from brand/PRODUCT-COPY.md,
 * which was read off the printed cartons. It is never reworded, shortened, or
 * summarised. Prices, ratings, review counts and marketing copy come from
 * design/COPY.md and are final.
 */
export const products: Product[] = [
  {
    slug: 'bee-wash',
    name: 'BEE WASH',
    shortName: 'Bee Wash',
    type: 'Gentle Gel Cleanser',
    benefitLine: 'CLEANSE • SOOTHE • REFRESH',
    audienceLine: 'FOR ALL SKIN TYPES',
    size: '100 mL | 3.38 fl oz',
    price: 389,
    rating: 4.8,
    reviewCount: 174,
    accent: 'honey',
    category: 'cleanser',
    shortDescription:
      'A gel cleanser that takes the day off without leaving your face tight. Honey extract and witch hazel extract do the work. It is the one product in the line that suits every skin type, so it is where most people start.',
    // WORD FOR WORD
    description:
      'A gentle daily cleanser with Honey Extract and Witch Hazel Extract that helps remove impurities and dead skin cells while leaving skin feeling smooth, fresh, and balanced.',
    badges: [
      {
        name: 'All-in-one solution',
        line: 'One step for cleansing, soothing and refreshing',
        icon: 'hand-soap',
      },
      {
        name: 'Moisturizing honey',
        line: 'Honey extract helps skin feel smooth and balanced',
        icon: 'drop',
      },
      {
        name: 'Witch hazel',
        line: 'Hamamelis virginiana extract helps refresh the skin',
        icon: 'leaf',
      },
    ],
    // WORD FOR WORD
    direction:
      'Apply enough amount on the wet face. Use day and night for the best result. Rinse thoroughly with water.',
    howOften: 'Twice a day, morning and night.',
    // WORD FOR WORD
    ingredients:
      'Water, Sodium Linear Alcohol, Cocamidopropyl Betaine, Cocodiethanolamide, Honey Extract, Propylene Glycol, Caprylyl Glycol (and) Propanediol (and) Glyceryl Caprylate, Hamamelis Virginiana Witch Hazel Extract, Sodium Benzoate, Citric Acid, Disodium EDTA',
    // WORD FOR WORD
    precaution:
      'Use only as directed, keep out of reach of children, and store at room temperature. For external use only.',
    image: '/images/products/bee-wash.png',
    imageAlt:
      'A Bee Wash carton standing upright, tall and narrow, with black type on white and a soft honey wash rising from the bottom of the panel.',
    starDistribution: { five: 149, four: 21, three: 3, two: 1, one: 0 },
    pairsWith: ['niacinamide-serum', 'gluta-soya-soap'],
    questions: [
      {
        question: 'Can I use it if my skin is sensitive?',
        answer:
          'It is formulated for all skin types and it is sulfate free, which is the usual reason a cleanser stings. Patch test on your inner arm for two nights first if your skin reacts easily.',
      },
      {
        question: 'Will it take off sunscreen?',
        answer:
          'It removes daily sunscreen well. For heavy waterproof sunscreen or full makeup, use an oil or micellar step first, then Bee Wash.',
      },
      {
        question: 'Is it safe around the eyes?',
        answer: 'Keep it off the eye area. If it gets in, rinse with water.',
      },
    ],
    metaTitle: 'Bee Wash Gentle Gel Cleanser, 100 mL | Skin Theory',
    metaDescription:
      'A gentle daily gel cleanser with honey extract and witch hazel extract. For all skin types.',
    released: 2024,
  },
  {
    slug: 'coco-kojic-gluta-soap',
    name: 'COCO KOJIC GLUTA',
    shortName: 'Coco Kojic Gluta',
    type: 'Lightening Bar',
    benefitLine: 'LIGHTEN + RENEW + GLOW',
    audienceLine: 'FOR AN EVEN AND LIGHTER SKIN TONE',
    size: '135 G | 4.76 OZ',
    price: 249,
    rating: 4.8,
    reviewCount: 412,
    accent: 'amber',
    category: 'bar',
    seal: '3X RADIANCE BOOST',
    shortDescription:
      'The bar people buy for dark spots and uneven tone. Four actives in a coconut oil base, worked into a thick lather and left on the skin for two minutes so they have time to do something. It is the best seller in the line by a wide margin.',
    // WORD FOR WORD
    description:
      'Powered by Papaya Oil, Ascorbic Acid, Kojic Acid, and Glutathione to gently exfoliate, brighten uneven skin tone, and improve the appearance of dark spots, blemishes, and signs of aging. Helps reveal smoother, clearer, and more radiant-looking skin while supporting a healthy complexion.',
    badges: [
      {
        name: 'Papaya Oil',
        line: 'Gentle exfoliation for smoother skin',
        icon: 'orange-slice',
      },
      { name: 'Vitamin C', line: 'Brightens and protects skin', icon: 'sun' },
      {
        name: 'Kojic Acid',
        line: 'Helps reduce dark spots and uneven tone',
        icon: 'sparkle',
      },
      {
        name: 'Glutathione',
        line: 'Brightens and supports skin radiance',
        icon: 'shield-check',
      },
    ],
    // WORD FOR WORD
    direction:
      "Its creamy micro bubble formula helps the active ingredient penetrate the skin's surface deeply. Wet skin and massage the bar directly on the skin to create a creamy, thick lather. Leave on for 2 minutes and rinse.",
    howOften:
      'Once a day at night to start. Move to twice a day only if your skin stays comfortable after two weeks. Use sunscreen in the morning.',
    // WORD FOR WORD
    ingredients:
      'Water, Cocos Nucifera (Coconut) Oil, Sodium Hydroxide, Ricinus Communis Seed Oil, Carica Papaya Seed Oil, Glycerin, Kojic Acid, Glutathione, Ascorbic Acid, Citric Acid, Fragrance',
    // WORD FOR WORD
    precaution:
      'For external use only. Avoid contact with eyes. Store in a cool dry place not exceeding 25°C. Avoid direct sunlight. Keep out of reach of children.',
    image: '/images/products/coco-kojic-gluta-soap.png',
    imageAlt:
      'A Coco Kojic Gluta soap carton standing upright, wide and flat, white type panel on the left and a yellow watercolor wash with a palm frond shadow on the right, with a gold 3X radiance boost seal.',
    starDistribution: { five: 341, four: 54, three: 12, two: 4, one: 1 },
    pairsWith: ['bee-wash', 'niacinamide-serum'],
    questions: [
      {
        question: 'How long before I see anything?',
        answer:
          'Most reviews here mention a change between week six and week ten. Kojic acid works on new skin as it surfaces, so it cannot be faster than your own skin cycle.',
      },
      {
        question: 'Do I have to leave it on for two minutes?',
        answer:
          'Yes, if you want the actives to matter. Rinsing it straight off makes it an ordinary soap. Lather it, leave it, rinse.',
      },
      {
        question: 'Can I use it on my body?',
        answer:
          'Yes. Underarms, knees, elbows and the neck are the areas buyers mention most. Keep it away from broken skin.',
      },
    ],
    metaTitle: 'Coco Kojic Gluta Lightening Bar, 135 g | Skin Theory',
    metaDescription:
      'Papaya oil, ascorbic acid, kojic acid and glutathione in a coconut oil bar. Helps brighten uneven skin tone.',
    released: 2023,
  },
  {
    slug: 'gluta-soya-soap',
    name: 'GLUTA SOYA',
    shortName: 'Gluta Soya',
    type: 'Brightening Bar',
    benefitLine: 'BRIGHTEN + PROTECT',
    audienceLine: 'FOR GENTLE BRIGHTENING AND RADIANT-LOOKING COMPLEXION',
    size: '135 G | 4.76 OZ',
    price: 229,
    rating: 4.7,
    reviewCount: 236,
    accent: 'blush',
    category: 'bar',
    shortDescription:
      'The gentler bar. Two actives instead of four, in a soybean and coconut oil base, for skin that looks dull rather than spotted. If Coco Kojic Gluta was too much for you, this is the one to move to.',
    // WORD FOR WORD
    description:
      'Formulated with Glutathione and Ascorbic Acid to help brighten dull-looking skin, improve the appearance of uneven skin tone, and maintain a fresh, healthy-looking glow. Its gentle cleansing formula helps remove impurities while leaving the skin feeling soft, smooth, and nourished. With regular use, it helps reveal a more radiant and refreshed complexion.',
    badges: [
      {
        name: 'Glutathione',
        line: 'Brightens and supports skin radiance',
        icon: 'shield-check',
      },
      { name: 'Vitamin C', line: 'Brightens and protects skin', icon: 'sun' },
    ],
    // WORD FOR WORD
    direction:
      "Its creamy micro bubble formula helps the active ingredient penetrate the skin's surface deeply. Wet skin and massage the bar directly on the skin to create a creamy, thick lather. Leave on for 2 minutes and rinse.",
    howOften:
      'Once or twice a day. This is the bar most people can use morning and night from the start. Use sunscreen in the morning.',
    // WORD FOR WORD
    ingredients:
      'Water, Cocos Nucifera (Coconut Oil), Sodium Hydroxide, Glycerin, Titanium Dioxide (CI 77891), Glycine Soja (Soybean) Powder, Sodium Lactate, Carica Papaya Seed Oil, Ricinus Communis Castor Seed Oil, Citric Acid, Propylene Glycol, Glutathione, Ascorbic Acid, Cocamide Diethanolamide, Sodium Silicate, Fragrance',
    // WORD FOR WORD
    precaution:
      'For external use only. Avoid contact with eyes. Store in a cool dry place not exceeding 25°C. Avoid direct sunlight. Keep out of reach of children.',
    image: '/images/products/gluta-soya-soap.png',
    imageAlt:
      'A Gluta Soya soap carton standing upright, wide and flat, white type panel on the left and layered peach and lilac watercolor dunes on the right.',
    starDistribution: { five: 178, four: 44, three: 10, two: 3, one: 1 },
    pairsWith: ['bee-wash', 'coco-kojic-gluta-soap'],
    questions: [
      {
        question: 'How is this different from Coco Kojic Gluta?',
        answer:
          'Two actives instead of four, and no kojic acid. It is aimed at dullness rather than dark spots, and it is the gentler of the two by a clear margin.',
      },
      {
        question: 'Can I use both bars?',
        answer:
          'Yes, and some buyers do, one in the morning and one at night. Do not use them in the same wash.',
      },
      {
        question: 'Does the soy matter if I am allergic to soy?',
        answer:
          'Glycine Soja (Soybean) Powder is in the formula. If you have a soy allergy, choose Salicylic or Coco Kojic Gluta instead.',
      },
    ],
    metaTitle: 'Gluta Soya Brightening Bar, 135 g | Skin Theory',
    metaDescription:
      'Glutathione and ascorbic acid in a gentle soybean bar. Helps brighten dull-looking skin.',
    released: 2023,
  },
  {
    slug: 'salicylic-soap',
    name: 'SALICYLIC',
    shortName: 'Salicylic',
    type: 'Clarifying Bar',
    benefitLine: 'OIL-FREE + REVIVE + CLEAN',
    audienceLine: 'FOR FLAWLESS AND REFRESHED SKIN',
    size: '135 G | 4.76 OZ',
    price: 219,
    rating: 4.6,
    reviewCount: 318,
    accent: 'leaf',
    category: 'bar',
    shortDescription:
      'For oily and acne-prone skin. Salicylic acid gets into the pore rather than sitting on top of it, which is why it helps with blocked pores and the breakouts that follow. The least expensive bar in the line, and the one most people repurchase fastest.',
    // WORD FOR WORD
    description:
      'Helps cleanse and refresh acne-prone skin by removing excess oil and unclogging blocked pores. Formulated with Salicylic Acid to help reduce breakouts while providing deep cleansing through a creamy micro-bubble formula. Leaves skin feeling smoother, cleaner, and revitalized.',
    badges: [
      {
        name: 'Oil-free',
        line: 'Helps remove excess oil without stripping the skin',
        icon: 'wind',
      },
      {
        name: 'Revive',
        line: 'Helps unclog blocked pores and reduce breakouts',
        icon: 'plant',
      },
      {
        name: 'Clean',
        line: 'A creamy micro-bubble lather for a deep cleanse',
        icon: 'hand-soap',
      },
    ],
    // WORD FOR WORD
    direction:
      "Its creamy micro bubble formula helps the active ingredient deep penetrate the skin's surface. Wet skin and massage the bar directly on the skin to create a creamy, thick lather. Leave on for 2 minutes and rinse.",
    howOften:
      'Once a day at night for the first two weeks. If your skin is comfortable, move to twice a day. Use sunscreen in the morning.',
    // WORD FOR WORD
    ingredients:
      'Sodium Palm Kernelate, Water, Sodium Hydroxide Solution, Sodium Silicate, Glycerin, Propylene Glycol, Sodium Lactate, Carica Papaya Seed Oil, Salicylic Acid, CI 13105 (Yellow) and CI 42501 (Blue), Fragrance',
    // WORD FOR WORD
    precaution:
      'For external use only. Avoid contact with eyes. Should contact occur, flush thoroughly with water. Discontinue use if signs of irritation appear. Keep out of reach of children. If ingested, seek medical help immediately.',
    // WORD FOR WORD
    storage: 'Store in a cool dry place not exceeding 25°C. Avoid direct sunlight.',
    image: '/images/products/salicylic-soap.png',
    imageAlt:
      'A Salicylic soap carton standing upright, wide and flat, white type panel on the left with the product name in dark green, and translucent overlapping green leaves on the right.',
    starDistribution: { five: 218, four: 71, three: 20, two: 6, one: 3 },
    pairsWith: ['bee-wash', 'niacinamide-serum'],
    questions: [
      {
        question: 'Why did my skin get worse in week two?',
        answer:
          'Some people see more breakouts before fewer, as blocked pores clear. If it is still worse at week four, stop and go back to Bee Wash alone.',
      },
      {
        question: 'Can I use it with the serum?',
        answer:
          'Yes. Wash with the bar, rinse, dry, then apply the serum. Niacinamide sits well with salicylic acid.',
      },
      {
        question: 'Is it only for the face?',
        answer:
          'No. Back, shoulders and chest are common uses. Avoid broken or freshly shaved skin.',
      },
    ],
    metaTitle: 'Salicylic Clarifying Bar, 135 g | Skin Theory',
    metaDescription:
      'Salicylic acid in a creamy micro-bubble bar. Helps cleanse and refresh acne-prone skin.',
    released: 2024,
  },
  {
    slug: 'niacinamide-serum',
    name: 'NIACINAMIDE + CENTELLA + ALOE BARBADENSIS',
    shortName: 'Niacinamide Serum',
    type: 'Tone Brightening Ampoule',
    benefitLine: 'OIL CONTROL · BRIGHTEN & GLOW',
    audienceLine: 'FOR OILY AND UNEVEN-LOOKING SKIN',
    size: '15 ml',
    price: 549,
    rating: 4.7,
    reviewCount: 96,
    accent: 'stone',
    category: 'serum',
    shortDescription:
      'The only leave-on product in the line, and the most minimal carton we print. Niacinamide for oil and tone, centella asiatica to calm, aloe barbadensis to settle the skin down. A few drops morning and night on top of whatever bar you are using.',
    // WORD FOR WORD
    description:
      'Powered by Niacinamide, Centella Asiatica, and Aloe Barbadensis Extract to help control oil, brighten the complexion, and soothe skin for a smoother, healthier glow.',
    badges: [
      {
        name: 'Balancing niacinamide',
        line: 'Helps control oil and even out the look of tone',
        icon: 'drop',
      },
      {
        name: 'Calming',
        line: 'Centella asiatica and aloe barbadensis help soothe the skin',
        icon: 'flower',
      },
    ],
    // WORD FOR WORD
    direction:
      'Apply a few drops to face in the AM and PM as part of your skin regimen. Avoid use around eyes. Use sun protection in the AM. Discontinue use if irritation occurs. Use only as directed on unbroken skin.',
    howOften: 'Twice a day, on clean dry skin, before any moisturiser.',
    // WORD FOR WORD
    ingredients:
      'Water, Denatured Alcohol, Niacinamide, Centella Asiatica Leaf Extract, Aloe Barbadensis Leaf Extract, Sodium Ascorbyl Phosphate, Arctostaphylos Uva-Ursi Leaf Extract, Carboxymethyl cellulose, Disodium EDTA, Caprylyl Glycol, Fragrance',
    // WORD FOR WORD
    precaution:
      'For external use only. Store in a cool dry place not exceeding 25°C. Avoid direct sunlight. Keep out of reach of children.',
    image: '/images/products/niacinamide-serum.png',
    imageAlt:
      'A Niacinamide, Centella and Aloe Barbadensis serum carton standing upright, small and slim, with a flat stone grey block above black type on white.',
    starDistribution: { five: 71, four: 20, three: 4, two: 1, one: 0 },
    pairsWith: ['salicylic-soap', 'bee-wash'],
    questions: [
      {
        question: 'How many drops is a few?',
        answer:
          'Three to five for a full face. More than that does not absorb and ends up on your pillow.',
      },
      {
        question: 'Can I use it with vitamin C or retinol?',
        answer:
          'Niacinamide sits fine alongside both for most people. If you already use a prescription retinoid, ask your doctor before adding anything new.',
      },
      {
        question: 'It contains alcohol. Will that dry me out?',
        answer:
          'Denatured alcohol is in the formula and it is what makes the serum absorb this fast. The centella and aloe are there to balance it. If alcohol in skin care has burned you before, patch test for two nights first.',
      },
    ],
    metaTitle: 'Niacinamide + Centella + Aloe Barbadensis Serum, 15 ml | Skin Theory',
    metaDescription:
      'A tone brightening ampoule with niacinamide, centella asiatica and aloe barbadensis. Helps control oil.',
    released: 2025,
  },
];

/** Featured order for the shop grid and the home grid. Best seller first. */
export const featuredOrder = [
  'coco-kojic-gluta-soap',
  'bee-wash',
  'gluta-soya-soap',
  'salicylic-soap',
  'niacinamide-serum',
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProducts(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((product): product is Product => product !== undefined);
}

/** The five in featured order. */
export const featuredProducts = getProducts(featuredOrder);
