# Skin Theory - Design System

Every value in this file traces back to `brand/BRAND-EXTRACT.md` and the panel
renders in `brand/reference/`. Where a value is derived rather than printed, the
derivation is written next to it. Nothing here is taste. Agent 3 builds from
these numbers exactly.

**Design read:** a 5-product direct-to-consumer skin care shop for Filipino
buyers, in a calm clinical printed-packaging language, built on native Tailwind
tokens with Jost and Source Sans 3, reusing the box split composition.

**Dials:** `DESIGN_VARIANCE 6` · `MOTION_INTENSITY 4` · `VISUAL_DENSITY 2`.
Density is 2 because roughly half of every box front is empty white
(`BRAND-EXTRACT` §3). Motion is 4 because the brand voice is "never shout"
(§7): fades and rises only, nothing looping, nothing bouncing.

---

## 1. Color tokens

### 1.1 Core (site-wide)

| Token | Hex | Source | Used for |
|---|---|---|---|
| `ink` | `#000000` | wordmark, product headings (§3) | wordmark, H1 to H3, primary button fill, focus ring |
| `ink-soft` | `#2A292A` | serum panel text (§3) | all body copy, primary button hover fill |
| `ink-muted` | `#303234` | "GENTLE GEL CLEANSER" (§3) | sub-headings, tracked labels, captions, disabled text |
| `paper` | `#FFFFFF` | the white half of every box (§3) | every page background, text on `ink` |
| `bone` | `#FBF9F6` | 20% tint of Bee Wash lightest honey `#FCE4C0` over `paper` | **only** the warm-white ground behind assembled box renders (§6). Never a page background. |
| `line` | `#D8D8D8` | Gluta Soya key hex (§4) | all hairline rules, table rules, input borders, nav underline |
| `line-strong` | `#909090` | serum key hex (§4) | serum accent rule, input border on focus-within, chart-free dividers that need weight |
| `sand` | `#D2AC81` | product name print color (§3) | **decorative only.** Rules, badge outlines, seal strokes. |
| `gold` | `#A38022` | "3X" badge (§3) | the 3X seal only, at 24px and above |
| `gold-deep` | `#634109` | "PLANT-DERIVED" text (§3) | the PLANT-DERIVED leaf mark and its label |
| `forest` | `#195337` | "SALICYLIC" product name (§3) | the Salicylic product name, in text |

### 1.2 Contrast rulings (measured, not assumed)

These decide what Agent 3 is allowed to set text in. All ratios against
`paper` `#FFFFFF`.

| Token | Ratio | Ruling |
|---|---|---|
| `ink` `#000000` | 21.0:1 | Any size. |
| `ink-soft` `#2A292A` | 15.9:1 | Any size. Body default. |
| `ink-muted` `#303234` | 13.8:1 | Any size. |
| `forest` `#195337` | 8.9:1 | Any size. Safe for the Salicylic name in text. |
| `gold-deep` `#634109` | 9.1:1 | Any size. |
| `gold` `#A38022` | 3.7:1 | **Large text only (24px+).** The 3X seal. Never body. |
| `sand` `#D2AC81` | 2.1:1 | **Never text, at any size.** Rules and strokes only. |

The five accent families are all pale. Rule: **text sitting on an accent fill is
always `ink` `#000000`** (every accent gives 13:1 or better against black).
An accent is never a button background with light text.

### 1.3 Why pure black is used here

The general advice against `#000000` is overridden by the brand. The artwork is
offset print in pure black, and `BRAND-EXTRACT` §3 names `ink` as `#000000`.
Depth comes from the two-step ink ladder instead: `#000000` for the wordmark and
headings, `#2A292A` for body. Do not substitute a zinc or slate grey.

### 1.4 Per-product accent mapping

Each product owns one family. **Never mix two product colors in one section**
(`BRAND-EXTRACT` §4). The site-wide accent stays `ink`; product accents are
scoped to that product's card, its detail page, and its artwork panel.

