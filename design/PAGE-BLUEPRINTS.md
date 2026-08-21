# Skin Theory - Page Blueprints

Every page in PRD §8, top to bottom. For each section: what it holds, what it
must make the visitor feel, and which layout family from
`design/DESIGN-SYSTEM.md` §10 it uses. Every page closes with an explicit
HOOK / STAY / RELATE / CONVERT check.

All copy referenced here is written in full in `design/COPY.md`. Agent 3 places
copy, it does not write copy.

---

## 0. Global shell

### 0.1 Header

Sticky, 68px tall, `paper` background, `1px solid #D8D8D8` bottom hairline that
appears only after 24px of scroll. One line at `lg` and above.

Left: the `SKIN THEORY` wordmark, one line, Jost 400, 0.35em tracking, `ink`.
It links home and it is the only logo on the site.

Centre: `Shop` · `The Theory` · `About` · `Contact`. Jost 400, `label` size,
0.12em tracking, `ink-soft`. Hover and current page both draw a 1px `ink`
underline at 6px offset. Current page also gets `aria-current="page"`.

Right: a cart button. A Phosphor `Handbag` icon at 20px with a count beside it
in `micro`. The count is a live region so screen readers hear it change. When
the cart is empty the count is hidden and the button reads "Cart, empty".

Below 1024px the four links collapse into a `List` icon that opens a full-height
panel from the right, with a scrim at z-50 and the panel at z-60. Focus is
trapped inside, Escape closes, focus returns to the trigger.

A skip link sits before the wordmark. It is visually hidden until focused, then
it appears top left in the primary button style at z-80.

**Feeling:** the top of a well-printed box. Nothing is competing.

### 0.2 Footer

`paper`, `1px` `line` top rule, `py-24`.

Four columns at `lg`, two at `md`, stacked at mobile:

1. The wordmark stacked on two lines, then the manufacturer block from
   `brand/PRODUCT-COPY.md`, then the PLANT-DERIVED mark.
2. Shop: the five product names.
3. Read: The Theory, About, Shipping and Returns, Contact.
4. Legal: Privacy Policy, Terms of Sale, and the email newsletter field.

Bottom bar: the claim strip in `micro`, the copyright line, and the light/dark
toggle. The toggle is a plain labelled button, not an icon-only control.

The newsletter field is a single email input with a `Join` quiet button. It sits
in the footer only. It never appears beside a buy button anywhere on the site,
so it can never compete with the primary goal.

**Feeling:** the back panel of the box. Small print, complete, honest.

---

## 1. Home

Ten content sections. Two tracked-caps section labels are used in total, on
sections 4 and 8. Every other section leads with its headline alone.

### 1.1 Hero - split panel

`min-h-[100dvh]` at `lg`, `min-h-[88dvh]` on mobile. Top padding `space-24`
(96px), never more.

Left column (55%): the headline at `display-xl`, capped at 18ch so it sets on
two lines. Below it, one lead paragraph of 19 words. Below that, the short rule
in `ink`, then one primary button, `Shop all five`. Three text elements total.
No eyebrow, no tagline under the button, no trust strip inside the hero.

Right column (45%): full-bleed to the right viewport edge, `bone` ground, one
assembled Coco Kojic Gluta box standing three-quarter view, large and sharp, at
`3:4`. It is the best seller and it is the box that shows the split composition
most clearly. `fetchpriority="high"`.

Below `md` the columns stack, type first, image full-bleed below with no gutter.

**Must make them feel:** this is a real manufacturer, not a reseller. Calm.
Nothing is being hidden from me.

### 1.2 Claim strip - hairline strip

`PARABEN FREE | SULFATE FREE | CRUELTY FREE`, 56px, rules top and bottom.
Straight off the boxes. It is the first proof and it costs one line.

**Feel:** the first small reassurance, before any argument.

### 1.3 The problem, named - editorial statement

One `display-l` line in a wide empty field, then two short paragraphs of no more
than three lines each, capped at 52ch. No image. This section is mostly white
space and that is the point.

It names the visitor's real problem in their own words: dark spots that come
back, an oily T-zone by noon, a shelf of half-used bottles that promised
everything.

