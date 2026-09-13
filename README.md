# Skin Theory

The website for **Skin Theory** — skin care with the whole formula on the box.

A static, fully built storefront rather than a mockup: thirteen pages, a product catalogue, a cart
and a checkout flow.

---

## The idea behind the design

The brand already existed, on the product boxes. So the site's look was **pulled out of the box
artwork rather than invented separately** — colours, type feeling, spacing and graphic language all
taken from the printed packaging.

The artwork lives in [`brand/`](brand/) as five product box PDFs plus flat renders of every panel.
Two files hold everything read out of it, so nobody has to guess:

- `brand/BRAND-EXTRACT.md` — colours, fonts, layout rules, image rules, voice
- `brand/PRODUCT-COPY.md` — the exact text of all five products

That is the rule the whole build follows: **if the answer is on the box, take it from the box.**

---

## The products

| Product | What it is |
|---|---|
| Bee Wash | Gentle gel cleanser, 100 mL, honey accent |
| Gluta Soya Soap | Brightening bar |
| Kojic Gluta Soap | Brightening bar, kojic acid |
| Niacinamide Serum | Serum |
| Salicylic Soap | Bar for blemish-prone skin |

---

## Stack

| | |
|---|---|
| Build | [Vite](https://vitejs.dev) 7 |
| UI | React 19, React Router 7 |
| Language | TypeScript 5.9, strict |
| Styling | Tailwind CSS 4 |
| Icons | Phosphor |
| Linting | ESLint 9 with the React Hooks and React Refresh plugins |

No backend. It builds to static files and deploys anywhere that serves them.

---

## Pages

```
HomePage          ShopPage          ProductPage
TheoryPage        AboutPage         ContactPage
CartPage          CheckoutPage      OrderConfirmedPage
ShippingReturnsPage                 PrivacyPage
TermsPage         NotFoundPage
```

---

## Running it

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck, then production build
npm run preview    # serve the production build locally
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

`npm run build` runs `tsc --noEmit` before Vite, so a type error fails the build rather than
shipping.

Environment variables in use are listed in [`ENV-VARS-USED.md`](ENV-VARS-USED.md). Copy
`.env.example` to `.env` and fill it in. **`.env` is gitignored and must stay that way.**

---

## Repo layout

```
src/                 application code, pages and components
brand/               box artwork, plus the extracted brand and copy rules
content/             site copy
design/              design references
public/              static assets
tools/               build and content tooling
reports/             build and audit reports
PRD.md               the product spec the build follows
CLAUDE.md            the working rules for this repo
```

---

## Licence

**None. All rights reserved.**

This is brand work for Skin Theory. The code, the copy and the artwork are not licensed for reuse.
It is published here as a record of the build, not as a template — please do not lift the brand
assets or the product copy.

If you want to reference the technical approach, that is fine. Ask before reusing anything that
carries the brand.