| Product | Family | `-deep` | `-base` | `-mid` | `-light` | Name color in text | Artwork |
|---|---|---|---|---|---|---|---|
| Bee Wash | Honey | `#FCC078` | `#FCCC90` | `#FCD8A8` | `#FCE4C0` | `ink` `#000000` | honey wash rising from the bottom, painted witch hazel sprig |
| Coco Kojic Gluta | Amber | `#FCCC60` | `#FCD86C` | `#FCE49C` | `#FCF0B4` | `ink` `#000000` | yellow watercolor wash, palm-frond shadow, gold 3X seal |
| Gluta Soya | Blush + Lilac | `#F0CCB4` | `#F0D8C0` | `#E4D8E4` | `#D8D8D8` | `ink` `#000000` | layered watercolor dunes, peach into lilac |
| Salicylic | Leaf green | `#84A854` | `#90B460` | `#B4CC84` | `#C0D890` | `forest` `#195337` | translucent overlapping leaves |
| Niacinamide Serum | Stone grey | `#909090` | `#D6D6D6` | `#D6D6D6` | `#D8D8D8` | `ink-soft` `#2A292A` | flat grey block, no illustration |

**Name colors:** the boxes print Coco Kojic Gluta and Gluta Soya in `sand`
`#D2AC81`. On screen that fails contrast at 2.1:1, so on the web those two names
are set in `ink` and `sand` moves to the short rule above the benefit line. This
is the one place the web deliberately departs from the print, and it departs for
legibility only.

**Accent slots per product page:** the short rule, the artwork panel fill, the
ingredient badge stroke, the section divider on that page, the selected-state
underline. That is the whole list.

### 1.5 Dark mode

The brand is a white brand. Half of every box is empty white and `BRAND-EXTRACT`
§3 calls that the loudest part of the identity. So the site is **light by
default and does not follow `prefers-color-scheme` automatically**. A manual
toggle sits in the footer, off by default, for readers who need it.

When dark is on, the ink ladder inverts and the accents are unchanged, because
every accent already reads against black:

| Token | Light | Dark |
|---|---|---|
| `paper` | `#FFFFFF` | `#141414` |
| `bone` | `#FBF9F6` | `#1C1B1A` |
| `ink` | `#000000` | `#FFFFFF` |
| `ink-soft` | `#2A292A` | `#E8E8E8` |
| `ink-muted` | `#303234` | `#B4B4B4` |
| `line` | `#D8D8D8` | `#333333` |
| `line-strong` | `#909090` | `#5A5A5A` |
| `forest` | `#195337` | `#90B460` (Salicylic mid, for contrast) |
| `gold` | `#A38022` | `#D2AC81` |
| `gold-deep` | `#634109` | `#D2AC81` |

Accent `-deep` through `-light` values do not change. Artwork panels do not
change. Product photography sits on `bone`, which in dark becomes `#1C1B1A`, so
the assembled box renders need a transparent-background PNG.

`#B4B4B4` on `#141414` is 8.4:1. `#E8E8E8` on `#141414` is 14.6:1. Both pass.

---

## 2. Typography

### 2.1 Families

| Role | Web font | Weights loaded | Google Fonts |
|---|---|---|---|
| Wordmark, headings, product names, buttons, tracked labels | **Jost** | 300, 400, 500 | yes |
| Body, ingredient lists, forms, legal | **Source Sans 3** | 400, 600 | yes |
| The "3X RADIANCE BOOST" seal, and nothing else | `Georgia, 'Times New Roman', serif` | 700 | system stack |

Jost stands in for Avenir LT Pro Roman and Canva Sans Bold. Source Sans 3 is
already in the artwork. The serif appears exactly once, on the Kojic seal,
because the print uses Times New Roman MT Bold there (`BRAND-EXTRACT` §2).

Load both from Google Fonts with `display=swap`, preconnect to
`fonts.gstatic.com`, and preload the Jost 400 latin subset. Nothing else.

