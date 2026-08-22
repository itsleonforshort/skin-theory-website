# Model photography — the shot list

18 model photographs. Every one is placed for a reason. Nothing is decorative
filler, and no photo repeats a job another photo already does.

Three kinds of shot, mixed on purpose:

- **BEAUTY** — the model and her skin. No product in frame. Sells the result.
- **IN-USE** — the model using the product itself, not the box. The soap bar
  lathering in wet hands, gel foam on the face, the serum dropper on a cheek.
  Sells the ritual.
- **HOLDING** — the model holding the carton so the print is legible.
  Sells the actual object the customer receives.

## House rules for every photo

- Natural daylight, soft, one direction. No hard flash, no coloured gels.
- Background: plain warm white, bone, or a soft out-of-focus interior. Never busy.
- Skin is real. Keep pores and texture. No plastic retouching, no heavy smoothing.
- No visible other brands, no logos, no text in frame.
- The model's eyeline is calm, never a wide commercial smile.
- Framing leaves quiet space on one side so type can sit beside it, the same way
  the boxes leave the whole left half empty.
- Every image ships as WebP with a JPG fallback, at the exact display size.
- Alt text describes the person and the action, never the file name.

## The 18 slots

| # | Slot id | Page and section | Kind | Frame | What is happening |
|---|---|---|---|---|---|
| 1 | `home-hero` | Home 1.1 Hero, artwork side | HOLDING | 4:5 vertical | Model at shoulder height holding the Bee Wash carton, print facing camera, looking slightly off lens. This is the 3-second hook. |
| 2 | `home-problem` | Home 1.3 The problem, named | BEAUTY | 1:1 | Tight crop on cheek and jaw, real texture, no product. Sits beside the sentence that names the visitor's problem. |
| 3 | `home-routine` | Home 1.6 A day in the routine | IN-USE | 4:5 vertical | Wet hands working a soap bar into a thick lather over a basin. Face may be out of frame. |
| 4 | `home-closing` | Home 1.10 Closing band | BEAUTY | 16:9 wide | Wide calm portrait, lots of negative space on the left for the closing line and the button. |
| 5 | `shop-sets` | Shop 2.4 The sets | HOLDING | 3:2 | Model holding two cartons together, one in each hand, at chest height. |
| 6 | `product-bee-wash-hold` | Product 3.2 Lead gallery, image 2 | HOLDING | 4:5 | Bee Wash carton held upright beside the face, print fully readable. |
| 7 | `product-bee-wash-use` | Product 3.2 Lead gallery, image 3 | IN-USE | 4:5 | Gel lather on damp cheeks, fingertips mid-circle, eyes closed. |
| 8 | `product-coco-kojic-gluta-soap-hold` | Product 3.2 gallery, image 2 | HOLDING | 4:5 | Kojic carton held flat in one palm, amber panel to camera. |
| 9 | `product-coco-kojic-gluta-soap-use` | Product 3.2 gallery, image 3 | IN-USE | 4:5 | Bare soap bar rubbed along a forearm, creamy lather visible. No box. |
| 10 | `product-gluta-soya-soap-hold` | Product 3.2 gallery, image 2 | HOLDING | 4:5 | Gluta Soya carton held at collarbone height. |
| 11 | `product-gluta-soya-soap-use` | Product 3.2 gallery, image 3 | IN-USE | 4:5 | Soap bar between two wet hands, lather building. No box. |
| 12 | `product-salicylic-soap-hold` | Product 3.2 gallery, image 2 | HOLDING | 4:5 | Salicylic carton held against a plain wall, green panel forward. |
| 13 | `product-salicylic-soap-use` | Product 3.2 gallery, image 3 | IN-USE | 4:5 | Lather being pressed onto a T-zone, mirror light. No box. |
| 14 | `product-niacinamide-serum-hold` | Product 3.2 gallery, image 2 | HOLDING | 4:5 | Small serum carton held in fingertips, grey panel forward. |
| 15 | `product-niacinamide-serum-use` | Product 3.2 gallery, image 3 | IN-USE | 4:5 | Dropper above a cheek, one bead of serum leaving the tip. No box. |
| 16 | `about-founder` | About 4.2 The founder | BEAUTY | 4:5 | Calm seated portrait, hands visible, plain interior. Reads as a person, not a model. |
| 17 | `theory-patch` | The Theory 5.5 The patch test | IN-USE | 3:2 | Inner forearm, a small dab being applied with one fingertip. |
| 18 | `theory-panel` | The Theory 5.6 Our small panel | BEAUTY | 3:2 | Two women side by side, relaxed, no product. Backs the 32-volunteer paragraph. |

## Placement rules

- **Never two model photos in a row.** At least one type-only or box-only
  section must sit between any two of them.
- **The box render always comes first** in a product gallery. The model shots
  support it, they never replace it. PRD section 4 still governs the box images.
- **In-use shots must show the real product form.** A soap page shows a bar of
  soap, not a box. This is the whole point of the in-use set.
- **Every model photo gets a caption or nearby line of copy.** A photo with no
  words next to it is decoration, and decoration gets cut.

## File naming

`public/images/models/<slot-id>.webp` plus `<slot-id>.jpg` as fallback.
Sizes: 1600px on the long edge for full-bleed slots, 1000px for gallery slots.

## Sourcing

Not yet settled. See `reports/00-open-decisions.md`.
The site must never ship a grey box or the words "photo here" in place of a
photo. PRD section 5 forbids placeholders. If a photo is missing, the section
falls back to a type-only layout that still looks finished.
