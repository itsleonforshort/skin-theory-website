# Product box images

These are **assembled 3D boxes**, not flat print sheets, as PRD section 4 requires.

They are not illustrations and they are not guesses. Each one is built by taking
the real printed panels out of the brand PDFs and folding them into a box in 3D:

- front panel -> front face
- side panel -> right face (shaded, because it turns away from the light)
- top flap -> top face (flipped, because the die-line prints it upside down)

So the print on every render **is** the print from the PDF. It cannot drift.

| File | Product | Real carton size |
|---|---|---|
| `coco-kojic-gluta-soap.png` | Coco Kojic Gluta Soap | 252 x 172 x 86 pt |
| `gluta-soya-soap.png` | Gluta Soya Soap | 252 x 172 x 86 pt |
| `salicylic-soap.png` | Salicylic Soap | 252 x 172 x 86 pt |
| `bee-wash.png` | Bee Wash | 122 x 460 x 122 pt |
| `niacinamide-serum.png` | Niacinamide Serum | 88 x 270 x 88 pt |

All are transparent PNGs with a soft contact shadow baked in, so they sit on any
light background.

**To rebuild them:** run `python tools/render-boxes.py` from the project root.
Needs `pymupdf`, `pillow`, and `numpy`.

**Before using them on the site**, convert to WebP at the sizes actually needed
and keep these PNGs as the source. Do not stretch them — the proportions are the
real carton proportions.