**Feel:** seen. Someone finally described my skin without selling first.

### 1.4 The five products - asymmetric product grid

One tracked-caps label here, `THE FIVE`, then the section headline.

Cell count is exactly five. One wide feature cell across the full width for Coco
Kojic Gluta: assembled box on the left at `4:5`, name, benefit line, audience
line, price, star rating, review count, and a `View` button on the right. Then a
2 by 2 field below it for Bee Wash, Gluta Soya, Salicylic and the serum, each a
square card with a `1px` `line` border because it is clickable, the box render on
`bone`, the name, the size, the price, and `Add to bag` on hover and always
visible on touch.

Each card carries its own accent only on its short rule and its border on hover.
No two accents inside one card.

Below the grid, a quiet link: `Shop all five`.

**Feel:** the whole range fits in one glance. This is a small, deliberate line,
not a catalogue.

### 1.5 What is actually in them - badge row

Four outlined circles, drawn from the Kojic back panel: Papaya Oil, Vitamin C,
Kojic Acid, Glutathione, each with the exact one-line description printed on the
box. Gold `#A38022` stroke. One `2px` gold rule closes the group.

Below the rule, one sentence and a quiet link to The Theory page. This is the
open loop: it shows four of the actives and points at the page that holds all of
them.

**Feel:** these people know their own formula. There is more to read.

### 1.6 A day in the routine - vertical sequence

Two stacked columns, Morning and Evening, each a numbered sequence of three
steps using real products in real order, separated by `1px` `line` rules, bottom
only. No cards. Times of day are set in `label` caps.

Morning: Bee Wash, then the Niacinamide serum, then sunscreen (named as a step
the brand does not sell, which builds trust).
Evening: Bee Wash, then the bar that matches the visitor's goal, then the serum.

**Feel:** I can see where this fits into my actual morning. It is not extra work.

### 1.7 Proof - quote row

Three reviews, each three lines maximum, separated by vertical `1px` rules at
`lg` and by horizontal rules when stacked. Real name, city, and the product they
bought. No avatars, no cards, no star graphics inside the quote; the star rating
sits under the name in `micro`.

Under the row, one line of aggregate: the total review count and the average.

**Feel:** other Filipinos with my skin, in cities I know, not stock faces.

### 1.8 Who makes it - split panel, inverted

One tracked-caps label here, `DAVAO CITY`, then the founder headline.

Left 40%: a portrait of the founder in the workshop, `4:5`, on `bone`.
Right 60%: three short paragraphs, then a signature line and a quiet link to
About. This is the second and last image-and-text split on the page, and it is
five sections away from the hero, so the zigzag cap holds.

**Feel:** a person is responsible for this. There is an address on the box.

### 1.9 The three objections - disclosure list

One headline, then three accordion rows, bottom rule only. The three are stated
plainly: it costs more than the sachet at the sari-sari store, will it work on
my skin, and what happens if it does not.

Each answer is four lines maximum and ends in a concrete fact: the price per
wash, the patch-test instruction, and the seven-day return window.

**Feel:** they answered the thing I was about to close the tab over.

### 1.10 Closing band - closing band

Full-width `bone` field, `py-40`. One `display-m` headline, one line of body, one
primary button `Shop all five`, and directly beneath the button a single line of
risk reducers in `small`: free nationwide shipping over ₱1,200, seven-day
returns, ships from Davao City in one working day.

**Feel:** nothing left to check. The risk is small.

### HOOK / STAY / RELATE / CONVERT - Home

**HOOK.** Above the fold there is one promise, one sentence of support, one
large sharp assembled box, and exactly one button. The headline says what the
brand sells and what makes it different in eight words with no jargon and no
mystery. There is no slogan carousel.

**STAY.** Section 1.3 opens a loop by naming a problem without offering the
answer yet. Section 1.5 shows four actives and says there are more. The rhythm
changes every section: split, strip, statement, grid, badges, sequence, quotes,
split, accordion, band, so no two card grids ever stack. Nothing runs longer
than three short lines. Motion is a 12px rise and a fade, once, and nothing else.

