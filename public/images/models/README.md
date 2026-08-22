# Model photos

18 slots, one per row in `design/MODEL-SHOT-LIST.md`. Every one is placed for a
reason. Nothing here is decoration.

**These files are not committed to git.** They are downloaded on demand, so the
repo stays small and the licence stays with the source.

To fill them:

1. Get a free Pexels API key at https://www.pexels.com/api/
2. Put it in `.env` as `PEXELS_API_KEY=your_key_here`
3. Run `python tools/fetch-model-photos.py`

To swap one photo you do not like:

```
python tools/fetch-model-photos.py home-hero --pick 3
```

Credits are written to `CREDITS.md` and `credits.json` automatically.

The site does not break when these files are missing. Any section without its
photo falls back to a finished type-only layout, as PRD section 12 requires.
