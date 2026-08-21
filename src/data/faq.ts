import type { QuestionAnswer } from '../types';

/** Home §1.9, the three objections. Copy from design/COPY.md §3.9. */
export const homeObjections: QuestionAnswer[] = [
  {
    question: 'It costs more than the bar I buy now.',
    answer:
      'It does. A ₱249 bar of Coco Kojic Gluta lasts most people seven to nine weeks at one wash a day, which works out to about ₱4.50 a wash. What you are paying for is the ratio, not the size. Kojic acid and glutathione are expensive and the amount in a bar is the whole difference between a result and a scent.',
  },
  {
    question: 'Will it work on my skin?',
    answer:
      'We cannot promise that, and any brand that does is guessing. What we can tell you is who each product is for, and that line is printed on the front of the carton before you spend anything. Patch test on your inner arm for two nights before you use anything on your face. If your skin is reactive, start with Bee Wash and the serum, and add a bar later.',
  },
  {
    question: 'What if it does not work?',
    answer:
      'Send it back within seven days of delivery and we refund the item in full. If it arrived damaged or we sent the wrong thing, send us a photo within 48 hours and we replace it and cover the courier. That is written out in full on the Shipping and Returns page.',
  },
];

/** The Theory §5.7. Copy from design/COPY.md §7.7. */
export const theoryQuestions: QuestionAnswer[] = [
  {
    question: 'How long before actives show anything?',
    answer:
      'Six to ten weeks for the brightening bars, because they work on skin as it renews. Two to four weeks for Salicylic on oil. Niacinamide on oil is often the fastest, at around three weeks.',
  },
  {
    question: 'Do I really need sunscreen with these?',
    answer:
      'With the brightening bars, yes. Kojic acid and ascorbic acid both bring up newer skin, and new skin pigments faster in the sun. Without sun protection you spend eight weeks fading spots and one weekend putting them back.',
  },
  {
    question: 'Can I use these while pregnant or breastfeeding?',
    answer:
      'Salicylic acid is the one usually questioned. We are not qualified to advise on this and we will not pretend otherwise. Ask your doctor, and show them the ingredient list, which is printed in full on every carton.',
  },
  {
    question: 'Can I combine these with a retinol?',
    answer:
      'Many people use niacinamide alongside retinol without trouble. Stacking a retinol with the Salicylic bar is where irritation usually starts. If you are on a prescription retinoid, ask your doctor first.',
  },
  {
    question: 'What if I use two bars at once?',
    answer:
      'Use them at different times of day, never in the same wash. Two actives in one two-minute lather is how people end up with a stinging face and no idea which product caused it.',
  },
];

/** Contact §6.3. Copy from design/COPY.md §8.4. */
export const contactQuestions: QuestionAnswer[] = [
  {
    question: 'Where is my order?',
    answer:
      'You get a tracking number by email the moment your parcel is picked up, usually the next working day. If it has been more than two working days since you ordered and no tracking has arrived, then write to us.',
  },
  {
    question: 'How do I return something?',
    answer:
      'Email us within seven days of delivery with your order number and what you want to return. Unopened items are refunded in full. Full conditions are on the Shipping and Returns page.',
  },
  {
    question: 'Is a product in stock?',
    answer:
      'If you can add it to your bag, it is in stock. We take items off the shop the moment a batch runs out rather than taking backorders.',
  },
  {
    question: 'Do you ship outside the Philippines?',
    answer:
      'Not yet. We ship anywhere in the Philippines, including island destinations, through J&T Express and LBC Express.',
  },
];