**RELATE.** Section 1.3 uses the visitor's own words before anything is sold.
Section 1.6 shows the routine in a real day rather than the product on a
pedestal, and names a step the brand does not sell. Section 1.7 is proof with
names and cities. Section 1.5 is ingredient proof taken word for word off the
box. Section 1.8 is the founder and the Davao address. Section 1.9 handles price,
fit and failure head on.

**CONVERT.** The one primary CTA `Shop all five` appears in the hero, as a quiet
link under the product grid, and in the closing band. `Add to bag` appears on
every product card, which is a decision moment, not dead space. Risk reducers sit
directly under the closing button. The newsletter lives in the footer only, so
it never sits beside a buy button with equal weight. One goal on this page.

---

## 2. Shop

### 2.1 Page head - editorial statement

`display-l` headline, one 18-word line beneath, the short rule in `ink`. No hero
image; the products are the images. `py-24`, not `py-40`, because the grid
should start high.

### 2.2 Filter and sort - hairline strip

A 64px band with rules above and below. Left: filter chips, `All five`,
`Cleansers`, `Bars`, `Serum`. Right: a sort select, `Featured`, `Price low to
high`, `Price high to low`, `Best rated`. Chips are 40px small buttons; the
active chip inverts to `ink` fill with `paper` text.

State is held in the URL query so a filtered view can be shared and the back
button works. If a filter empties the grid, an empty state appears: one line of
text and a `Show all five` quiet button. That state can be reached today by
combining nothing, but it is built anyway.

### 2.3 The grid - asymmetric product grid

Five cells for five products. At `lg` the grid is three columns, with the Coco
Kojic Gluta cell spanning two columns in the first row so the field is asymmetric
rather than a tidy 3 plus 2. Two columns at `sm`, one at base. Never an empty
cell.

Each card: box render at `4:5` on `bone`, the product name in `title`, the
product type in `label` `ink-muted`, the short rule in the product accent, the
benefit line in `label`, the size, the price in `title`, star rating and review
count in `micro`, and an `Add to bag` button. The whole card is a link to the
detail page; the button is a nested control with its own accessible name that
includes the product, for example "Add to bag, Coco Kojic Gluta Soap".

Adding from here opens the cart drawer with a short confirmation line and does
not navigate away.

### 2.4 The sets - split panel

Two bundles presented as one split: the type column lists what is in each set,
its price, and what it saves; the artwork column shows the boxes grouped on
`bone`. Each set has its own `Add to bag`.

### 2.5 What the numbers mean - vertical sequence

Four short rows explaining size, price per use, how long a bar lasts, and what
ships in a set. This is the price objection answered inside the shop, where it
bites hardest. One rule per row, bottom only.

### 2.6 Closing band

The same closing band as home, with the same risk-reducer line.

### HOOK / STAY / RELATE / CONVERT - Shop

**HOOK.** The headline states the whole range in one line and the first product
card is visible above the fold at 1440px. There is no decorative banner eating
the viewport.

**STAY.** The grid is asymmetric so the eye moves rather than scanning a
lattice. Sets and the numbers section change the rhythm twice after the grid.

**RELATE.** Filters are written in the words a buyer uses, `Bars` not
`Solid cleansing formats`. Section 2.5 answers the cost question in pesos per
wash rather than defending the sticker price.

**CONVERT.** `Add to bag` sits on all five cards and both sets, which is seven
decision moments. The drawer opens in place so momentum is not lost. Risk
reducers repeat in the closing band. One goal: fill the bag.

---

## 3. Product detail (one template, five instances)

The template is identical for all five. Only the accent family, the artwork, and
the copy change. Word-for-word blocks come from `brand/PRODUCT-COPY.md` and are
never edited.

### 3.1 Breadcrumb

`Shop` then the product name, `micro`, `ink-muted`, with a real link on `Shop`.

### 3.2 Lead - split panel

Left 50%: gallery. One large `3:4` assembled box render on `bone`, with three
`1:1` thumbnails below it: the front three-quarter view, the back panel, and the
box beside the unboxed bar or bottle. Thumbnails are buttons with visible focus.
Arrow keys move between them.