Jost is never bold and never italic in the wordmark. Site-wide, no italic at all.

### 2.2 Type scale

Root is 16px. Every step is in rem.

| Token | rem | px | Family / weight | Tracking | Line height |
|---|---|---|---|---|---|
| `display-xl` | 4.5rem | 72 | Jost 400 | -0.01em | 1.05 |
| `display-l` | 3.5rem | 56 | Jost 400 | -0.01em | 1.08 |
| `display-m` | 2.5rem | 40 | Jost 400 | 0 | 1.15 |
| `display-s` | 1.875rem | 30 | Jost 400 | 0 | 1.2 |
| `title` | 1.5rem | 24 | Jost 500 | 0.01em | 1.25 |
| `lead` | 1.25rem | 20 | Source Sans 3 400 | 0 | 1.55 |
| `body` | 1.0625rem | 17 | Source Sans 3 400 | 0 | 1.65 |
| `small` | 0.9375rem | 15 | Source Sans 3 400 | 0 | 1.6 |
| `label` | 0.8125rem | 13 | Jost 400 uppercase | 0.18em | 1.4 |
| `micro` | 0.6875rem | 11 | Jost 400 uppercase | 0.28em | 1.5 |

Mobile caps: `display-xl` drops to 2.75rem (44px), `display-l` to 2.25rem
(36px), `display-m` to 1.875rem (30px). Body never drops below 1rem.

### 2.3 The tracking signature

Wide letter spacing is the brand's loudest typographic move
(`BRAND-EXTRACT` §2). It is rationed by role, not sprinkled:

| Use | Tracking |
|---|---|
| The `SKIN THEORY` wordmark | 0.35em |
| Benefit lines (`LIGHTEN + RENEW + GLOW`) | 0.18em |
| Audience lines (`FOR ALL SKIN TYPES`) | 0.18em |
| Claim strip (`PARABEN FREE`) | 0.28em |
| Size lines (`135 G \| 4.76 OZ`) | 0.18em |
| Button labels | 0.16em |
| Nav links | 0.12em |
| Body copy | 0 |

**Tracked caps are data, not decoration.** They are allowed only where the box
uses them: the wordmark, benefit lines, audience lines, claims, sizes, buttons,
nav, and the ingredient badge captions. They are **not** allowed as a small
uppercase label above every section headline. The site carries at most two of
those across the whole home page.

### 2.4 Measure

Body copy is capped at `65ch`. Lead paragraphs at `52ch`. Display headlines at
`18ch` so they break to two lines, never four.

---

## 3. Spacing

Base unit 4px. The scale, in rem:

| Token | rem | px |
|---|---|---|
| `1` | 0.25 | 4 |
| `2` | 0.5 | 8 |
| `3` | 0.75 | 12 |
| `4` | 1 | 16 |
| `6` | 1.5 | 24 |
| `8` | 2 | 32 |
| `12` | 3 | 48 |
| `16` | 4 | 64 |
| `24` | 6 | 96 |
| `32` | 8 | 128 |
| `40` | 10 | 160 |
| `48` | 12 | 192 |

### 3.1 Rhythm rules

- **Section padding:** `py-24` (96px) on mobile, `py-40` (160px) at `lg` and
  above. This is what holds the box's white-space ratio.
- **Gap between a headline and its body:** `space-6` (24px).
- **Gap between the short rule and the line under it:** `space-4` (16px).
- **Page gutter:** `space-6` (24px) mobile, `space-12` (48px) at `md`,
  `space-16` (64px) at `lg`.
- **Container:** `max-width: 1400px`, centered.
- **Type stack gap on a hero or product panel:** wordmark, then a deliberate
  empty gap of `space-32` (128px) minimum, then the name block. The gap is the
  design (`BRAND-EXTRACT` §5).

### 3.2 The split composition

Reused from every box front. Left column white and type-only, left-aligned, with
generous top and bottom margin. Right column full-bleed artwork or an assembled
box render.

