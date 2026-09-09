# GerahtAI EAII Pitch Experience

Interactive animated pitch website built with **Slidev + Vue** for the EAII Startup Support Program — Round 2.

Live platform: https://gerahtai-frontend.onrender.com/

## Dependencies

```bash
npm install
```

If `npm install` fails due to network timeouts, retry when connectivity is stable. This project expects `@slidev/cli` ^52.19.

For PDF generation:

```bash
npm i -D playwright-chromium
npx playwright install chromium
npm run export
```

## Quick start

```bash
npm install
npm run dev
```

Open the local Slidev URL (default `http://localhost:3030`).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local presentation |
| `npm run build` | Static SPA → `dist/` (PDF download links to `/downloads/gerahtai-eaii-pitch-deck.pdf`) |
| `npm run build:pdf` | Build SPA + generate PDF (requires `playwright-chromium`) |
| `npm run export` | Export PDF to `public/downloads/gerahtai-eaii-pitch-deck.pdf` (requires Playwright) |

## Board share links (after Vercel deploy)

Once deployed to `https://YOUR-PROJECT.vercel.app`:

| What to send the board | URL |
|------------------------|-----|
| **Pitch video page** | `https://YOUR-PROJECT.vercel.app/watch.html` |
| Interactive animated deck | `https://YOUR-PROJECT.vercel.app/` |
| PDF deck download | `https://YOUR-PROJECT.vercel.app/downloads/gerahtai-eaii-pitch-deck.pdf` |

Local video page: http://localhost:3040/watch.html

### YouTube unlisted (recommended)

Heavy video files are **not** stored in this repo (Vercel-friendly).

1. Upload the pitch to YouTube as **Unlisted**
2. Copy the video ID (after `v=`)
3. Put it in `.env`:

```bash
VITE_YOUTUBE_VIDEO_ID=YOUR_ID_HERE
```

Also paste the same ID into `public/watch.html` (`YOUTUBE_VIDEO_ID = '...'`) so the static board page works without a rebuild.

4. Rebuild / redeploy

Watch Pitch in the deck embeds YouTube. No large `.mp4` / `.mov` in `public/video/`.

### Pitch deck PDF

Prefer Slidev’s native export:

```bash
npm run build:pdf
# or
npm run export
```

Stable download path expected by the UI:

```text
public/downloads/gerahtai-eaii-pitch-deck.pdf
```

If you already have an approved proposal PDF, copy it to that path (do not invent content).

### Logo / imagery

Official logo lives at:

```text
public/logo/gerahtai-logo.png
```

Platform stills (hero / biochar / field) are under `public/images/`.

## Contact placeholders

Edit `src/config/contact.ts`:

- `email` — already set to `butterflytechco@gmail.com`
- `address` / `phone` / `phoneSecondary` — replace `REPLACE_WITH_…` values when official

## Deploy to Vercel

1. Push this repo
2. Import in Vercel (framework preset: Other / Vite)
3. Build command: `npm run build` (or `npm run build:pdf` if Playwright is available in the build image)
4. Output directory: `dist`
5. `vercel.json` already rewrites to `index.html` for SPA routing

## Content fidelity

All spoken/written claims must stay within the approved GerahtAI EAII proposal. Do not invent customers, revenue, validation results, or national-scale proof.