Right 50%: the type stack in the exact order the box front uses.
Product name in `display-s` `ink` (or `forest` on Salicylic), product type in
`label` `ink-muted`, the short rule in the product accent, the benefit line in
`label`, the audience line in `label` `ink-muted`, the size, then the price in
`title`, then the star rating and review count, then a 3-line description, then
the quantity stepper and one primary `Add to bag` button, full width.

Directly under the button, three short risk-reducer lines with Phosphor icons at
16px: shipping, returns, and dispatch time.

This is the fold. Everything a buyer needs to decide is above it.

### 3.3 Why it works - badge row

The key ingredient badges for that product, using the exact one-line description
printed on the box. Coco Kojic Gluta has four, Gluta Soya has two, and for the
three products whose boxes carry side-panel callouts instead, those callouts
become the badges: Bee Wash gets `ALL-IN-ONE SOLUTION`, `MOISTURIZING HONEY` and
`WITCH HAZEL`; the serum gets `BALANCING NIACINAMIDE` and `CALMING`; Salicylic
gets `OIL-FREE`, `REVIVE` and `CLEAN` drawn from its benefit line. The badge
count always matches the content; there is never a filler circle.

Closed by one accent rule.

### 3.4 How to use it - vertical sequence

The `Direction for use` text word for word, set as `lead`, with the short rule
above it. Beneath, a plain line stating how often and at what time of day, drawn
only from what the box says.

### 3.5 The full formula - disclosure list

Three accordion rows, closed by default so the page stays calm, each opening to
word-for-word text:

1. `Ingredients` - the full INCI list, `body`, in a `65ch` measure.
2. `Precaution` - the full precaution text. On Salicylic this row also carries
   the `Storage` paragraph, because that box prints storage separately.
3. `Size and manufacturer` - the printed size, then the manufacturer block.

A line above the group states plainly that this is the same text printed on the
carton. Nothing in these three rows is reworded, shortened, or summarised.

### 3.6 Reviews - quote row

Average, total count, and a 5 to 1 star distribution drawn as five plain rows
with a count each. No filled progress tracks. Then four reviews for this product,
each three lines maximum, with name, city, star count and a purchase date. A
`Show all` quiet button reveals the rest in place.

### 3.7 Works well with - asymmetric product grid, two cells

Two products that genuinely pair with this one, each a small card with render,
name, price and `Add to bag`. Never all four others; two is a recommendation,
four is a shrug. The pairings are fixed per product in `design/COPY.md`.

### 3.8 Questions - disclosure list

Three product-specific questions, answered in four lines or fewer.

### 3.9 Closing band

Headline naming this product, one line, one primary `Add to bag`, and the risk
reducers under it.

### HOOK / STAY / RELATE / CONVERT - Product detail

**HOOK.** Name, benefit line, price, rating and one `Add to bag` all sit above
the fold beside one large sharp box render. The type stack is the box's own
order, so a buyer who has held the product recognises it instantly.

**STAY.** Section 3.3 gives the actives, which pulls toward 3.5 where the whole
list sits. The rhythm goes split, badges, sequence, accordion, quotes, grid,
accordion, band. The three long word-for-word blocks are folded into accordions
so they never wall the page, but they are complete when opened.

**RELATE.** The audience line is the box's own, so it speaks to a stated skin
concern rather than everyone. Reviews name the product and the city. Section 3.4
puts it in a real routine. Section 3.8 answers what people actually ask about
this specific formula.

**CONVERT.** `Add to bag` appears in the lead, on both pairing cards, and in the
closing band. That is four, all at decision moments. Risk reducers sit twice,
directly under a button both times. One goal.

---

## 4. About

### 4.1 Lead - editorial statement

A `display-l` line and one lead paragraph in a wide field. No image yet. The
page opens with a claim about why the brand exists, not a photograph.

### 4.2 The founder - split panel

Portrait at `4:5` on `bone`, and four short paragraphs: what she did before,
what went wrong with the products she was buying, what she decided to print on
the box, and where the first batch was made. Signed with her name and role.

### 4.3 What we print, and why - vertical sequence

Four numbered commitments, one rule per row, bottom only. Full INCI on the
carton, hedged claims only, one batch code per run, and nothing tested on
animals. Each is one line of promise and two lines of what it costs the brand to
keep it. That cost detail is what makes it believable.

