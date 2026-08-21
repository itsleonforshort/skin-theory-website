import type { LegalSection } from '../types';

export const lastUpdated = 'Last updated 22 August 2026';

/** Shipping and Returns. Copy from design/COPY.md §10. */
export const shippingSections: LegalSection[] = [
  {
    id: 'where-we-ship-from',
    heading: 'Where we ship from',
    paragraphs: [
      'Every order is packed and dispatched from our workshop at Blk 2 Lot 27 Aguho St., Narra Park, Tigatto, Davao City 8000. We ship anywhere in the Philippines. We do not ship outside the Philippines yet.',
    ],
  },
  {
    id: 'couriers',
    heading: 'Couriers',
    paragraphs: [
      'We use J&T Express and LBC Express. Which one carries your parcel depends on your address; the tracking email tells you which. We cannot let you choose the courier at checkout.',
    ],
  },
  {
    id: 'rates-and-delivery-times',
    heading: 'Rates and delivery times',
    paragraphs: [
      'Rates are per order, not per item, and are calculated from the region you select at checkout.',
      'Island and remote destinations can take two to three working days longer than the bands above. Working days do not include Sundays or Philippine public holidays.',
    ],
    table: {
      caption: 'Shipping rates and delivery times by region',
      head: ['Region', 'Rate', 'Working days after dispatch'],
      rows: [
        ['Davao City', '₱79', '1 to 2'],
        ['Rest of Mindanao', '₱129', '2 to 4'],
        ['Visayas', '₱149', '3 to 5'],
        ['Luzon including Metro Manila', '₱169', '3 to 6'],
      ],
    },
  },
  {
    id: 'free-shipping',
    heading: 'Free shipping',
    paragraphs: [
      'Orders with a subtotal of ₱1,200 or more ship free anywhere in the Philippines. The subtotal is counted before shipping and after any discount.',
    ],
  },
  {
    id: 'dispatch',
    heading: 'Dispatch',
    paragraphs: [
      'Orders placed before 15:00 Philippine time on a working day are handed to the courier the next working day. Orders placed after that, or on a Sunday or a public holiday, go out on the following working day. Orders paid by GCash, Maya, or bank transfer are dispatched once payment clears.',
    ],
  },
  {
    id: 'tracking',
    heading: 'Tracking',
    paragraphs: [
      'Your tracking number is emailed to you when the courier scans the parcel. If two working days have passed since your order and no tracking has arrived, email hello@skintheory.ph with your order number.',
    ],
  },
  {
    id: 'returns',
    heading: 'Returns',
    paragraphs: [
      'You may return any unopened item within seven days of delivery for a full refund of the item price. The carton must be unopened and the seal intact. Email hello@skintheory.ph with your order number and what you are returning, and we will confirm the return address before you send anything.',
      'Return postage is paid by you unless the item was damaged, faulty, or not what you ordered. Original shipping is refunded only when the whole order is returned and the fault was ours.',
      'We cannot accept a return of an opened bar, bottle, or ampoule. This is a hygiene limit on a product applied to skin, and it is the same rule every skin care seller works under.',
    ],
  },
  {
    id: 'damaged-faulty-or-wrong-items',
    heading: 'Damaged, faulty, or wrong items',
    paragraphs: [
      'If your parcel arrives damaged, or we sent the wrong thing, email us within 48 hours of delivery with your order number and photographs of the item and the outer box. We replace it and cover the courier both ways. If the item is out of stock, we refund in full instead.',
    ],
  },
  {
    id: 'refunds',
    heading: 'Refunds',
    paragraphs: [
      'Once we receive and check a return, refunds are issued within five working days.',
      'Your bank or wallet provider may take a few more days to show it.',
    ],
    table: {
      caption: 'Where a refund is sent, by payment method',
      head: ['Paid by', 'Refunded to'],
      rows: [
        ['GCash or Maya', 'The same wallet number'],
        ['Bank transfer', 'The account the payment came from'],
        ['Card', 'The same card, through our payment provider'],
        ['Cash on delivery', 'GCash, Maya, or bank transfer, whichever you prefer'],
      ],
    },
  },
];

