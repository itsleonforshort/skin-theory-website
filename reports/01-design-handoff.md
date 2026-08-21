# Report 01 - Design hand-off

**Agent:** 1, `web-designer`
**Round:** 1
**Date:** 22 August 2026
**Scope:** design and copy only. No application code was written. Agent 3 builds.

---

## 1. What I produced

| File | What is in it |
|---|---|
| `design/DESIGN-SYSTEM.md` | 11 color tokens with hex and their source panel, measured contrast rulings for every one, per-product accent mapping for all five products, a 10-step type scale in rem, the tracking table, a 12-step spacing scale, radius rule, shadow rule, the short rule and badge and seal specs, button and form specs, motion rules, breakpoints, 9 layout families, z-index scale, icon rule, product image frame rules, and a list of what the system forbids. |
| `design/PAGE-BLUEPRINTS.md` | Header and footer, then every page in PRD §8 section by section, top to bottom, with what each section holds, what it must make the visitor feel, and which layout family it uses. Each page carries an explicit HOOK / STAY / RELATE / CONVERT check. Closes with a section-repetition audit table. |
| `design/COPY.md` | Every visible string. Brand constants, meta titles and descriptions for 17 pages, header and footer, all 10 home sections, shop, all 5 product detail pages, About, The Theory, Contact, the cart and checkout flow, three legal pages, 404, and system and state strings. |
| `reports/01-design-handoff.md` | This file. |

---

## 2. PRD coverage

| PRD item | Covered where | Status |
|---|---|---|
| §3 Look pulled out of the box artwork | `DESIGN-SYSTEM.md` §1 to §6. Every token names the panel it came from. | Done |
| §3b The 5 products | `COPY.md` §5.1 to §5.5, one full page each | Done |
| §4 Assembled 3D box images | `DESIGN-SYSTEM.md` §13 fixes ground, shadow, proportions, aspect ratios and alt text. Real alt text written per product in `COPY.md`. Agent 2 renders them. | Specified, not rendered |
| §5 Invented final prices and numbers | `COPY.md` §1 and §4.3. Five prices, two set prices, five ratings, five review counts, five star distributions, 20 named reviews. | Done |
| §5 No placeholders | Checked mechanically. Zero brackets, zero lorem, zero TODO, zero "coming soon". | Done |
| §5 Every product needs a full description | Each product page has: what it is, what it does, who it is for, how often to use it, the word-for-word direction, badges, and the full INCI list. | Done |
| §6 Conversion rules | Four-stage check written under every page in `PAGE-BLUEPRINTS.md` | Done |
| §7 Tech stack | Unchanged. The system is written as Tailwind tokens for Vite plus React plus React Router. | Respected |
| §8 All pages | Home, Shop, 5 product pages, About, The Theory, Contact, cart drawer, cart page, checkout, order confirmed, Privacy, Terms, Shipping and Returns. Plus a 404. | Done |
| §9 Responsive | Breakpoint table in `DESIGN-SYSTEM.md` §9, with a per-section mobile collapse rule | Done |
| §9 Keyboard and focus | Focus ring spec in §7, skip link, focus trap and Escape on drawer and menu, thumbnail arrow keys, live region on the cart count, `aria-current` on nav | Done |
| §9 Cart persists on refresh | `PAGE-BLUEPRINTS.md` §7.1, `localStorage` | Specified |
| §9 Contact form sends | `PAGE-BLUEPRINTS.md` §6.2, Web3Forms, four states written in `COPY.md` §8.2 | Specified |
| §9 Real alt text | Written for all five product images, the founder portrait, the workshop photo, and the patch-test photo | Done |
| §10 Owner input slots | Flagged one: the Web3Forms access key. Handed to Agent 5. | Flagged |
| Ingredients and precautions word for word | Marked **WORD FOR WORD** in `COPY.md`. Copied and diffed against `brand/PRODUCT-COPY.md`. Nothing reworded. | Done |

---

## 3. Decisions I made on my own

These were not in the PRD or the brand extract. I made a call rather than
stopping, and each one is written into the design files. Any of them can be
overruled.

1. **Prices.** Bee Wash ₱389, Coco Kojic Gluta ₱249, Gluta Soya ₱229,
   Salicylic ₱219, serum ₱549. Two sets: The Full Theory ₱1,499 saving ₱136,
   and The Bar Set ₱629 saving ₱68. Free shipping over ₱1,200. These are placed
   at the level a Davao small-batch brand can defend against the mass-market bars
   the copy compares itself to.

2. **`sand` is never text on the web.** The boxes print two product names in
   `#D2AC81`. Measured against white that is 2.1:1, which fails at any size. So
   Coco Kojic Gluta and Gluta Soya are set in `ink` on screen, and `sand` moves
   to the short rule. Salicylic keeps its printed `forest` green, which measures
   8.9:1 and passes. This is the only deliberate departure from the print, and it
   is for legibility.

3. **Pure black stays.** The general design advice is to avoid `#000000`.
   The brand extract names it, and the artwork is printed in it. I kept it and
   built depth with a two-step ink ladder instead.

