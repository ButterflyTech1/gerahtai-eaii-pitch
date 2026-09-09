# GerahtAI EAII Pitch Experience — Design Spec

**Date:** 2026-09-09  
**Product:** Interactive animated pitch website (Slidev + Vue) for EAII Startup Support Program — Round 2  
**Company:** Butterfly Tech / GerahtAI  
**Platform:** https://gerahtai-frontend.onrender.com/

## 1. Purpose

Build a premium scientific AI pitch experience — not a PowerPoint conversion. The audience should feel measured, evidence-aware, Ethiopian-in-subject-matter, and credible. Visual sophistication is encouraged; factual claims must stay within the approved proposal text only.

**Non-goals:** Invented customers, partnerships, validation results, revenue, national-scale validation, or any strengthened claims beyond the approved content.

## 2. Decisions locked

| Topic | Decision |
|-------|----------|
| Architecture | Pure Slidev scenes (Approach 1) |
| Video / PDF UI | Build complete UI now |
| Video file | User-supplied drop-in at `public/video/pitch.mp4` (+ poster); graceful missing state until present |
| Pitch deck PDF | Slidev native build export (`download: true`, export filename `gerahtai-eaii-pitch-deck`); expose stable public URL under `public/downloads/gerahtai-eaii-pitch-deck.pdf` (or build copy thereto). No fabricated PDF content |
| Logo | Pull official asset from live platform (`/logo.png`) into `public/logo/` |
| Imagery | Platform assets + small set of scientific/soil photos only where diagrams cannot carry the beat |
| Content source of truth | Approved proposal copy embedded in the brief |

## 3. Experience architecture

### 3.1 Scene order

| Index | Scene | Proposal role |
|-------|--------|----------------|
| 0 | Hero / Opening | Landing / documentary open (not a proposal slide) |
| 1 | Problem + Market Opportunity | Content slide 01 |
| 2 | Traction + Technology Readiness | Content slide 02 |
| 3 | Business Model + GTM | Content slide 03 |
| 4 | Competition + Defensibility | Content slide 04 |
| 5 | Team | Content slide 05 |
| 6 | Why EAII / The Ask | Content slide 06 |
| 7 | Closing + Contact / CTAs | Closing state (not a proposal slide) |

**Pitch video** is a modal/overlay reachable from nav, hero, and closing — not an eighth proposal slide.

### 3.2 Persistent chrome

- Minimal nav: GERAHTAI · PROBLEM · TECHNOLOGY · BUSINESS · DIFFERENTIATION · TEAM · THE ASK · WATCH PITCH · PLATFORM
- Emerald active section highlight (`#059669`)
- Actions: Watch Pitch, Open Platform (new tab), Download Pitch Deck, Download Pitch Video
- Preserve native Slidev controls: arrows, space, click, fullscreen

### 3.3 Aspect / responsive

- Primary: 16:9, target 1920×1080
- Desktop-first presentation mode
- Mobile: usable reflow of scene layouts (not naive shrink-only)

## 4. Brand system

| Token | Hex | Use |
|-------|-----|-----|
| Primary emerald | `#059669` | Accents, AI highlights, numbers, flows, buttons, active nav |
| Dark emerald | `#047857` | Depth, hover, secondary states |
| Soft emerald | `#ECFDF5` | Soft evidence cards, badges, selected states |
| Deep slate | `#0F172A` | Dominant background |
| Neutrals | white / slate grays | Supporting text and structure |

**Typography:** Expressive scientific sans (not Inter/Roboto/Arial/system defaults). Prefer a clean UI sans (e.g. DM Sans or Instrument Sans) plus restrained display treatment for brand/titles.

**Motifs (subtle):** scientific grid, particle dust, SVG connectors, confidence/uncertainty readouts, sample markers — always subordinate to story.

**Logo:** Official file from platform; do not recreate, distort, or change proportions. Subtle animate only on open/close.

