import type { ProductSet } from '../types';

/** The two bundles from design/COPY.md §4.4. Prices are final. */
export const productSets: ProductSet[] = [
  {
    slug: 'the-full-theory',
    name: 'The Full Theory',
    contents:
      'All five. Bee Wash, Coco Kojic Gluta, Gluta Soya, Salicylic, and the Niacinamide serum.',
    price: 1499,
    fullPrice: 1635,
    saving: 136,
    includes: [
      'bee-wash',
      'coco-kojic-gluta-soap',
      'gluta-soya-soap',
      'salicylic-soap',
      'niacinamide-serum',
    ],
    image: '/images/products/coco-kojic-gluta-soap.png',
    imageAlt:
      'The Coco Kojic Gluta carton, which stands for the full five-product set of Bee Wash, Coco Kojic Gluta, Gluta Soya, Salicylic and the Niacinamide serum.',
  },
  {
    slug: 'the-bar-set',
    name: 'The Bar Set',
    contents: 'The three bars. Coco Kojic Gluta, Gluta Soya, and Salicylic.',
    price: 629,
    fullPrice: 697,
    saving: 68,
    includes: ['coco-kojic-gluta-soap', 'gluta-soya-soap', 'salicylic-soap'],
    image: '/images/products/salicylic-soap.png',
    imageAlt:
      'The Salicylic carton, which stands for the three-bar set of Coco Kojic Gluta, Gluta Soya and Salicylic.',
  },
];

export function getSet(slug: string): ProductSet | undefined {
  return productSets.find((productSet) => productSet.slug === slug);
}