/** Privacy Policy. Copy from design/COPY.md §11. */
export const privacySections: LegalSection[] = [
  {
    id: 'who-we-are',
    heading: 'Who we are',
    paragraphs: [
      'Skin Theory is a skin care manufacturer based at Blk 2 Lot 27 Aguho St., Narra Park, Tigatto, Davao City 8000, Philippines, registered with the Department of Trade and Industry under Business Name Registration No. 5824119. We are the personal information controller for the data described here. You can reach our data protection contact at hello@skintheory.ph.',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What we collect',
    paragraphs: [
      'When you place an order: your name, email address, mobile number, delivery address, the items you bought, and the payment method you chose.',
      'When you use the contact form: your name, email address, your message, and the order number if you give one.',
      'When you join the newsletter: your email address only.',
      'When you browse: standard server log data, including your IP address, browser type, and the pages you opened.',
    ],
  },
  {
    id: 'what-we-do-not-collect',
    heading: 'What we do not collect',
    paragraphs: [
      "We never see or store your card number, expiry date, or security code. Card payments happen on our payment provider's page, not on this site.",
    ],
  },
  {
    id: 'why-we-use-it',
    heading: 'Why we use it',
    paragraphs: [
      'To take, pack, and deliver your order. To answer your message. To send the newsletter if you asked for it. To keep the site working and secure. To meet our record-keeping duties under Philippine tax and consumer law.',
    ],
  },
  {
    id: 'your-cart-stays-in-your-browser',
    heading: 'Your cart stays in your browser',
    paragraphs: [
      'Items you add to your bag are stored in your own browser using local storage. We cannot see that data and it never leaves your device until you place the order. Clearing your browser data empties your bag.',
    ],
  },
  {
    id: 'who-we-share-it-with',
    heading: 'Who we share it with',
    paragraphs: [
      'J&T Express and LBC Express receive your name, address, and mobile number so they can deliver the parcel. Our payment provider receives the amount and your contact details so it can process the payment. Our email service sends your receipt and the newsletter. Our web host stores the site and its server logs. We do not sell your data to anyone, for any purpose, ever.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    paragraphs: [
      'This site sets one cookie, which remembers whether you chose the light or dark theme. Your bag uses local storage, not a cookie. We do not run advertising trackers or third-party analytics that follow you to other sites.',
    ],
  },
  {
    id: 'how-long-we-keep-it',
    heading: 'How long we keep it',
    paragraphs: [
      'Order records are kept for ten years, which is the retention period Philippine tax rules require of us. Contact form messages are kept for two years. Newsletter addresses are kept until you unsubscribe. Server logs are kept for 90 days.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    paragraphs: [
      'Under the Data Privacy Act of 2012, Republic Act No. 10173, you have the right to be informed, the right to access your data, the right to correct it, the right to object to how it is used, the right to erasure or blocking, the right to damages, the right to data portability, and the right to complain.',
    ],
  },
  {
    id: 'how-to-use-those-rights',
    heading: 'How to use those rights, and how to complain',
    paragraphs: [
      'Email hello@skintheory.ph and tell us what you want done. We reply within one working day and act within fifteen days. If you are not satisfied with our answer, you may complain to the National Privacy Commission at privacy.gov.ph.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes',
    paragraphs: [
      'If we change this policy we update the date at the top of this page and, when the change is significant, we say so in the newsletter. The version you agreed to at the time of your order is the one that governs that order.',
    ],
  },
];

/** Terms of Sale. Copy from design/COPY.md §12. */
export const termsSections: LegalSection[] = [
  {
    id: 'who-you-are-buying-from',
    heading: 'Who you are buying from',
    paragraphs: [
      'Skin Theory, Blk 2 Lot 27 Aguho St., Narra Park, Tigatto, Davao City 8000, Philippines. Department of Trade and Industry Business Name Registration No. 5824119. Contact: hello@skintheory.ph, +63 917 482 6153.',
    ],
  },
  {
    id: 'how-an-order-is-formed',
    heading: 'How an order is formed',
    paragraphs: [
      'Adding an item to your bag does not reserve it. Your order is an offer to buy. The contract is formed when we email you an order confirmation. If we cannot fulfil an order, for example because a batch sold out between your click and our packing, we tell you and refund you in full within five working days.',
    ],
  },
  {
    id: 'prices',
    heading: 'Prices',
    paragraphs: [
      'All prices are in Philippine pesos and include VAT where it applies. The price charged is the price shown on the product page at the moment you place the order. Shipping is added at checkout and shown as a separate line before you pay. We may change prices at any time, and that change never applies to an order already confirmed.',
    ],
  },
  {
    id: 'payment',
    heading: 'Payment',
    paragraphs: [
      'We accept GCash, Maya, bank transfer to BPI or BDO, Visa and Mastercard through our payment provider, and cash on delivery. Orders paid by wallet or bank transfer are held for 48 hours; if payment has not cleared by then, the order is cancelled and the stock released.',
    ],
  },
  {
    id: 'delivery-and-risk',
    heading: 'Delivery and risk',
    paragraphs: [
      "Delivery times are the courier's estimates and are not guaranteed. Risk in the goods passes to you when the courier hands the parcel to you or to someone at your address who accepts it. If a cash-on-delivery parcel is refused or nobody is available across three delivery attempts, the parcel comes back to us and we may decline future cash-on-delivery orders from that address.",
    ],
  },
  {
    id: 'cancellation',
    heading: 'Cancellation',
    paragraphs: [
      'You can cancel any order in writing before it is dispatched, and we refund in full. Once the parcel is with the courier, the Returns section of our Shipping and Returns page applies instead.',
    ],
  },
  {
    id: 'your-statutory-rights',
    heading: 'Your statutory rights',
    paragraphs: [
      'Nothing in these terms takes away the rights the Consumer Act of the Philippines, Republic Act No. 7394, gives you. If anything here conflicts with that law, the law wins.',
    ],
  },
  {
    id: 'what-our-products-are',
    heading: 'What our products are, and are not',
    paragraphs: [
      'Skin Theory products are cosmetics. They are not medicines and they do not treat, cure, or prevent any disease or skin condition. Our claims are the ones printed on the carton, and they are stated as help rather than as a promise, because results depend on your skin, your routine, and how consistent you are. If you have a diagnosed skin condition, or you are pregnant or breastfeeding, speak to a doctor before starting anything new. Stop using a product if irritation appears.',
    ],
  },
  {
    id: 'liability',
    heading: 'Liability',
    paragraphs: [
      'We are responsible for loss you suffer that is a foreseeable result of us breaking these terms or failing to use reasonable care. We are not liable for loss of profit, loss of business, or loss you could not reasonably have been expected to suffer. Nothing here limits our liability for death or personal injury caused by our negligence, or for fraud.',
    ],
  },
  {
    id: 'governing-law',
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of the Republic of the Philippines. Any dispute is brought before the proper courts of Davao City.',
    ],
  },
];