### 4.4 Where it is made - split panel, inverted

A photograph of the Davao City workshop on the right, and on the left the
manufacturer block from the boxes, the batch process in three lines, and the
small-batch number. This is the second split and it is one section from the
first, which is inside the two-in-a-row cap.

### 4.5 The line so far - asymmetric product grid, five cells

The same five-cell grid as Shop, at smaller scale, without prices, each linking
to its detail page. It closes the story with the actual products.

### 4.6 Closing band

`Shop all five`, with the risk reducers.

### HOOK / STAY / RELATE / CONVERT - About

**HOOK.** The first line states the reason the brand exists in one sentence, and
the primary nav CTA stays visible in the sticky header.

**STAY.** Section 4.2 opens with a specific failure, which needs the rest of the
page to resolve. Sections alternate statement, split, sequence, split, grid.

**RELATE.** The founder had the same problem the visitor has. The costs in 4.3
are concrete. The Davao address is the same one printed on the carton the visitor
can hold.

**CONVERT.** This page's goal is trust, and it converts once, at the end, into
`Shop all five`. The five-cell grid above it gives a second, quieter path. Two
CTAs of the same intent, both using the same locked label.

---

## 5. The Theory

The science and philosophy page. It is the proof engine the rest of the site
links into.

### 5.1 Lead - editorial statement

A `display-l` headline and one paragraph explaining the brand's position on
actives: fewer of them, named on the front, at honest concentrations.

### 5.2 The seven actives - vertical sequence

Seven rows, one per active that appears across the five products: Kojic Acid,
Glutathione, Ascorbic Acid, Salicylic Acid, Niacinamide, Centella Asiatica, and
Honey with Witch Hazel treated as one entry. Each row: the name in `title`, what
it does in two lines using the box's own hedged language, which products carry
it as small linked names, and one line on who should be careful with it.

Seven items is past the five-item limit for a plain list, so this is built as a
two-column split at `lg` with grouped rows and a single hairline between groups,
not a hairline under every row.

### 5.3 What we do not use - hairline strip, expanded

A 96px band listing parabens, sulfates, and animal testing, in `label` caps with
one line under each. Rules above and below. Short, absolute, and directly from
the claims printed on every carton.

### 5.4 How to layer them - asymmetric grid, three cells

Three real routines with fixed product sets: brightening, oil control, and
sensitive-and-starting-out. Each cell names the products in order with times of
day. Three cells for three routines, no empty cell.

### 5.5 The patch test - split panel

Left: a four-step patch test written plainly. Right: a close photograph of a bar
on `bone`. This answers "will it work on my skin" with an action rather than a
promise.

### 5.6 Our small panel - editorial statement

The in-house tolerance panel, stated modestly and without medical language: how
many volunteers, where, when, and what was recorded. It is labelled as an
in-house panel, not a clinical trial.

### 5.7 Questions - disclosure list

Five questions about actives, sun exposure, pregnancy, combining with retinol,
and how long results take. Each answer hedged and four lines maximum. The
pregnancy and retinol answers both end by saying to ask a doctor.

### 5.8 Closing band

`Shop all five`.

### HOOK / STAY / RELATE / CONVERT - The Theory

**HOOK.** The headline states a contrarian position in one line, which is a
reason to keep reading rather than a promise.

**STAY.** Seven actives is a number that sets an expectation. The layout changes
five times. The band in 5.3 is a hard rhythm break in the middle.

**RELATE.** Section 5.4 gives the visitor their own routine by concern. Section
5.5 gives them something to do tonight. Section 5.7 answers the questions that
stop a purchase, including the two that should end in "ask a doctor".

**CONVERT.** Every routine in 5.4 links to its products, and the closing band
carries the one CTA. The page's job is belief; it hands the buying to Shop.

---

## 6. Contact

### 6.1 Lead - editorial statement

One `display-m` line, one paragraph with the real reply window, and the short
rule.

### 6.2 The form - split panel

Left 55%: the form. Fields, each with the label above it and helper text below:
Name, Email, Order number (helper: leave blank if this is not about an order),
Subject as a select with four real options, and Message as a textarea. One
primary button, `Send message`.

