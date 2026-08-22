<!--
  ENVIRONMENT VARIABLES USED BY THE SKIN THEORY SITE
  Owner: Agent 3, codebase-builder. Read by Agent 5, input-slot-finder.

  VITE_WEB3FORMS_KEY
    Required for: the contact form and the checkout order submission.
    Read in:      src/lib/web3forms.ts
    Type:         string, the Web3Forms access key
    Where to get it: https://web3forms.com, enter the shop inbox address,
                     and the key arrives by email. It is free.
    If it is empty: the site still builds, still runs, and never throws. The
                    contact form and the newsletter show a calm line naming the
                    real email address and phone number instead of sending, and
                    checkout records the order in the browser and says plainly
                    that no confirmation email went out.
    Anything else reading import.meta.env: nothing. This is the only one.
-->

# Environment variables used

Every `import.meta.env` value this codebase reads is listed here. Agent 5 turns
each row into a labelled fill-in box for the owner.

| Variable | Required | Used by | Read in |
|---|---|---|---|
| `VITE_WEB3FORMS_KEY` | No, but forms cannot send without it | Contact form, footer newsletter, checkout order submission | `src/lib/web3forms.ts` |
| `PEXELS_API_KEY` | No, but the model photos cannot download without it | The photo fetcher tool only. Never sent to the browser. | `tools/fetch-model-photos.py` |

## VITE_WEB3FORMS_KEY

**What it is.** The access key for Web3Forms, the service that takes a form on a
static site and emails it to the shop inbox. PRD §7 fixes Web3Forms as the form
handler.

**How the owner gets one.** Go to web3forms.com, type the address that should
receive the messages, and the key arrives in that inbox. It costs nothing.

**Where it goes.** In a file called `.env` in the project root:

```
VITE_WEB3FORMS_KEY=paste-the-key-here
```

`.env` is already in `.gitignore` and must never be committed.

**What happens when it is missing.** Nothing crashes. `src/lib/web3forms.ts`
returns a `not-configured` result and every caller shows a plain message with
the real email address and phone number:

- The contact form keeps everything typed and says the form is not connected
  yet.
- The footer newsletter says the same.
- Checkout still records the order and takes the buyer to the confirmation
  page, but that page says honestly that no confirmation email was sent and
  that nothing has been charged.

**Type safety.** The variable is declared in `src/vite-env.d.ts`, so
TypeScript knows about it and `npx tsc --noEmit` stays clean.

## PEXELS_API_KEY

**What it is.** A free key for Pexels, the stock photo library the 18 model
photos in `design/MODEL-SHOT-LIST.md` are downloaded from.

**It is not a website variable.** It has no `VITE_` prefix on purpose. Vite only
ships `VITE_`-prefixed values to the browser, so this key never reaches a
visitor and never appears in `dist/`. It is read once, on this computer, by
`tools/fetch-model-photos.py`.

**How the owner gets one.** Sign up at https://www.pexels.com/api/. It is free
and takes about a minute.

**Where it goes.** The same `.env` file:

```
PEXELS_API_KEY=paste-the-key-here
```

**What happens when it is missing.** The website is completely unaffected. Only
the photo download tool stops, and it prints step by step instructions instead
of an error. Any page section whose photo has not been downloaded falls back to
a finished type-only layout, so nothing looks broken.

## Notes for Agent 5

- There are two keys today. Neither is required for the site to build or run.
- If a card payment provider is added later, its publishable key becomes the
  second variable, and it must be added to this file at the same time.
- Nothing in this codebase reads a secret at build time other than the variable
  above. No key is written into any source file.
