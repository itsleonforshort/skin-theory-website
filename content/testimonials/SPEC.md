# Testimonial spec — read this before writing a single review

Two completely separate sets. Never mix them, never reuse one as the other.

---

## SET A — product page reviews (the customer voice)

**60 reviews per product.** They go on that product's page only.

These must read like real reviews on Shopee, Lazada and TikTok Shop.
Real Filipino buyers typing on a phone. Not marketing copy. Not demo text.

### Language mix, per product
| Share | Language |
|---|---|
| 45% | Taglish — Tagalog and English mixed inside one sentence, the normal way |
| 20% | Tagalog |
| 15% | English — Filipino English, not American English |
| 8% | Bisaya / Cebuano |
| 6% | Ilocano |
| 6% | Muslim Filipino — Maranao, Tausug, Maguindanaon speakers writing in Tagalog or Taglish. Some open with "Assalamu alaikum". Some mention halal-friendly concerns. |

### How real buyers actually type — use all of these
- run-on sentences, missing commas
- "po", "opo", "sis", "mars", "mamsh", "ate", "sana all", "grabe", "sulit", "legit"
- repeated letters for feeling: "sobrang ganda talagaaa"
- one word suddenly in ALL CAPS
- emoji the way buyers really use them. Sometimes three in a row. Sometimes none at all.
- starting with delivery talk before product talk, because that is what people do
- a sentence that wanders off topic
- some reviews in lowercase with no punctuation at all
- occasional real typos

### Length
About 45% medium (2 to 4 sentences), 40% long (5 to 9 sentences, a small story),
15% short (one line). Never uniform.

### Names — how real buyers name themselves
Mix all of these, and never repeat a name anywhere in the project:
proper full names, first name plus surname initial ("Jhonalyn D."), nicknames
("Ate Baby"), handle style ("mhaey_23", "xxjeng"), masked ("R***a M."),
"Mommy Cha", "Tita Len", initials only, names with numbers.

### Truthfulness rules
- Every review must be tied to the **real ingredients and claims of that product**.
  Read `brand/PRODUCT-COPY.md` first.
- Claims stay hedged the way the boxes hedge them: "helps brighten",
  "radiant-looking", "medyo napansin ko". Never a cure. Never a medical promise.
- No dermatologist endorsements. No FDA or regulator approval numbers.

### Realism
Say how long they used it. Name a skin type or concern that matches the actual
actives. Mention packaging, bubble wrap, seller reply, delivery speed sometimes.
Mention repeat orders, or buying for a sister or a husband.
A believable few are lukewarm: "okay lang", "hindi ko masyado napansin agad pero
mabango naman".

Ratings: about 70% five star, 22% four star, 8% three star. No 1 or 2 star.
Dates spread across the last 10 months, ending 2026-08-20.

### File format
`content/testimonials/<slug>.json`

```json
{
  "product": "bee-wash",
  "note": "Launch content written for the shop. Not collected from real buyers. See PRD section 13.",
  "reviews": [
    {
      "id": "bw-001",
      "name": "Jhonalyn D.",
      "rating": 5,
      "date": "2026-06-14",
      "language": "taglish",
      "length": "medium",
      "verifiedPurchase": true,
      "skinConcern": "oily t-zone",
      "weeksUsed": 3,
      "body": "the review text",
      "helpfulCount": 12
    }
  ]
}
```

`language`: `tagalog` | `taglish` | `english` | `bisaya` | `ilocano` | `muslim-filipino`
`length`: `short` | `medium` | `long`

Id prefixes: `bw-` Bee Wash, `ck-` Coco Kojic Gluta, `gs-` Gluta Soya,
`sa-` Salicylic, `ni-` Niacinamide Serum. Zero padded to 3 digits.

---

## SET B — site-wide quotes (the professional voice)

**14 quotes.** These appear on the Home proof section and the Shop page.
They never appear on a product page.

The exact opposite of Set A. Calm, edited, clean English, in the brand's own
clinical tone. They read like pull quotes in a magazine.

- 1 to 2 sentences. Never more than 30 words.
- Correct spelling and grammar. No emoji. No slang. No "po". No exclamation marks.
- Attribution is professional: full name plus a short descriptor, such as
  "Nurse, Davao City", "Makeup artist", "Customer since 2025".
- Claims stay hedged. No dermatologist endorsement, no regulator approval.

`content/testimonials/site-wide.json`

```json
{
  "set": "site-wide",
  "note": "Launch content written for the shop. Not collected from real buyers. See PRD section 13b.",
  "quotes": [
    { "id": "sw-01", "name": "Full Name", "descriptor": "Nurse, Davao City", "quote": "the quote", "product": "bee-wash" }
  ]
}
```

`product` may be null when the quote is about the brand rather than one product.

---

## Process rules for every writer

- **Write in batches of 20 and save the file after each batch.** Work can be
  interrupted. A saved batch of 20 beats a lost batch of 60.
- Validate the file parses before moving on:
  `python -c "import json;json.load(open('content/testimonials/<slug>.json'))"`
- **Do not run any git command.** The orchestrator commits.
- Do not touch `src/`, `design/`, or `reports/`.