- Desktop split: `55 / 45` on the hero (type gets the wider side, as on the
  soap fronts), `50 / 50` on product panels.
- The Bee Wash and serum panels are tall and narrow, so their splits invert to
  `40 / 60` in favour of the image.
- Below `md` (768px) the split stacks: type first, artwork below, full-bleed to
  the viewport edge with no gutter.

---

## 4. Radius

**Zero, everywhere.** The boxes have no rounded corners on any panel, rule,
block, or field. Cards, buttons, inputs, images, drawers, modals and toasts are
all square.

The single exception is the circle, which the artwork uses twice: the outlined
ingredient badges on the back panel, and the gold 3X seal. Those are `9999px`.

| Element | Radius |
|---|---|
| Buttons, inputs, selects, textarea | `0` |
| Cards, panels, images, drawers, modals | `0` |
| Ingredient badges, the 3X seal, quantity steppers, avatars | `9999px` |

There is no in-between value. Do not introduce 4px or 8px anywhere.

---

## 5. Elevation and shadow

The artwork is flat print. It has no shadows. So **the interface has no
shadows.** Separation is done with `line` hairlines and with space.

Three exceptions, all justified:

| Case | Value | Why |
|---|---|---|
| Assembled box renders | `0 24px 48px -12px rgba(42, 41, 42, 0.18)` | `BRAND-EXTRACT` §6 asks for a lightly shadowed standing box |
| Cart drawer and mobile menu | `0 0 0 100vmax rgba(42, 41, 42, 0.45)` scrim, drawer itself flat | the scrim separates layers, the panel stays flat |
| Sticky nav once scrolled | `border-bottom: 1px solid #D8D8D8` | a hairline, not a shadow |

Shadows are tinted with `ink-soft` `#2A292A`, never pure black.

---

## 6. Rules, badges and marks

### 6.1 The short rule

A 40px horizontal line sitting above a benefit line, straight off every box
front. This is the site's only divider ornament.

- Length 40px, thickness 2px, no radius.
- Color: the product's accent `-deep` on a product surface. `line-strong`
  `#909090` on the serum. `ink` on neutral site sections such as About.
- Margin: `space-6` above, `space-4` below.
- On a section header it sits above the headline, flush left with it.

A second variant, the **full rule**, is `1px solid #D8D8D8` at 100% width. It
separates list rows and closes the ingredient badge group. Never both a top and
a bottom rule on the same row.

### 6.2 Ingredient badges

Copied from the Kojic back panel (`Kojic_Gluta_Soap_Karton_p4.png`).

- 64px circle, `1px solid` in the product accent `-deep` (gold `#A38022` on
  Kojic, matching the print).
- One single-line icon inside, 24px, `strokeWidth 1.5`, from Phosphor. Never a
  hand-drawn SVG path.
- Caption to the right of the circle, not under it, matching the print: the
  ingredient name in `label` style in the accent `-deep`, then its short line in
  `small` `ink-soft` beneath.
- Laid out as a row of four at `lg`, two by two at `md`, stacked at mobile.
- A single `2px` accent rule closes the group underneath, as on the box.

### 6.3 The claim strip

`PARABEN FREE | SULFATE FREE | CRUELTY FREE` in `micro` at 0.28em, `ink-muted`,
separated by a thin `line` pipe with `space-6` either side. It sits directly
under the hero, full width, with a `1px` `line` above and below. It is 56px
tall. It is not a logo wall and carries no images.

### 6.4 The PLANT-DERIVED mark

The two-leaf line mark, drawn at 28px in `gold-deep` `#634109`, with
`PLANT-DERIVED` in `micro` beneath it. It sits bottom right of an artwork panel,
exactly where the boxes put it, with `space-8` inset. Only on product surfaces.

### 6.5 The 3X seal

A 96px filled circle in `gold` `#A38022` at 100% on the artwork panel, with
`3X` in the serif at 2rem and `RADIANCE BOOST` in `micro` beneath, both in
`paper`. White on `#A38022` is 5.7:1. It appears on Coco Kojic Gluta only.

