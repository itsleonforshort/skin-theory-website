import type { ShippingRegion } from '../types';

/** Brand constants from design/COPY.md §1. */
export const site = {
  wordmark: 'SKIN THEORY',
  manufacturerLine: 'Manufactured in the Philippines for SKIN THEORY',
  address: 'Blk 2 Lot 27 Aguho St., Narra Park, Tigatto, Davao City 8000',
  email: 'hello@skintheory.ph',
  mobile: '+63 917 482 6153',
  hours: 'Monday to Saturday, 9:00 to 18:00 Philippine time',
  dti: '5824119',
  claimStrip: ['PARABEN FREE', 'SULFATE FREE', 'CRUELTY FREE'],
  copyright: 'Copyright 2026 Skin Theory. All rights reserved.',
  founder: 'Marianne Quiñones, founder and formulator',
  productionLead: 'Elmer Sadiasa, production lead',
  totalReviews: '1,236',
  averageRating: '4.7 out of 5',
  freeShippingThreshold: 1200,
  maxQuantityPerLine: 12,
} as const;

/** The one label per intent, locked by design/DESIGN-SYSTEM.md §7.1. */
export const cta = {
  shop: 'Shop all five',
  add: 'Add to bag',
  checkout: 'Checkout',
  send: 'Send message',
  view: 'View',
} as const;

/** Risk reducers. They only ever appear directly under a button. */
export const riskReducers = [
  'Free nationwide shipping over ₱1,200',
  'Seven-day returns on unopened items',
  'Ships from Davao City within one working day',
];

export const riskLine =
  'Free nationwide shipping over ₱1,200 · Seven-day returns · Ships from Davao City within one working day';

export const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'The Theory', to: '/the-theory' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const footerRead = [
  { label: 'The Theory', to: '/the-theory' },
  { label: 'About', to: '/about' },
  { label: 'Shipping and Returns', to: '/shipping-and-returns' },
  { label: 'Contact', to: '/contact' },
];

export const footerLegal = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Sale', to: '/terms-of-sale' },
];

/** Region select at checkout. Rates from design/COPY.md §9.2 and §10. */
export const shippingRegions: ShippingRegion[] = [
  { id: 'davao-city', label: 'Davao City', rate: 79, days: '1 to 2 working days' },
  { id: 'mindanao', label: 'Rest of Mindanao', rate: 129, days: '2 to 4 working days' },
  { id: 'visayas', label: 'Visayas', rate: 149, days: '3 to 5 working days' },
  {
    id: 'luzon',
    label: 'Luzon including Metro Manila',
    rate: 169,
    days: '3 to 6 working days',
  },
];

export const paymentMethods = [
  {
    id: 'gcash',
    label: 'GCash',
    line: 'Pay to the number we send with your order confirmation. We dispatch once it clears, usually within the hour during shop hours.',
  },
  {
    id: 'maya',
    label: 'Maya',
    line: 'Same as GCash. The account details arrive with your confirmation email.',
  },
  {
    id: 'bank-transfer',
    label: 'Bank transfer',
    line: 'BPI or BDO. Details arrive with your confirmation. Please send the reference number back to us so we can match it to your order.',
  },
  {
    id: 'card',
    label: 'Card',
    line: 'Visa and Mastercard, through our payment provider. Your card details are entered on their page and are never stored on this site.',
  },
  {
    id: 'cash-on-delivery',
    label: 'Cash on delivery',
    line: 'Pay the courier when the parcel arrives. Available anywhere we ship, with no extra fee. Please have the exact amount ready.',
  },
];

export const contactSubjects = [
  'An order I placed',
  'A product question',
  'A return or a replacement',
  'Wholesale or stocking Skin Theory',
];

/** Meta titles and descriptions from design/COPY.md §1.1. */
export const meta = {
  home: {
    title: 'Skin Theory | Skin care with the whole formula on the box',
    description:
      'Five skin care products made in Davao City. Full ingredient lists printed in full, hedged claims, nationwide shipping across the Philippines.',
  },
  shop: {
    title: 'Shop all five | Skin Theory',
    description:
      'Coco Kojic Gluta, Gluta Soya, Salicylic, Bee Wash and the Niacinamide serum. Prices in pesos, free shipping over ₱1,200.',
  },
  theory: {
    title: 'The Theory | What is in Skin Theory and why',
    description:
      'Seven actives, what each one does, who should be careful, and how to layer them.',
  },
  about: {
    title: 'About | Skin Theory',
    description:
      'Made in a small workshop in Tigatto, Davao City, by a formulator who got tired of guessing.',
  },
  contact: {
    title: 'Contact | Skin Theory',
    description: 'Reach the workshop directly. Replies within one working day, Monday to Saturday.',
  },
  cart: {
    title: 'Your bag | Skin Theory',
    description: 'Review your bag before checkout.',
  },
  checkout: {
    title: 'Checkout | Skin Theory',
    description:
      'Delivery across the Philippines. GCash, Maya, bank transfer, card, or cash on delivery.',
  },
  confirmed: {
    title: 'Order confirmed | Skin Theory',
    description: 'Your order is in. A copy is on its way to your email.',
  },
  shipping: {
    title: 'Shipping and Returns | Skin Theory',
    description: 'Rates by region, dispatch times, and the seven-day return window.',
  },
  privacy: {
    title: 'Privacy Policy | Skin Theory',
    description: 'What we collect, why, and your rights under the Data Privacy Act of 2012.',
  },
  terms: {
    title: 'Terms of Sale | Skin Theory',
    description: 'How orders are formed, priced, delivered, and cancelled.',
  },
  notFound: {
    title: 'Page not found | Skin Theory',
    description: 'This page moved or never existed.',
  },
} as const;

/** State strings from design/COPY.md §14. */
export const strings = {
  loading: 'Loading',
  imageFailed: 'Product image unavailable',
  networkError: 'We could not reach the server. Check your connection and try again.',
  requiredGeneric: 'This one is required.',
  addedToBag: 'Added to your bag.',
  removedFromBag: 'Removed from your bag.',
  newsletterAlready: 'That address is already on the list.',
  quantityCap: '12 is the most we can send of one item in a single order.',
  shippingNote: 'Shipping is calculated at checkout, once we know your region.',
  keepShopping: 'Keep shopping',
} as const;
