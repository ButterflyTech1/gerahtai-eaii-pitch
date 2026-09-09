# GerahtAI EAII Pitch Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a Vercel-ready Slidev + Vue interactive animated GerahtAI EAII pitch experience with six content scenes, hero/closing, video modal, PDF export download, platform CTA, and contact.

**Architecture:** Pure Slidev SPA. Thin `slides.md` orchestrates Vue scene components. Story-driven `v-click` / SVG / CSS motion. Persistent nav + video modal. Assets via `public/` + config modules. Slidev `download: true` for PDF.

**Tech Stack:** Slidev, Vue 3, TypeScript, UnoCSS/Slidev defaults + custom CSS variables, Lucide icons (if available via Slidev), Vercel static hosting.

## Global Constraints

- Exact proposal copy only — no invented facts, customers, revenue, validation, or national-scale claims
- Brand colors: `#059669`, `#047857`, `#ECFDF5`, `#0F172A`
- Video path: `public/video/pitch.mp4` (user drop-in; graceful missing state)
- PDF: Slidev export as `gerahtai-eaii-pitch-deck`; CTA at `/downloads/gerahtai-eaii-pitch-deck.pdf`
- Logo from live platform → `public/logo/`
- Do not invent address/phone; use REPLACE_WITH placeholders
- Preserve Slidev keyboard/fullscreen behavior
- Stats must settle at ~60%, ~33%, >85%, 15.5M exactly

## File Structure

```
package.json
slides.md
vercel.json
README.md
components/
  GerahtAIHero.vue
  PitchNav.vue
  AnimatedStat.vue
  ProblemEcosystem.vue
  TechnologyArchitecture.vue
  BusinessModelFlow.vue
  CompetitionLoop.vue
  TeamCards.vue
  EAIIPathway.vue
  ClosingScene.vue
  VideoModal.vue
  PlatformCTA.vue
  ContactSection.vue
  SoilBackground.vue
  AssetGate.vue
  ScientificGrid.vue
src/config/
  contact.ts
  assets.ts
styles/
  index.css
public/
  logo/
  images/
  video/
  downloads/
layouts/
  pitch.vue   # optional wrap with nav
```

---

### Task 1: Scaffold Slidev + brand foundation + assets config

**Files:**
- Create: `package.json`, `slides.md` (minimal), `vercel.json`, `styles/index.css`, `src/config/contact.ts`, `src/config/assets.ts`, `README.md`, `public/**` dirs
- Fetch: logo + platform images into `public/`

- [ ] **Step 1:** Initialize Slidev project with `@slidev/cli` dependencies; set scripts `dev`, `build`, `export`
- [ ] **Step 2:** Add `vercel.json` SPA rewrite; headmatter `theme: default`, `download: true`, `exportFilename: gerahtai-eaii-pitch-deck`, `fonts`, dark canvas
- [ ] **Step 3:** Write CSS variables + global pitch styles; contact + assets config
- [ ] **Step 4:** Download logo.png (and hero/biochar/getin) from platform; create empty video/downloads dirs + `.gitkeep`
- [ ] **Step 5:** Verify `npm run dev` starts

---

### Task 2: Chrome — PitchNav, VideoModal, AssetGate, PlatformCTA, ContactSection

**Files:**
- Create: listed components; wire provide/inject or simple event bus for video open

- [ ] **Step 1:** Implement AssetGate for missing video/PDF
- [ ] **Step 2:** Implement VideoModal (lazy load, controls, no autoplay sound)
- [ ] **Step 3:** Implement PitchNav with slide jumps + emerald active state
- [ ] **Step 4:** PlatformCTA + ContactSection from config
- [ ] **Step 5:** Mount nav globally via layout or App wrapper in slides

---

### Task 3: Hero + Closing scenes

**Files:**
- Create: `GerahtAIHero.vue`, `ClosingScene.vue`, `SoilBackground.vue`, `ScientificGrid.vue`
- Modify: `slides.md`

- [ ] **Step 1:** SoilBackground + ScientificGrid
- [ ] **Step 2:** Hero click sequence per spec
- [ ] **Step 3:** Closing scene + CTAs
- [ ] **Step 4:** Wire as slides 0 and 7

---

### Task 4: Problem scene

**Files:**
- Create: `AnimatedStat.vue`, `ProblemEcosystem.vue`
- Modify: `slides.md`

- [ ] **Step 1:** AnimatedStat settles on exact approved values
- [ ] **Step 2:** ProblemEcosystem disconnected → connected
- [ ] **Step 3:** Wire Problem slide with approved copy

---

### Task 5: Technology + Business scenes

**Files:**
- Create: `TechnologyArchitecture.vue`, `BusinessModelFlow.vue`
- Modify: `slides.md`

- [ ] **Step 1:** TechnologyArchitecture layer build + morph to validation readiness
- [ ] **Step 2:** BusinessModelFlow offerings → circular → GTM
- [ ] **Step 3:** Wire slides 2–3

---

### Task 6: Differentiation + Team + EAII Ask

**Files:**
- Create: `CompetitionLoop.vue`, `TeamCards.vue`, `EAIIPathway.vue`
- Modify: `slides.md`

- [ ] **Step 1:** CompetitionLoop hero closed loop with particles
- [ ] **Step 2:** TeamCards (initials; no invented bios)
- [ ] **Step 3:** EAIIPathway climax + assumption-labeled planning case
- [ ] **Step 4:** Wire slides 4–6

---

### Task 7: Production build, PDF export path, README, visual verification

**Files:**
- Modify: `package.json` scripts, `README.md`
- Verify: `npm run build` (+ download if playwright available)

- [ ] **Step 1:** Document video drop-in + PDF export in README
- [ ] **Step 2:** `npm run build`; ensure Vercel-ready `dist/`
- [ ] **Step 3:** Visually walk every scene; fix overflow/spacing/motion
- [ ] **Step 4:** Confirm no unsupported claims in rendered copy

## Spec coverage checklist

- [x] Hero, 6 content scenes, closing
- [x] Video modal + download path
- [x] PDF via Slidev download
- [x] Platform link, contact, placeholders
- [x] Logo, brand colors, vercel.json
- [x] Responsive + reduced motion notes in styles
- [x] Faithful proposal content