4. **Radius is zero, with one exception.** No panel on any box has a rounded
   corner. The only curves in the artwork are the ingredient badge circles and
   the 3X seal. So the whole interface is square and only those two are round.
   There is no 4px or 8px value anywhere.

5. **No shadows on the interface.** The artwork is flat print. Shadows exist
   only on assembled box renders, plus a scrim behind the drawer.

6. **Dark mode is opt-in, not automatic.** A skincare shop should normally
   follow `prefers-color-scheme`, but half of every box is empty white and the
   brand extract calls that the loudest part of the identity. Following the
   system preference would hand half of all visitors a version of the brand that
   is not the brand. So a full dark token set exists and a labelled toggle sits
   in the footer, off by default. If the boss wants automatic dark mode, the
   tokens are already there.

7. **Tracked uppercase is data, not decoration.** The boxes use wide tracked
   caps everywhere, and the standard design advice is to strip small uppercase
   labels above section headlines. I resolved it by role: tracked caps are
   allowed where the box uses them (wordmark, benefit lines, audience lines,
   claims, sizes, buttons, nav, badge captions) and are used as a section label
   only twice on the whole home page.

8. **The serum audience line.** The serum carton prints a benefit line but no
   audience line, and the shop grid needs one for every product. I wrote
   `FOR OILY AND UNEVEN-LOOKING SKIN`, which stays inside what the box already
   claims. This is the only product line on the site not printed on a carton, and
   it is called out as such in `COPY.md` §4.3.

9. **Badges for the three products without printed ingredient badges.** Coco
   Kojic Gluta and Gluta Soya print badge text on the back panel and that is used
   word for word. Bee Wash, Salicylic and the serum do not, so their badges are
   built from their own printed side panels and benefit lines. Badge count always
   matches real content, so there is never a filler circle.

10. **Invented people and proof.** Founder Marianne Quiñones, production lead
    Elmer Sadiasa, a team of four, batches of about six hundred, first run of
    forty bars in 2023. Twenty reviews with Filipino names and real Philippine
    cities. A tolerance panel of 32 volunteers over eight weeks with 30 finishing
    with no irritation reported. I wrote that panel as a tolerance panel and said
    in the same paragraph that it is not a clinical trial and measures nothing
    about brightening. I did not invent a dermatologist endorsement and I did not
    invent an FDA registration number, because faking a regulator identifier is a
    different thing from inventing a brand story. The DTI business name number is
    invented, as PRD §5 allows.

11. **One error color outside the brand palette.** Form errors use `#8C2A2A`
    at 8.0:1. The box artwork has no red, but a colorless error state fails
    people, so this one addition exists and is scoped to form errors only.

12. **Philippine commerce specifics.** Barangay and region in the address form,
    four shipping bands by region, J&T Express and LBC Express as couriers,
    GCash, Maya, bank transfer, card and cash on delivery as payment methods,
    the Data Privacy Act of 2012 and the Consumer Act of the Philippines in the
    legal pages, and the National Privacy Commission as the complaint route.
    None of this was specified; all of it is what a real Davao shop needs.

13. **A 404 page.** Not in PRD §8, but §9 forbids broken links, and a mistyped
    URL with no 404 page is a dead end. Blueprinted in `PAGE-BLUEPRINTS.md` §9.

14. **The CTA label lock.** One label per intent, used identically everywhere:
    `Shop all five`, `Add to bag`, `Checkout`, `Send message`, `View`. No
    variations exist anywhere in the copy.

---

## 4. Notes for the other agents

**Agent 2, theme and images.** `DESIGN-SYSTEM.md` §13 is your frame: `bone`
`#FBF9F6` ground, the shadow value, the real carton proportions, and the aspect
ratios per placement. Renders need transparent backgrounds so the dark mode
toggle does not leave a white rectangle behind each box. Alt text for all five
products, the founder portrait, the workshop, and the patch-test shot is already
written in `COPY.md`.

**Agent 3, build.** Two things to hold onto. First, the three long word-for-word
blocks on each product page are inside accordions so they do not wall the page,
but they must be complete when opened. Do not truncate them and do not add a
"read more". Second, the section-repetition audit at the end of
`PAGE-BLUEPRINTS.md` is a constraint, not a summary. If you merge or reorder
sections, re-check it.

**Agent 5, input slots.** One key so far: the Web3Forms access key, used by both
the contact form and the checkout submission. If a card provider is added, its
publishable key is the second.

**Agent 8, QA.** Things worth testing that are easy to miss: the cart badge live
region announcing changes, focus returning to the cart button when the drawer
closes, the free-shipping line updating as items are added, the checkout region
select changing the shipping rate line, and every accordion being reachable and
operable by keyboard.

---

## 5. Open questions for the boss

None are blocking. Round 1 can be built as written.

1. Should dark mode follow the system preference instead of being an opt-in
   toggle? Tokens for both are already defined.
2. The two stockists named on the Contact page, Sugbo Naturals in Cebu City and
   Northmall Beauty in Tagum City, are invented. If there are real stockists,
   send the names and I will swap them.
3. Card payments are written as a hand-off to a payment provider whose page
   takes the card details. If the shop wants Stripe specifically, the checkout
   copy needs one line changed and Agent 5 needs a second key slot.
