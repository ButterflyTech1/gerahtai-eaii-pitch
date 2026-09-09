<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { ASSETS } from '../src/config/assets'
import ScientificGrid from './ScientificGrid.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const offerings = [
  {
    title: '1. Soil Intelligence',
    items: ['commissioned studies', 'lab-linked analysis', 'AI reports', 'institutional dashboards'],
  },
  {
    title: '2. Restoration Planning',
    items: ['field recommendations', 'scientist review', 'monitoring', 'controlled trials'],
  },
  {
    title: '3. Biological Inputs',
    items: ['compost', 'biochar', 'amendments', 'soil-specific input programs'],
  },
]
</script>

<template>
  <div class="pitch-scene business">
    <div class="photo-bleed" :style="{ backgroundImage: `url(${ASSETS.images.biochar})` }" aria-hidden="true" />
    <ScientificGrid :opacity="0.1" />

    <div class="content">
      <p class="eyebrow">Business Model + Go-To-Market</p>
      <h2 class="headline">
        Start with paid soil intelligence; expand
        into <span class="accent">verified restoration programs</span>
      </h2>
      <p class="lede">
        Intelligence creates the customer relationship. Controlled restoration and biological inputs
        create the long-term operating model.
      </p>

      <div class="offerings">
        <div
          v-for="(o, i) in offerings"
          :key="o.title"
          class="offer soft-panel"
          :class="{ on: c >= i + 1 }"
        >
          <h3>{{ o.title }}</h3>
          <ul>
            <li v-for="item in o.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div v-show="c >= 4" class="circular fade-rise">
        <p class="eyebrow">Circular layer</p>
        <div class="loop">
          <span>Organic waste</span>
          <span class="arrow">↓</span>
          <span>Compost / Biochar</span>
          <span class="arrow">↓</span>
          <span>Controlled use</span>
          <span class="arrow">↓</span>
          <span>Soil restoration</span>
        </div>
        <p class="note">
          Organic waste becomes feedstock for compost,
          biochar and biological soil inputs — but only after
          scientific fit and controlled use are proven.
        </p>
      </div>

      <div v-show="c >= 5" class="gtm fade-rise">
        <p class="eyebrow">Beachhead GTM</p>
        <div class="path">
          <span :class="{ on: c >= 5 }">Government and institutional pilots</span>
          <span class="arrow">→</span>
          <span :class="{ on: c >= 6 }">Commercial farms and NGOs</span>
          <span class="arrow">→</span>
          <span :class="{ on: c >= 6 }">Recurring monitoring + input programs</span>
        </div>
      </div>

      <p v-show="c >= 7" class="logic fade-rise">
        <span class="eyebrow">Business logic</span><br />
        <strong>Service-led entry</strong> → <strong>controlled restoration</strong> → <strong>recurring model</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
.photo-bleed {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.18;
  filter: saturate(0.75);
}
.photo-bleed::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #0F172A 20%, rgba(15, 23, 42, 0.88) 55%, rgba(15, 23, 42, 0.7));
}
.content { position: relative; z-index: 1; }
.headline {
  margin: 0.35rem 0 0;
  font-size: clamp(1.25rem, 2.5vw, 1.9rem);
  max-width: 40rem;
  line-height: 1.25;
}
.lede {
  margin: 0.7rem 0 1rem;
  color: var(--geraht-muted);
  max-width: 42rem;
  font-size: 0.92rem;
  line-height: 1.45;
}
.offerings {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}
.offer {
  padding: 0.9rem 1rem;
  opacity: 0.2;
  transform: translateY(14px) scale(0.98);
  transition: opacity 0.5s var(--geraht-ease), transform 0.5s var(--geraht-ease);
}
.offer.on {
  opacity: 1;
  transform: none;
}
.offer h3 {
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
  color: var(--geraht-emerald-soft);
}
.offer ul {
  margin: 0;
  padding-left: 1rem;
  color: var(--geraht-muted);
  font-size: 0.8rem;
  line-height: 1.45;
}
.circular { margin-top: 1rem; }
.loop {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin: 0.45rem 0;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}
.arrow { color: var(--geraht-emerald); }
.note {
  margin: 0.35rem 0 0;
  max-width: 40rem;
  color: var(--geraht-muted);
  font-size: 0.82rem;
  line-height: 1.45;
}
.gtm { margin-top: 1rem; }
.path {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.45rem;
}
.path > span:not(.arrow) {
  padding: 0.45rem 0.7rem;
  border-radius: 0.45rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  font-size: 0.78rem;
  opacity: 0.35;
  transition: opacity 0.45s, border-color 0.45s, transform 0.45s;
}
.path > span.on {
  opacity: 1;
  border-color: rgba(5, 150, 105, 0.5);
  transform: translateX(0);
}
.logic {
  margin-top: 1.1rem;
  font-size: 1rem;
  line-height: 1.5;
}
@media (max-width: 900px) {
  .offerings { grid-template-columns: 1fr; }
}
</style>