---

## 7. Buttons and controls

One radius (0), one type treatment (Jost 400 uppercase, `label` size, 0.16em
tracking), one height ladder.

| Variant | Fill | Text | Border | Height | Padding |
|---|---|---|---|---|---|
| Primary | `ink` `#000000` | `paper` | none | 52px | `0 32px` |
| Secondary | transparent | `ink` | `1px solid #000000` | 52px | `0 32px` |
| Quiet | transparent | `ink-soft` | none, `1px` underline in `line` at 4px offset | auto | 0 |
| Small (quantity, filters) | transparent | `ink-soft` | `1px solid #D8D8D8` | 40px | `0 16px` |
| Disabled | `#D8D8D8` | `ink-muted` | none | 52px | `0 32px` |

- **Hover:** primary fills `ink-soft` `#2A292A`. Secondary inverts to `ink` fill
  with `paper` text. Quiet moves its underline from `line` to `ink`.
- **Active:** `transform: translateY(1px)`. No scale.
- **Focus:** `outline: 2px solid #000000; outline-offset: 2px`. On the primary
  button, add `box-shadow: inset 0 0 0 2px #FFFFFF` so the ring stays visible
  against the black fill. Focus is never removed.
- **Contrast:** `paper` on `ink` is 21:1. `ink` on `paper` is 21:1.
  `ink-muted` on `#D8D8D8` is 9.2:1. All pass.
- **Labels never wrap.** Maximum three words. Buttons are not width-capped.
- **Full-width** only inside the cart drawer, the checkout column, and on mobile
  below 480px.

### 7.1 CTA label lock

One label per intent, used identically everywhere on the site.

| Intent | The one label |
|---|---|
| Go to the shop | `Shop all five` |
| Put a product in the cart | `Add to bag` |
| Pay | `Checkout` |
| Send the contact form | `Send message` |
| Open a product page from a card | `View` |

No other phrasing for these five actions appears anywhere. The nav item is
`Shop`, which is a navigation link, not a button.

### 7.2 Form controls

- Label sits **above** the input, in `label` style, `ink-muted`. Never a
  placeholder used as a label.
- Input: 52px tall, `1px solid #D8D8D8`, `paper` fill, `body` text in `ink-soft`,
  `padding 0 16px`, radius 0.
- Focus: border becomes `ink`, plus the standard 2px outline at 2px offset.
- Placeholder text is `ink-muted` `#303234` at 13.8:1, not a pale grey.
- Helper text `small` `ink-muted` below the field, always present in markup.
- Error text `small` in `#8C2A2A` below the field, with a `2px` left border in
  the same color on the input. `#8C2A2A` on `paper` is 8.0:1. This is the one
  color on the site outside the brand palette, and it exists only for form
  errors, where a colorless error would fail users.
- Required fields are marked with the word `Required` in the helper slot, not an
  asterisk.

---

## 8. Motion

`MOTION_INTENSITY 4`. Fluid CSS transitions and one scroll reveal. Nothing
loops, nothing bounces, nothing hijacks the scroll.

| Rule | Value |
|---|---|
| Standard easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hover and focus transitions | 180ms |
| Panel, drawer and accordion transitions | 320ms |
| Scroll reveal | 520ms |
| Scroll reveal transform | `opacity 0 to 1`, `translateY(12px) to 0` |
| Stagger between siblings | 60ms, capped at 5 items |
| Trigger | `IntersectionObserver`, `threshold 0.2`, fires **once** |

Only `transform` and `opacity` are animated. `window.addEventListener('scroll')`
is banned; use `IntersectionObserver` for reveals and CSS `position: sticky` for
the nav.

Under `prefers-reduced-motion: reduce`, every reveal renders at its final state
immediately and all transition durations drop to `0ms`. Hover color changes may
stay.

