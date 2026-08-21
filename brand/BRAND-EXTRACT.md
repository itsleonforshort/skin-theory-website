# Skin Theory — brand system, pulled from the box artwork

Every value here was read directly out of the 5 PDFs in this folder. Nothing is
invented. Agents must use these values, not their own taste.

Flat PNG renders of every box panel are in `brand/reference/`.
Look at them before designing anything.

## 1. The wordmark

`SKIN THEORY`, all caps, stacked on two lines on the boxes, very wide letter
spacing (about 0.35em). Pure black. No symbol, no icon, no logo mark.
On the serum it appears on one line at small size. Never bold, never italic.

## 2. Type in the artwork, and the web substitutes

| Role | Printed font | Web font | Notes |
|---|---|---|---|
| Wordmark, product name | Avenir LT Pro Roman / Canva Sans Bold | **Jost** | geometric, closest free match |
| Body copy | Helvetica World, Source Sans 3 | **Source Sans 3** | already used in the artwork |
| Labels, size, small caps | Open Sans | **Source Sans 3** | keep one body family on the web |
| "3X RADIANCE BOOST" badge only | Times New Roman MT Bold | **serif fallback** | only on the Kojic badge |

Letter spacing is the signature. Small uppercase labels are tracked wide,
roughly 0.12em to 0.35em. Body text is normal tracking.

## 3. Core palette (site-wide)

| Token | Hex | Where it comes from |
|---|---|---|
| `ink` | `#000000` | wordmark, product headings |
| `ink-soft` | `#2A292A` | serum panel text |
| `ink-muted` | `#303234` | sub-headings, "GENTLE GEL CLEANSER" |
| `paper` | `#FFFFFF` | the whole left half of every box |
| `sand` | `#D2AC81` | product name color on Gluta Soya and Kojic |
| `gold` | `#A38022` | "3X" badge |
| `gold-deep` | `#634109` | "PLANT-DERIVED" text |
| `forest` | `#195337` | "SALICYLIC" product name |

White space is the loudest part of this brand. Roughly half of every box front
is empty white. The website must keep that ratio.

## 4. Per-product color

Each product owns one color family. Use it as that product's accent only —
never mix two product colors in one section.

| Product | Accent name | Key hexes | Artwork |
|---|---|---|---|
| Bee Wash | Honey | `#FCCC90` `#FCD8A8` `#FCE4C0` `#FCC078` | soft honey wash rising from the bottom, painted witch hazel sprig |
| Coco Kojic Gluta | Amber | `#FCD86C` `#FCE49C` `#FCF0B4` `#FCCC60` | yellow watercolor wash, palm-frond shadow, gold "3X" seal |
| Gluta Soya | Blush + Lilac | `#F0D8C0` `#F0CCB4` `#E4D8E4` `#D8D8D8` | layered watercolor dunes, peach into lilac |
| Salicylic | Leaf green | `#90B460` `#B4CC84` `#C0D890` `#84A854` | translucent overlapping leaves |
| Niacinamide Serum | Stone grey | `#D6D6D6` `#909090` `#2A292A` | flat grey block, no illustration, most minimal of the five |

## 5. Layout rules taken from the boxes

- **Split composition.** Left side: white, type only, aligned left, generous
  top and bottom margin. Right side: full-bleed artwork. The website should
  reuse this split for hero and product sections.
- **Type stack order** on every front panel, top to bottom:
  wordmark -> large empty gap -> product name -> product type -> short rule -> 
  benefit line -> audience line -> size.
- **The short rule.** A small horizontal line, about 40px wide, sits above the
  benefit line. It is an accent color on Bee Wash, grey on the serum. Reuse it
  as the section divider across the site.
- **Badges** are thin outlined circles with a single line icon inside and 2 to 3
  words underneath. Used for ingredients and for claims.
- **Claim strip**: `PARABEN FREE | SULFATE FREE | CRUELTY FREE`, tracked wide,
  small, all caps. This belongs in the site header or just under the hero.
- **PLANT-DERIVED** leaf mark sits bottom right of the artwork panel.

## 6. Photography and product image rules

- Product images must be **assembled 3D boxes**, standing, lightly shadowed,
  on a plain warm-white surface.
- The print on each rendered box must match its PDF panel exactly: same
  wordmark position, same product name, same accent artwork, same badge.
- Soap boxes are wide and flat (252 x 172 x 86 pt). Bee Wash is a tall narrow
  carton (122 x 460 x 122 pt). The serum is a small slim carton (88 x 270 pt).
  Keep those real proportions.
- No busy backgrounds. No hands, no models holding boxes in the hero.

## 7. Tone of voice

Plain, clinical, calm. Short sentences. Claims are hedged the way the boxes
hedge them: "helps brighten", "helps reduce", "radiant-looking". Never promise
a cure. Never shout. No exclamation marks.
