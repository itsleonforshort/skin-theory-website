# Security Policy

## What this repo is

A static React website. It builds to plain files and has no backend of its own. The risk surface is
the build tooling, the dependencies, and anything an operator puts into environment variables.

## Reporting a vulnerability

Please open a [security advisory](../../security/advisories/new) rather than a public issue, so the
problem is not disclosed before it can be looked at.

Expect a first reply within seven days. This is a personal project rather than a funded product, so
please set expectations accordingly.

## What counts as a vulnerability here

- A credential, key, token or other secret found anywhere in this repo or its history.
- An XSS or injection path in the site itself, particularly in the cart or checkout flow.
- A dependency with a known advisory that this project pins.
- Anything in the documentation that would lead someone to expose a key by following it.

## What does not

- **Placeholder values in `.env.example`.** That file exists to show which variables are needed. It
  holds no real values.

## Secrets and redaction

No key, token or credential value appears in this repo. Real values belong in `.env`, which is
gitignored. `ENV-VARS-USED.md` lists which variables the site reads.

**Personal identifiers are redacted** and replaced with angle-bracket placeholders such as
`<your-n8n-instance>`. If you find one that was missed, that is worth reporting.

**If you fork this and add your own values, check your `.gitignore` before your first commit.**
Anything holding a literal key must stay out of git. Check what you actually staged, not what you
assume was staged.