## 5. Component architecture

Thin `slides.md` orchestrates scenes; logic lives in Vue components.

| Component | Responsibility |
|-----------|----------------|
| `GerahtAIHero.vue` | Opening reveal sequence |
| `PitchNav.vue` | Section jump + Watch Pitch + Platform |
| `AnimatedStat.vue` | Reveal/count to exact approved figures |
| `ProblemEcosystem.vue` | Five disconnected systems → GerahtAI connect |
| `TechnologyArchitecture.vue` | Engine layers, AI↔Lab, scientist, control |
| `BusinessModelFlow.vue` | Offerings → circular layer → GTM path |
| `CompetitionLoop.vue` | Competitor gaps → closed defensibility loop |
| `TeamCards.vue` | Core team cards (initials if no photos) + advisor needs |
| `EAIIPathway.vue` | Prototype → validation → pilots → commercial readiness |
| `ClosingScene.vue` | Closing question, brand, CTAs |
| `VideoModal.vue` | Lazy player; play/pause/seek/fullscreen/volume; no autoplay with sound |
| `PlatformCTA.vue` | External platform link |
| `ContactSection.vue` | Company + contact |
| `SoilBackground.vue` | Shared subtle soil/particle atmosphere |
| `AssetGate.vue` | Graceful missing-asset UI for video (and PDF if export not yet available in dev) |
| `ScientificGrid.vue` | Optional shared grid motif |

**Config modules**

- `src/config/contact.ts` — `email: butterflytechco@gmail.com`; `address` / `phone` / `phoneSecondary` placeholders (`REPLACE_WITH_…`); mailto/tel links when values are real
- `src/config/assets.ts` — logo, video, poster, PDF, platform URL paths

Do not invent address or phone numbers.

## 6. Content & motion (story beats)

Animation model: voice-over → visual appears → object moves → number reveals → diagram connects → morph to next concept. Aim **3–8 meaningful clicks** per major scene. Easing: ease-out / controlled cubic-bezier. Avoid bounce, cartoon spin, random zoom.

### 6.0 Hero

Start nearly empty (soil texture / particles) → logo → **GERAHTAI** → “AI-assisted soil intelligence for Ethiopian agriculture” → diagnosis→restoration subtitle → EAII Round 2 → ask teaser (HPC + soil-data partnerships + lab validation + controlled field pilots) → Butterfly Tech / GerahtAI.

### 6.1 Problem + Market Opportunity

Exact approved copy and stats only:

- ~60% workforce in agriculture  
- ~33% GDP from agriculture  
- >85% land reported degraded  
- 15.5M quintals fertilizer imported  

Beats: soil visual → degradation → intelligence problem → four stats settle exactly → unserved gap (five nodes disconnected) → GerahtAI connects → local soil intelligence + validation-aware system. Cite approved sources in footer treatment.

### 6.2 Traction + Technology Readiness

Message: functional prototype; next step independent Ethiopian validation — **not** national-scale validated.

Beats: GerahtAI Engine → AI Output → Evidence → Validation → Control → AI detail chips → AI↔Lab → scientist review → controlled amendment → technical assets → “functional prototype” morphs to “ready for structured validation” → next-proof milestone clearly future (Ethiopian lab samples + controlled field pilots + measured outcomes).

### 6.3 Business Model + GTM

Beats: Soil Intelligence → Restoration Planning → Biological Inputs → circular layer (organic waste → compost/biochar → controlled use → soil restoration) → beachhead GTM path motion → final: service-led entry → controlled restoration → recurring model.

### 6.4 Competition + Defensibility

Beats: five ecosystems individually + limitations → GerahtAI → connect → hero closed loop with particles: Local Data → AI → Lab → Scientist → Controlled Intervention → Field Outcome → Validated Data ↺ Local Data. Differentiation stack uses exact approved phrases.

### 6.5 Team

