<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { ASSETS } from '../src/config/assets'
import SoilBackground from './SoilBackground.vue'
import ScientificGrid from './ScientificGrid.vue'
import PlatformCTA from './PlatformCTA.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

function openVideo() {
  ;(window as any).__gerahtOpenVideo?.()
}
</script>

<template>
  <div class="pitch-scene hero">
    <SoilBackground :intensity="0.42" />
    <ScientificGrid :opacity="0.12" />

    <div class="content">
      <img
        v-show="c >= 1"
        :src="ASSETS.logo"
        alt="GerahtAI logo"
        class="logo fade-rise"
        width="72"
        height="72"
      />

      <h1 v-show="c >= 2" class="brand fade-rise">GERAHTAI</h1>

      <p v-show="c >= 3" class="tagline fade-rise">
        AI-assisted soil intelligence<br />for Ethiopian agriculture
      </p>

      <p v-show="c >= 4" class="subtitle fade-rise">
        From soil diagnosis to verified restoration:
        laboratory-aware AI, scientist review,
        controlled amendment matching,
        and field-trial traceability.
      </p>

      <p v-show="c >= 5" class="eyebrow program fade-rise">
        EAII Startup Support Program — Round 2
      </p>

      <div v-show="c >= 6" class="ask fade-rise">
        <p class="eyebrow">The Ask</p>
        <p class="ask-line">
          HPC + soil-data partnerships
          <span>+</span> lab validation
          <span>+</span> controlled field pilots
        </p>
        <p class="company muted">Butterfly Tech / GerahtAI</p>
      </div>

      <div v-show="c >= 7" class="cta-row fade-rise">
        <button class="btn-emerald" type="button" @click="openVideo">Watch the Pitch</button>
        <PlatformCTA />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero .content {
  position: relative;
  z-index: 1;
  max-width: 46rem;
  margin-top: 2rem;
}
.logo {
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-bottom: 1rem;
}
.brand {
  margin: 0;
  font-size: clamp(3rem, 7vw, 5.2rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 0.95;
}
.tagline {
  margin: 1.1rem 0 0;
  font-size: clamp(1.15rem, 2.4vw, 1.65rem);
  color: #e2e8f0;
  line-height: 1.35;
}
.subtitle {
  margin: 1.35rem 0 0;
  max-width: 34rem;
  color: var(--geraht-muted);
  font-size: 1rem;
  line-height: 1.55;
}
.program {
  margin-top: 1.6rem;
}
.ask {
  margin-top: 1.25rem;
  padding: 1rem 1.15rem;
  border-left: 2px solid var(--geraht-emerald);
  background: rgba(5, 150, 105, 0.08);
}
.ask-line {
  margin: 0.4rem 0;
  font-size: 1.05rem;
  line-height: 1.5;
}
.ask-line span {
  color: var(--geraht-emerald);
  margin: 0 0.35rem;
}
.company {
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
}
.cta-row {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
