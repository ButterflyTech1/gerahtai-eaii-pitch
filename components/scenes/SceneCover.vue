<template>
  <div class="cover">
    <img
      class="cover__photo"
      src="/images/hero.jpg"
      alt=""
      decoding="async"
      fetchpriority="high"
    />
    <div class="cover__veil" aria-hidden="true" />
    <div class="g-grid cover__grid" aria-hidden="true" />

    <div class="cover__banner" aria-live="polite">
      <span class="cover__banner-label">Interactive slide deck</span>
      <span class="cover__banner-sep" aria-hidden="true">·</span>
      <span>Press</span>
      <kbd class="cover__key cover__key--sm" aria-hidden="true">→</kbd>
      <span>or</span>
      <kbd class="cover__key cover__key--sm cover__key--wide">Space</kbd>
      <span>to start the presentation</span>
    </div>

    <div class="cover__inner">
      <GerahtAILogo :size="52" />

      <h1 class="cover__brand">GERAHTAI</h1>

      <p class="cover__tag">
        AI-assisted soil intelligence<br />
        for Ethiopian agriculture
      </p>

      <p class="cover__sub">
        From soil diagnosis to verified restoration: laboratory-aware
        AI, scientist review, controlled amendment matching, and
        field-trial traceability.
      </p>

      <p class="cover__program">EAII Startup Support Program — Round 2</p>

      <div class="cover__ask g-panel-strong">
        <div class="g-kicker">The ask</div>
        <p>
          HPC + soil-data partnerships + lab validation +
          controlled field pilots
        </p>
      </div>

      <p class="cover__company">Butterfly Tech / GerahtAI</p>

      <div class="cover__actions">
        <button class="btn-emerald" type="button" @click="start">Start presentation →</button>
        <button class="btn-ghost" type="button" @click="openVideo">Watch the Pitch</button>
        <a class="btn-ghost" href="/watch.html">Board video link</a>
        <a class="btn-ghost" href="/downloads/gerahtai-eaii-pitch-deck.pdf" download="gerahtai-eaii-pitch-deck.pdf">
          Download Pitch Deck (PDF)
        </a>
      </div>
    </div>

    <div class="cover__hint" aria-hidden="true">
      <kbd class="cover__key">→</kbd>
      <span class="cover__hint-label">Next slide</span>
    </div>
  </div>
</template>

<script setup>
import { useNav } from '@slidev/client'

const { next } = useNav()

function openVideo() {
  window.__gerahtOpenVideo?.()
}

function start() {
  next()
}
</script>

<style scoped>
.cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  background: #0F172A;
}
.cover__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  background: #0F172A;
}
.cover__veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      105deg,
      rgba(15, 23, 42, 0.94) 0%,
      rgba(15, 23, 42, 0.82) 38%,
      rgba(15, 23, 42, 0.45) 62%,
      rgba(15, 23, 42, 0.3) 100%
    ),
    radial-gradient(ellipse at 18% 85%, rgba(5, 150, 105, 0.22), transparent 55%);
}
.cover__grid {
  z-index: 1;
  opacity: 0.55;
}
.cover__inner {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 108px 80px 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  box-sizing: border-box;
}
.cover__banner {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  max-width: min(920px, calc(100% - 48px));
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(5, 150, 105, 0.45);
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(12px);
  color: #E2E8F0;
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.cover__banner-label {
  color: #34d399;
}
.cover__banner-sep {
  opacity: 0.45;
}
.cover__brand {
  margin: 18px 0 0;
  font-size: 64px;
  font-weight: 750;
  letter-spacing: 0.08em;
  line-height: 0.95;
  color: #F8FAFC;
}
.cover__tag {
  margin-top: 18px;
  font-size: 24px;
  line-height: 1.3;
  color: #E2E8F0;
}
.cover__sub {
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.5;
  color: #CBD5E1;
  max-width: 520px;
}
.cover__program {
  margin-top: 22px;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #34d399;
  font-weight: 650;
}
.cover__ask {
  margin-top: 18px;
  padding: 14px 16px;
  max-width: 500px;
}
.cover__ask p {
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.4;
  color: #ECFDF5;
}
.cover__company {
  margin-top: 14px;
  font-size: 13px;
  color: #94A3B8;
}
.cover__actions {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.btn-emerald,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
}
.btn-emerald {
  background: #059669;
  color: white;
  border: none;
}
.btn-emerald:hover { background: #047857; }
.btn-ghost {
  background: rgba(15, 23, 42, 0.45);
  color: #E2E8F0;
  border: 1px solid rgba(236, 253, 245, 0.28);
}
.btn-ghost:hover {
  border-color: #059669;
  color: #ECFDF5;
}
.cover__hint {
  position: absolute;
  right: 80px;
  bottom: 36px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #CBD5E1;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 650;
}
.cover__hint-label {
  opacity: 0.85;
}
.cover__key {
  display: inline-grid;
  place-items: center;
  min-width: 42px;
  height: 42px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(5, 150, 105, 0.55);
  background: rgba(5, 150, 105, 0.16);
  color: #ECFDF5;
  font-size: 20px;
  font-weight: 700;
  animation: nudge 1.6s ease-in-out infinite;
}
.cover__key--wide {
  font-size: 11px;
  letter-spacing: 0.12em;
}
.cover__key--sm {
  min-width: 34px;
  height: 34px;
  font-size: 16px;
  padding: 0 10px;
}
@keyframes nudge {
  0%, 100% { transform: translateX(0); box-shadow: 0 0 0 rgba(5, 150, 105, 0); }
  50% { transform: translateX(6px); box-shadow: 0 0 18px rgba(5, 150, 105, 0.35); }
}
@media (max-width: 900px) {
  .cover__inner { padding: 120px 44px 96px; }
  .cover__banner { top: 64px; border-radius: 16px; }
  .cover__hint { left: 44px; right: 44px; bottom: 24px; justify-content: flex-start; flex-wrap: wrap; }
}
</style>