Beats: GerahtAI → Bisrat Seyoum (CEO / strategy) → Tomas Asefa (software engineering, development, research) → advisors needed: soil science, agronomy, lab QA, waste processing. No invented bios or photos.

### 6.6 Why EAII / The Ask

Strategic climax. Horizontal pathway: Working Prototype → Validation → Controlled Pilots → Commercial Readiness. EAII asks attach (HPC/GPU, data, AI/ML, lab, field pilots, investor/grant). Milestones build one-by-one. 3-year planning case labeled assumption-based (“Numbers remain assumption-based until pilots close”). Final strongest state: Prototype → validated pilot system → commercial readiness.

### 6.7 Closing

“What does this soil actually need?” → GerahtAI brand → EAII Round 2 → Butterfly Tech / GerahtAI → Open Platform CTA → contact strip. Minimal cinematic field/soil texture.

## 7. Media & downloads

### 7.1 Video

- Path: `public/video/pitch.mp4`
- Poster: `public/video/poster.jpg` (brand-styled; may ship as designed placeholder artwork without fabricating pitch footage)
- Lazy-load only when modal opens
- Download Pitch Video button targets the same file
- Missing file → AssetGate message + README drop-in steps
- Architecture ready to point at Vercel Blob later via `assets.ts`

### 7.2 PDF

- Prefer Slidev `download: true` with `exportFilename: gerahtai-eaii-pitch-deck`
- Public CTA: Download Pitch Deck → stable path `public/downloads/gerahtai-eaii-pitch-deck.pdf` (generated/copied at build when export runs)
- Dev without export: graceful note that PDF is produced on production build / `slidev build --download`

### 7.3 Logo & imagery

- Fetch `https://gerahtai-frontend.onrender.com/logo.png` → `public/logo/`
- Optionally use platform stills (`hero.jpg`, `biochar.jpg`, `getin.jpg`) for atmospheric narrative
- Additional scientific/soil photos only when a diagram cannot carry the beat

## 8. Contact

```ts
const CONTACT = {
  company: 'Butterfly Tech / GerahtAI',
  email: 'butterflytechco@gmail.com',
  address: 'REPLACE_WITH_OFFICIAL_ADDRESS',
  phone: 'REPLACE_WITH_OFFICIAL_PHONE',
  phoneSecondary: 'REPLACE_WITH_OFFICIAL_PHONE_SECONDARY',
}
```

Render placeholders visibly as placeholders until replaced; do not invent values.

## 9. Deployment & performance

- Scaffold Slidev SPA in workspace root (currently empty)
- `vercel.json` SPA rewrites to `index.html`
- `npm run build` produces static `dist/`
- CSS transforms/opacity preferred; SVG over heavy bitmaps; compressed images; no video in JS bundle
- Respect `prefers-reduced-motion`: show full content without requiring motion

## 10. Verification bar

Not done until:

- Every scene opened visually (spacing, hierarchy, overflow, timing)
- Stats settle on exact approved figures
- No unsupported claims
- Nav, platform link, email link, video modal, PDF download path, placeholders work
- Production build succeeds and is Vercel-ready
- Motion review: each animation supports narration

## 11. Project structure (target)

```
gerhat_pitch/
├── slides.md
├── package.json
├── vite.config.ts          # if needed by Slidev setup
├── vercel.json
├── README.md               # drop-in process for video (+ PDF notes)
├── components/
├── src/config/
├── public/
│   ├── logo/
│   ├── images/
│   ├── video/              # pitch.mp4, poster.jpg
│   └── downloads/          # gerahtai-eaii-pitch-deck.pdf
├── styles/
└── docs/superpowers/specs/
```

## 12. Out of scope

- Fabricating pitch video or proposal PDF bytes
- Inventing contact address/phone
- Recreating/distorting the official logo
- Separate hybrid marketing SPA (Approach 2) or full custom presentation engine (Approach 3)
