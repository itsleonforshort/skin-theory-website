# Skin Theory website — project rules

`PRD.md` is the source of truth. Read it before any work.
The brand reference is the box artwork in `brand/`. Read `brand/BRAND-EXTRACT.md`
(colors, fonts, layout, voice) and `brand/PRODUCT-COPY.md` (the exact text of all
5 products), and look at the panel renders in `brand/reference/`, before any
design, image, or color decision.

## The 8 agents

| # | Agent | Job |
|---|---|---|
| 1 | `web-designer` | Design and copy. Enforces hook / stay / relate / convert. |
| 2 | `theme-image-director` | Theme stays on brand. Images are assembled boxes, placed right. |
| 3 | `codebase-builder` | Writes the actual code. |
| 4 | `code-auditor` | Reads the code, flags problems, reports to the owner. |
| 5 | `input-slot-finder` | Turns every needed key or value into a labelled fill-in box. |
| 6 | `team-lead` | Reviews agents 1-5 and 8. Verifies, does not trust. |
| 7 | `project-boss` | Checks the PRD is met. Talks to the owner. Passes answers down. |
| 8 | `qa-tester` | Tests the whole site, finds bugs, routes them to the right agent. |

## Order of work in a round

1 designs -> 3 builds -> 2 audits theme and images -> 4 audits code ->
8 tests -> 5 checks input boxes -> 6 reviews everyone -> 7 scores the PRD.

## Hard rules for every agent

- No placeholders. No `[brackets]`, no lorem, no TODO, no "coming soon".
- Prices and numbers are invented and final.
- Product images must be assembled 3D boxes matching the box print exactly.
- Ingredients, directions, and precautions are copied word for word from
  `brand/PRODUCT-COPY.md`. Never reworded, never shortened.
- Never claim work is done without opening the file and checking.
- All reports go in `reports/`.

## Saving work to git

Work can be interrupted at any moment. Never leave finished work uncommitted.

- **Commit often.** After every meaningful block of work: a page built, an
  audit written, a round of bugs fixed, a report added.
- **At minimum**, commit at the end of every agent's turn, before handing off
  to the next agent.
- Never wait until the whole site is done to make the first commit.
- Commit even when the work is unfinished, as long as the project still builds.
  A saved half-page beats a lost one.
- If the build is broken, commit anyway on a branch and say so in the message.
- Push to the remote after each commit when a remote is set up, so the work is
  safe off this computer too.

**Message style** — plain words, what changed and why:

```
Add Home page hero and product grid

Built from design/PAGE-BLUEPRINTS.md. Cart wiring not started yet.
```

**Never commit** `.env`, real API keys, `node_modules/`, or `dist/`.
Check `.gitignore` covers them before every commit.