Posts to Web3Forms. The access key is read from an environment variable, never
hard-coded, and is listed as an owner input slot for Agent 5.

Four states are all built: idle, submitting with the button disabled and its
label changed to `Sending`, success replacing the form with a confirmation block
and the reply window repeated, and error keeping every entered value and showing
one inline message plus the email address as a fallback. Errors are announced in
a live region and focus moves to the first invalid field.

Right 45%: the direct details. Email, mobile, opening hours in Philippine time,
the full manufacturer address from the boxes, and one line saying the workshop is
not a walk-in shop. Beneath, three quiet links to Shipping and Returns, the
order-tracking note, and wholesale enquiries.

### 6.3 Before you write - disclosure list

Four questions that answer the most common reasons people use a contact form:
where the order is, how to return something, whether a product is in stock, and
whether they ship outside the Philippines. Deflecting these three ways up front
is respectful and it lowers the support load.

### 6.4 Closing band

`Shop all five`, because a visitor who reached the bottom of Contact without
writing is a visitor who was browsing.

### HOOK / STAY / RELATE / CONVERT - Contact

**HOOK.** The reply window is stated in the first paragraph, above the fold, so
the visitor knows what sending costs them in waiting.

**STAY.** The form is short: five fields. The right column answers the
impatient visitor who does not want a form at all.

**RELATE.** The subject options are the four real reasons people write. The
accordion answers the question before it is asked.

**CONVERT.** One goal on this page: `Send message`. The shop CTA appears once,
at the very bottom, well below the form, so it never competes with it.

---

## 7. Cart and checkout

### 7.1 Cart drawer

Slides from the right at 420px, full width below 480px. Scrim at z-50, panel at
z-60, focus trapped, Escape closes, focus returns to the cart button.

Head: `Your bag` and the item count. Rows: `1:1` render on `bone`, name, size,
unit price, a quantity stepper, a `Remove` quiet button, and the line total.
Foot: subtotal, one line on where shipping is calculated, a primary `Checkout`
button, and a quiet `Keep shopping` link.

Above the subtotal, a free-shipping line: either how much more is needed to reach
₱1,200, or a line confirming shipping is free. It is text, not a progress bar.

Empty state: one line, one `Shop all five` button, and the two best-selling
products as small cards. Never a blank panel.

The cart persists to `localStorage` and rehydrates on refresh. Quantity is capped
at 12 per line with a plain message at the cap.

### 7.2 Cart page

The same contents at full width for people who prefer a page. Two columns at
`lg`: rows on the left, an order summary card on the right that sticks at
`top: 92px`. The summary is the only bordered card on the site that is not
clickable, and it earns its border because it must stay visually attached while
the rows scroll past.

Below the summary: accepted payment methods as text, and the returns line.

### 7.3 Checkout

One page, three numbered stages stacked vertically, all visible, no wizard that
hides steps.

1. **Contact** - email and mobile.
2. **Delivery** - full name, street, barangay, city or municipality, province, a
   region select, postal code, and delivery notes. The shipping rate updates
   from the region select and the chosen rate is shown as a line, not a popup.
3. **Payment** - GCash, Maya, bank transfer, card, or cash on delivery, as
   radio rows with one line of instruction each.

Right column at `lg`: the sticky order summary with every line item, the
subtotal, the shipping line naming the region, the total in bold, and the
primary `Checkout` button. Below the button: returns, dispatch time, and a line
saying no card details are stored on this site.

Validation is inline and on blur, never only on submit. The submit button never
silently fails; it either disables with a visible reason or shows an inline
error and moves focus to it.

The order is sent through Web3Forms to the shop's inbox and to the customer's
email, and the cart is cleared only after a successful response.

### 7.4 Order confirmed

A single centred column, `py-40`. The order number, a line saying a copy is on
its way to the email address, the full order summary, the delivery address as
entered, the expected dispatch and delivery window for their region, and one
quiet `Shop all five` link. No upsell block. The cart badge is now zero.

### HOOK / STAY / RELATE / CONVERT - Cart and checkout

**HOOK.** The drawer confirms the add without a page change, so the moment of
decision is never interrupted.

