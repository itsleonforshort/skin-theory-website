import type { Review } from '../types';

/**
 * Twenty written reviews, four per product, from design/COPY.md.
 * Names, cities and dates are invented and final, as PRD §5 allows.
 */
export const reviews: Review[] = [
  {
    id: 'bee-wash-1',
    productSlug: 'bee-wash',
    quote:
      'My skin used to feel like paper after washing. It does not anymore. That is the whole review.',
    name: 'Andrea Nicolette Yap',
    city: 'Cebu City',
    stars: 5,
    purchased: 'Bought March 2026',
  },
  {
    id: 'bee-wash-2',
    productSlug: 'bee-wash',
    quote:
      'Gel, not foam, so a pea-sized amount goes far. I am seven weeks in and the bottle is about half.',
    name: 'Rhea Marie Tandoc',
    city: 'Iloilo City',
    stars: 5,
    purchased: 'Bought February 2026',
  },
  {
    id: 'bee-wash-3',
    productSlug: 'bee-wash',
    quote:
      'I have combination skin and it is the first cleanser that has not made the dry patches on my cheeks worse.',
    name: 'Camille Ordoñez',
    city: 'Baguio',
    stars: 5,
    purchased: 'Bought April 2026',
  },
  {
    id: 'bee-wash-4',
    productSlug: 'bee-wash',
    quote: 'Fine cleanser. The pump would be better than the flip cap, that is my only note.',
    name: 'Denver Lasquite',
    city: 'Panabo City',
    stars: 4,
    purchased: 'Bought January 2026',
  },

  {
    id: 'coco-kojic-gluta-soap-1',
    productSlug: 'coco-kojic-gluta-soap',
    quote:
      'The dark spots on my jaw are still there. They are lighter, and after eleven weeks that is more than the last four things I tried managed.',
    name: 'Mariel Bandiola',
    city: 'Davao City',
    stars: 5,
    purchased: 'Bought December 2025',
  },
  {
    id: 'coco-kojic-gluta-soap-2',
    productSlug: 'coco-kojic-gluta-soap',
    quote:
      'Two minutes feels long the first week and then it is just part of the shower. My neck and my face finally match.',
    name: 'Krizza Ann Delos Reyes',
    city: 'Quezon City',
    stars: 5,
    purchased: 'Bought January 2026',
  },
  {
    id: 'coco-kojic-gluta-soap-3',
    productSlug: 'coco-kojic-gluta-soap',
    quote:
      'It dried me out at twice a day. Once a day at night is fine and I am still seeing the same change, just slower.',
    name: 'Paolo Villaruz',
    city: 'Makati',
    stars: 4,
    purchased: 'Bought February 2026',
  },
  {
    id: 'coco-kojic-gluta-soap-4',
    productSlug: 'coco-kojic-gluta-soap',
    quote:
      'Bought it for the underarms, not the face. Eight weeks and the difference is real. The smell is faint and clean.',
    name: 'Shaira Mae Guinto',
    city: 'Tagum City',
    stars: 5,
    purchased: 'Bought November 2025',
  },

  {
    id: 'gluta-soya-soap-1',
    productSlug: 'gluta-soya-soap',
    quote:
      'Kojic was too strong for my cheeks. This one I have used morning and night for two months with no dryness at all.',
    name: 'Mikaela Bautista-Cruz',
    city: 'Antipolo',
    stars: 5,
    purchased: 'Bought February 2026',
  },
  {
    id: 'gluta-soya-soap-2',
    productSlug: 'gluta-soya-soap',
    quote: 'Not dramatic. My face just looks less tired in photos, which is what I wanted.',
    name: 'Hazel Joy Mansueto',
    city: 'General Santos',
    stars: 5,
    purchased: 'Bought March 2026',
  },
  {
    id: 'gluta-soya-soap-3',
    productSlug: 'gluta-soya-soap',
    quote:
      'Lathers beautifully and lasts. Wish the scent were unscented, but it fades in a minute.',
    name: 'Nikko Aranas',
    city: 'Bacolod',
    stars: 4,
    purchased: 'Bought January 2026',
  },
  {
    id: 'gluta-soya-soap-4',
    productSlug: 'gluta-soya-soap',
    quote:
      'I keep this one in the shower and the kojic bar by the sink. That combination has worked better for me than either alone.',
    name: 'Krizza Ann Delos Reyes',
    city: 'Quezon City',
    stars: 5,
    purchased: 'Bought December 2025',
  },

  {
    id: 'salicylic-soap-1',
    productSlug: 'salicylic-soap',
    quote:
      'I have oily skin and I stopped needing blotting paper by the third week. The bar lasted me almost two months.',
    name: 'Jomar Sabellano',
    city: 'Cagayan de Oro',
    stars: 5,
    purchased: 'Bought January 2026',
  },
  {
    id: 'salicylic-soap-2',
    productSlug: 'salicylic-soap',
    quote:
      'Week two was worse before it was better. Week five my forehead was clear for the first time since college.',
    name: 'Denver Lasquite',
    city: 'Panabo City',
    stars: 5,
    purchased: 'Bought December 2025',
  },
  {
    id: 'salicylic-soap-3',
    productSlug: 'salicylic-soap',
    quote:
      'Works, but it is drying on my cheeks. I use it on the T-zone only now and that solved it.',
    name: 'Camille Ordoñez',
    city: 'Baguio',
    stars: 4,
    purchased: 'Bought March 2026',
  },
  {
    id: 'salicylic-soap-4',
    productSlug: 'salicylic-soap',
    quote: 'My back and shoulders were the problem, not my face. Six weeks and it is mostly gone.',
    name: 'Nikko Aranas',
    city: 'Bacolod',
    stars: 5,
    purchased: 'Bought November 2025',
  },

  {
    id: 'niacinamide-serum-1',
    productSlug: 'niacinamide-serum',
    quote:
      'Four drops, twice a day. It is week nine and my pores across the nose look smaller. That is the honest extent of it.',
    name: 'Paolo Villaruz',
    city: 'Makati',
    stars: 5,
    purchased: 'Bought December 2025',
  },
  {
    id: 'niacinamide-serum-2',
    productSlug: 'niacinamide-serum',
    quote: 'It is 15 ml, so it is small. It has still lasted me nearly two months at twice a day.',
    name: 'Rhea Marie Tandoc',
    city: 'Iloilo City',
    stars: 4,
    purchased: 'Bought February 2026',
  },
  {
    id: 'niacinamide-serum-3',
    productSlug: 'niacinamide-serum',
    quote:
      'My skin is reactive and this did not sting. That already puts it ahead of the last two serums I bought.',
    name: 'Mikaela Bautista-Cruz',
    city: 'Antipolo',
    stars: 5,
    purchased: 'Bought March 2026',
  },
  {
    id: 'niacinamide-serum-4',
    productSlug: 'niacinamide-serum',
    quote: 'Layers fine over the Salicylic bar. Absorbs in under a minute, no stickiness.',
    name: 'Shaira Mae Guinto',
    city: 'Tagum City',
    stars: 5,
    purchased: 'Bought January 2026',
  },
];

export function getReviews(productSlug: string): Review[] {
  return reviews.filter((review) => review.productSlug === productSlug);
}

/** The three quotes used in the proof row on the home page. */
export const homeProof = [
  { reviewId: 'coco-kojic-gluta-soap-1', productName: 'Coco Kojic Gluta' },
  { reviewId: 'salicylic-soap-1', productName: 'Salicylic' },
  { reviewId: 'bee-wash-1', productName: 'Bee Wash' },
];

export function getReview(id: string): Review | undefined {
  return reviews.find((review) => review.id === id);
}
