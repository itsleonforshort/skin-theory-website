// Shared types for every piece of real content on the site.

/** The five accent families from design/DESIGN-SYSTEM.md §1.4. */
export type AccentFamily = 'honey' | 'amber' | 'blush' | 'leaf' | 'stone';

/** Filter groups used by the shop chips. */
export type ProductCategory = 'cleanser' | 'bar' | 'serum';

/** Which Phosphor icon sits inside an ingredient badge circle. */
export type BadgeIcon =
  | 'leaf'
  | 'orange-slice'
  | 'drop'
  | 'sun'
  | 'sparkle'
  | 'shield-check'
  | 'flower'
  | 'hand-soap'
  | 'wind'
  | 'plant';

export interface IngredientBadge {
  name: string;
  line: string;
  icon: BadgeIcon;
}

export interface StarDistribution {
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface Product {
  /** URL slug and the key used everywhere in the cart and in data joins. */
  slug: string;
  /** The name as the carton prints it, in caps. */
  name: string;
  /** A sentence-case version for prose, links, and the cart. */
  shortName: string;
  /** Lightening Bar, Gentle Gel Cleanser, and so on. */
  type: string;
  benefitLine: string;
  audienceLine: string;
  size: string;
  /** Philippine pesos, whole numbers. */
  price: number;
  rating: number;
  reviewCount: number;
  accent: AccentFamily;
  category: ProductCategory;
  /** Only Coco Kojic Gluta carries a printed seal. */
  seal?: string;
  /** Marketing copy from design/COPY.md. */
  shortDescription: string;
  /** WORD FOR WORD from brand/PRODUCT-COPY.md. */
  description: string;
  badges: IngredientBadge[];
  /** WORD FOR WORD from brand/PRODUCT-COPY.md. */
  direction: string;
  howOften: string;
  /** WORD FOR WORD from brand/PRODUCT-COPY.md. */
  ingredients: string;
  /** WORD FOR WORD from brand/PRODUCT-COPY.md. */
  precaution: string;
  /** WORD FOR WORD. Salicylic is the only carton that prints storage apart. */
  storage?: string;
  image: string;
  imageAlt: string;
  starDistribution: StarDistribution;
  /** Two slugs. Two is a recommendation, four is a shrug. */
  pairsWith: [string, string];
  questions: QuestionAnswer[];
  metaTitle: string;
  metaDescription: string;
  /** The year the product joined the line. */
  released: number;
}

export interface Review {
  id: string;
  productSlug: string;
  quote: string;
  name: string;
  city: string;
  stars: number;
  purchased: string;
}

export interface ProductSet {
  slug: string;
  name: string;
  contents: string;
  price: number;
  fullPrice: number;
  saving: number;
  includes: string[];
  image: string;
  imageAlt: string;
}

/** One line in the bag. Sets and single products share this shape. */
export interface CartLine {
  id: string;
  kind: 'product' | 'set';
  name: string;
  size: string;
  price: number;
  image: string;
  imageAlt: string;
  href: string;
  quantity: number;
}

export interface ShippingRegion {
  id: string;
  label: string;
  rate: number;
  days: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  /** Each entry is one paragraph. */
  paragraphs: string[];
  table?: {
    caption: string;
    head: string[];
    rows: string[][];
  };
}