**STAY.** The free-shipping line gives a reason to add one more item, stated as
a fact rather than a gamified bar. The empty state gives somewhere to go.

**RELATE.** Philippine addresses are collected the way Philippine addresses are
written, with barangay and region. Cash on delivery is offered because a large
share of buyers here expect it.

**CONVERT.** Three stages on one page with a permanently visible summary and one
button. Risk reducers sit directly under that button. No newsletter field, no
cross-sell, and no discount-code hunt anywhere in this flow.

---

## 8. Legal pages

Three pages sharing one narrow template: `max-width 72ch`, `py-24`, `display-m`
headline, a last-updated line in `micro`, a table of contents of anchor links at
the top, then numbered sections with `title` headings and `body` text. Rules
between top-level sections only. No accordions; legal text is read by people who
need to find something, so it stays open and findable.

### 8.1 Shipping and Returns

Nine sections: where they ship from, couriers, the four rate bands by region
with days, the free-shipping threshold, dispatch times, tracking, the seven-day
return window and its conditions, damaged and wrong items with the 48-hour photo
rule, and refund timing by payment method.

This page carries a closing band with `Shop all five`, because it is read before
buying as often as after.

### 8.2 Privacy Policy

Ten sections covering what is collected, why, the legal basis under the
Philippine Data Privacy Act of 2012, who it is shared with, the third parties
named plainly, cookies and what the site actually sets, how long data is kept,
the data subject rights under that Act, how to exercise them, the National
Privacy Commission as the complaint route, and how changes are announced.

It states honestly that the cart is stored in the browser and never leaves it
until checkout.

### 8.3 Terms of Sale

Nine sections: who the seller is, how an order is formed, pricing and VAT,
payment, delivery risk, cancellation, the statutory rights under the Consumer Act
of the Philippines, the limits of the brand's claims including a plain line that
nothing sold is a medicine, and the governing law and venue in Davao City.

### HOOK / STAY / RELATE / CONVERT - Legal pages

**HOOK.** The table of contents at the top is the hook: a reader with one
question can see in three seconds whether the answer is here.

**STAY.** Numbered sections, short paragraphs, and a 72ch measure. Nothing is
hidden behind a toggle.

**RELATE.** Plain Philippine terms: barangay, sari-sari, cash on delivery,
the National Privacy Commission, the Consumer Act. Real courier names.

**CONVERT.** Shipping and Returns closes with the one CTA. Privacy and Terms do
not, because pushing a sale at the end of a privacy policy would undo the trust
the page just built. Their conversion job is removing doubt, and the sticky
header keeps `Shop` one click away.

---

## 9. 404

Not in PRD §8, but a live shop needs one or a mistyped link becomes a dead end,
which PRD §9 forbids.

A single centred column: `display-m` headline, one line explaining that the page
moved or never existed, the short rule, and three quiet links to Shop, The
Theory, and Contact, plus one primary `Shop all five`. No illustration.

---

## 10. Section-repetition audit

| Layout family | Home | Shop | Detail | About | Theory | Contact |
|---|---|---|---|---|---|---|
| Split panel | 1.1, 1.8 | 2.4 | 3.2 | 4.2, 4.4 | 5.5 | 6.2 |
| Editorial statement | 1.3 | 2.1 | - | 4.1 | 5.1, 5.6 | 6.1 |
| Hairline strip | 1.2 | 2.2 | - | - | 5.3 | - |
| Asymmetric grid | 1.4 | 2.3 | 3.7 | 4.5 | 5.4 | - |
| Badge row | 1.5 | - | 3.3 | - | - | - |
| Vertical sequence | 1.6 | 2.5 | 3.4 | 4.3 | 5.2 | - |
| Quote row | 1.7 | - | 3.6 | - | - | - |
| Disclosure list | 1.9 | - | 3.5, 3.8 | - | 5.7 | 6.3 |
| Closing band | 1.10 | 2.6 | 3.9 | 4.6 | 5.8 | 6.4 |

Home uses nine families across ten sections. No page repeats a family in
consecutive sections. Split panels never run three in a row anywhere: Home has
seven sections between its two, About has one section between its two, and no
other page uses more than one.