Banned outright, because the brand does not shout: parallax, marquees, counters
that tick up, image carousels that advance on their own, page-transition
curtains, custom cursors, tilt cards, and anything infinite.

---

## 9. Breakpoints

| Name | Min width | What changes |
|---|---|---|
| base | 0 | single column, `space-6` gutter, splits stacked, nav collapsed to a menu |
| `sm` | 640px | two-column product grid, `display-xl` at 3.25rem |
| `md` | 768px | splits become side by side, `space-12` gutter, badge row goes two by two |
| `lg` | 1024px | full nav on one line, `space-16` gutter, `py-40` sections, badge row goes four across |
| `xl` | 1280px | container reaches its 1400px cap, hero split goes `55 / 45` |
| `2xl` | 1536px | no layout change, gutters grow so the container stays centered |

Every multi-column block declares its single-column fallback below 768px in the
same component. Full-height areas use `min-h-[100dvh]`, never `h-screen`.

---

## 10. Layout families

A landing page with ten sections uses at least four of these. No family appears
twice on the same page. No more than two image-and-text splits in a row.

1. **Split panel** - white type column beside a full-bleed artwork column.
2. **Editorial statement** - one large line of type in a wide empty field.
3. **Hairline strip** - a 56px full-width band with tracked micro caps.
4. **Asymmetric product grid** - one wide feature cell plus a 2 by 2 field.
5. **Badge row** - four outlined circles with captions, closed by one rule.
6. **Vertical sequence** - numbered steps stacked, each separated by one rule.
7. **Quote row** - three short quotes, no cards, separated by vertical rules.
8. **Disclosure list** - accordion questions, one rule per row, bottom only.
9. **Closing band** - a full-width `bone` field with one headline and one CTA.

Cards get a border only when they are clickable. Everything else is grouped by
space and hairlines.

---

## 11. Z-index scale

| Layer | Value |
|---|---|
| Page content | `auto` |
| Sticky section headers | `10` |
| Sticky nav | `40` |
| Scrim | `50` |
| Cart drawer, mobile menu | `60` |
| Toast | `70` |
| Skip link when focused | `80` |

No other z-index values exist.

---

## 12. Iconography

Phosphor Icons (`@phosphor-icons/react`), `weight="light"`, `strokeWidth 1.5`,
one family for the whole site. No hand-rolled SVG paths. No emoji anywhere in
markup or visible text.

The two brand marks that are not icons are drawn once each as flat SVG and
reused: the PLANT-DERIVED two-leaf mark and the 3X seal.

---

## 13. Product imagery

Governed by `BRAND-EXTRACT` §6 and PRD §4. Agent 2 owns the renders; this
system fixes their frame.

- Always an assembled standing 3D box, never a flat print sheet.
- Ground is `bone` `#FBF9F6`. Nothing else in frame. No hands, no models.
- Shadow as specified in §5.
- Real proportions kept: soaps wide and flat (252 x 172 x 86 pt), Bee Wash a
  tall narrow carton (122 x 460 x 122 pt), the serum a small slim carton
  (88 x 270 pt).
- Aspect ratios: `4:5` for grid cards, `1:1` for the cart line item and the
  gallery thumbnails, `3:4` for the hero and the product detail lead image.
- Files live in `public/images/products/`. Every one carries real alt text
  naming the product, its form, and its accent artwork.
- Images below the fold are `loading="lazy"`; the hero image is `fetchpriority="high"`.

---

## 14. What this system forbids

So Agent 3 does not have to guess:

- No rounded corners other than full circles.
- No box shadows on interface elements.
- No gradients, except the flat watercolor artwork panels reproduced from the
  boxes.
- No small tracked uppercase label above every section headline.
- No em dash and no en dash in any visible string. Use a hyphen or a full stop.
- No exclamation marks, per the brand voice.
- No accent color used as text on white.
- No second accent color inside one section.
- No third font.
- No stock photography of models.
- No unhedged claim. The boxes say "helps brighten" and "radiant-looking"; the
  site says the same.
