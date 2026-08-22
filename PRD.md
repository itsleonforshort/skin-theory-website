# PRD — Skin Theory Website

This is the single source of truth. Every agent must read this file before doing any work.

## 1. Product

A skin care brand website for **Skin Theory**.

## 2. Goal

A complete, fully working, fully functional website that is ready to be deployed
for public use. Not a demo. Not a mockup. A real site.

## 3. Brand and look

- Minimalist, but aesthetically pleasing. Calm, clean, premium.
- The branding lives in the **product boxes**. The website look must be pulled
  out of the box design, not invented separately.
- The reference is the box artwork in `brand/`. There are 5 PDFs, one per
  product, plus flat PNG renders of every panel in `brand/reference/`.
- Two files hold everything already read out of that artwork. Read them
  instead of guessing:
  - `brand/BRAND-EXTRACT.md` — colors, fonts, layout rules, image rules, voice
  - `brand/PRODUCT-COPY.md` — the exact text of all 5 products
- Colors, type feeling, spacing, and graphic language on the site must match
  the printed box design in the artwork.

## 3b. The 5 products

1. **Bee Wash** — Gentle Gel Cleanser, 100 mL, honey accent
2. **Coco Kojic Gluta Soap** — Lightening Bar, 135 g, amber accent, 3X badge
3. **Gluta Soya Soap** — Brightening Bar, 135 g, blush and lilac accent
4. **Salicylic Soap** — Clarifying Bar, 135 g, leaf green accent
5. **Niacinamide + Centella + Aloe Barbadensis Serum** — Tone Brightening
   Ampoule, 15 ml, stone grey accent

Ingredients, directions, and precautions are copied word for word from
`brand/PRODUCT-COPY.md`. Only prices and marketing copy are invented.

## 4. Product images — strict rule

- Every product image on the site must show an **assembled box** (a 3D box that
  looks like a real product on a shelf), not a flat print sheet.
- The graphic print on that assembled box must match its box artwork exactly:
  same wordmark position, same product name, same accent artwork, same badges.
  Soap boxes are wide and flat, Bee Wash is a tall narrow carton, the serum is a
  small slim carton. Keep the real proportions.
- Product images live in `public/images/products/`.

## 5. Content rules

- Prices, product sizes, review counts, and similar numbers are **invented and
  final**. Pick real-looking values and commit to them.
- **No placeholders anywhere.** No `[brackets]`, no "Lorem ipsum", no
  "Coming soon", no "TODO", no "Your text here".
- Every product needs a written description: what it is, what it does, who it
  is for, how to use it, and key ingredients.

## 6. Conversion requirement

The site must follow proven rules for how a website hooks an audience, keeps
them on the page, makes them relate, and finally converts them. See the
`web-designer` agent file for the full checklist.

## 7. Tech stack (decision, not a suggestion)

- Vite + React + TypeScript
- Tailwind CSS
- React Router for pages
- Builds to plain static files, deployable to Netlify or Vercel by drag and drop
- Contact form uses Web3Forms

If any agent wants to change this stack, it must stop and ask the boss first.

## 8. Pages

1. Home
2. Shop (all products)
3. Product detail (one per product)
4. About / brand story
5. Ingredients or "The Theory" (science / philosophy page)
6. Contact
7. Cart and checkout flow (client side cart, Web3Forms or Stripe hand-off)
8. Legal: Privacy, Terms, Shipping and Returns

## 9. Must work, not just look right

- Fully responsive: phone, tablet, laptop, large desktop
- Keyboard accessible, visible focus rings, real alt text
- Cart adds, updates, removes, and remembers items on refresh
- Contact form actually sends
- No console errors, no broken links, no broken images
- Lighthouse: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+

## 10. Owner input slots

Anything that needs a key or a personal value from the owner must be a clearly
labelled field in `.env.example` plus one page in `SETUP.md`. The owner should
only ever have to fill in boxes. See the `input-slot-finder` agent file.

## 11. Definition of done

The `project-boss` agent declares done only when every item in sections 3 to 10
is satisfied and the `qa-tester` agent reports zero open bugs.

---

## 12. Model photography (added after round 1 started)

The site must carry real photographs of women models, not illustrations and not
empty space. The owner's direction: fair-skinned models with clear, healthy skin
and faces, photographed properly.

Placement is deliberate, never random. Three kinds of shot must all appear:

- some models **using the product itself** (the bare soap bar, the gel lather,
  the serum dropper) — not the box
- some models **holding the box**, with the print readable
- some models **showing skin and face only**, with no product in frame

The full plan is `design/MODEL-SHOT-LIST.md`: 18 slots, each tied to one exact
page section, with the shot type, framing, and what is happening in it.

Rules:
- Never two model photos in a row.
- The assembled box render always comes first in a product gallery. Model shots
  support it, they never replace it.
- Every model photo has copy beside it. A photo with no words is decoration.
- If a photo is missing, that section falls back to a finished type-only layout.
  It must never show a grey box or the words "photo here".

## 13. Testimonials (added after round 1 started)

### 13a. Product page testimonials — the customer voice

**50 to 100 per product**, so 250 to 500 in total across the 5 products.

They must read like real Filipino e-commerce reviews, the kind people actually
leave on Shopee, Lazada, and TikTok Shop. Not marketing copy. Not demo text.

- **Language mix**: mostly **Tagalog and Taglish**, then English, then Bisaya,
  Ilocano, and some Muslim Filipino voices. Mixed, the way real comment sections
  are mixed.
- **Sentence structure must be how people actually type.** Run-on sentences,
  missing commas, "po" and "opo", "sana", "grabe", "ang ganda", repeated letters
  for emphasis, all-caps bursts, emoji used the way real buyers use them.
- **Length varies**: many medium, a good number long, a few short. Not uniform.
- **Names must be structured the way real buyers name themselves**: full proper
  names, first name plus initial, nicknames, shortcuts, handle-style names,
  partly masked names, "Mommy" and "Ate" prefixes.
- Each testimonial must be **tied to the real ingredients and claims of that
  specific product**, hedged the way the boxes hedge them. Never a cure claim.
- Include realistic detail: how many weeks of use, skin type, what they noticed,
  delivery and packaging remarks, repeat-order mentions.
- Ratings vary. Mostly 5 and 4 stars, with a believable few at 3.

### 13b. Site-wide testimonials — the professional voice

The testimonials used **outside the product pages** (the Home proof section, the
Shop page, and anywhere else) are a **separate, professionally written set**.
Calm, edited, clean English, in the brand's clinical tone. Short. They read like
pull quotes in a magazine, not like a comment section.

These two sets must never be mixed or reused across each other.
