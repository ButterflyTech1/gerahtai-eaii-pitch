<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import AnimatedStat from './AnimatedStat.vue'
import SoilBackground from './SoilBackground.vue'
import ScientificGrid from './ScientificGrid.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const nodes = [
  'Soil Labs',
  'Fertilizer',
  'AI Tools',
  'Compost / Biochar',
  'Field Programs',
]
</script>

<template>
  <div class="pitch-scene problem">
    <SoilBackground :intensity="0.22" />
    <ScientificGrid :opacity="0.1" />

    <div class="content">
      <p class="eyebrow">Problem + Market Opportunity</p>
      <h2 v-show="c >= 1" class="fade-rise headline">
        Soil degradation is becoming an
        <span :class="{ accent: c >= 2 }">intelligence problem</span>,
        not only an input problem
      </h2>
      <p v-show="c >= 2" class="lede fade-rise">
        Farmers, institutions, and public programs need soil-specific evidence before they can
        restore productivity responsibly.
      </p>

      <p v-show="c >= 3" class="eyebrow section fade-rise">Why this matters now</p>
      <div v-show="c >= 3" class="stats fade-rise">
        <AnimatedStat :active="c >= 3" :value="60" prefix="~" suffix="%" label="of workforce in agriculture" />
        <AnimatedStat :active="c >= 3" :value="33" prefix="~" suffix="%" label="of GDP from agriculture" />
        <AnimatedStat :active="c >= 4" :value="85" prefix=">" suffix="%" label="of land reported degraded" />
        <AnimatedStat :active="c >= 4" :value="15.5" :decimals="1" suffix="M" label="quintals fertilizer imported" />
      </div>

      <p v-show="c >= 5" class="opportunity fade-rise">
        The opportunity is to reduce blind input use by creating trusted local soil intelligence
        — then linking diagnosis to safe, soil-specific restoration actions.
      </p>

      <div v-show="c >= 6" class="ecosystem fade-rise">
        <p class="eyebrow">Unserved gap</p>
        <p class="gap-copy">
          Soil testing, fertilizer advice, AI tools, compost/biochar, and field programs usually operate
          separately. GerahtAI connects them into one validation-aware system.
        </p>

        <div class="diagram" :class="{ connected: c >= 7 }">
          <div
            v-for="(node, i) in nodes"
            :key="node"
            class="node"
            :style="{ '--i': i }"
          >
            {{ node }}
          </div>
          <div v-show="c >= 7" class="hub">GerahtAI</div>
          <svg v-show="c >= 7" class="lines" viewBox="0 0 100 60" preserveAspectRatio="none">
            <line v-for="n in 5" :key="n" :x1="10 + (n - 1) * 20" y1="12" x2="50" y2="48" />
          </svg>
        </div>

        <p v-show="c >= 8" class="final accent fade-rise">
          Local soil intelligence + validation-aware system
        </p>
      </div>

      <p v-show="c >= 5" class="sources muted">
        Sources: World Bank indicators via TheGlobalEconomy; World Bank IEG;
        Ethiopia News Agency; JAWMA 2024 systematic review.
      </p>
    </div>
  </div>
</template>

<style scoped>
.content { position: relative; z-index: 1; }
.headline {
  margin: 0.4rem 0 0;
  font-size: clamp(1.35rem, 2.8vw, 2.1rem);
  max-width: 40rem;
  line-height: 1.25;
  font-weight: 650;
}
.lede {
  margin: 0.85rem 0 0;
  max-width: 40rem;
  color: var(--geraht-muted);
  line-height: 1.5;
}
.section { margin-top: 1.35rem; }
.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
}
.opportunity {
  margin: 1.1rem 0 0;
  max-width: 42rem;
  color: #e2e8f0;
  line-height: 1.5;
}
.ecosystem { margin-top: 1.1rem; }
.gap-copy {
  margin: 0.4rem 0 0.85rem;
  max-width: 42rem;
  color: var(--geraht-muted);
  font-size: 0.92rem;
  line-height: 1.45;
}
.diagram {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
  min-height: 7.5rem;
  padding-bottom: 3.5rem;
}
.node {
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.7rem 0.4rem;
  border: 1px dashed rgba(148, 163, 184, 0.4);
  border-radius: 0.5rem;
  color: #cbd5e1;
  transition: border-color 0.5s var(--geraht-ease), transform 0.5s var(--geraht-ease);
}
.diagram.connected .node {
  border-style: solid;
  border-color: rgba(5, 150, 105, 0.55);
}
.hub {
  position: absolute;
  left: 50%;
  bottom: 0.2rem;
  transform: translateX(-50%);
  background: var(--geraht-emerald);
  color: white;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  z-index: 2;
}
.lines {
  position: absolute;
  inset: 0 0 2rem 0;
  width: 100%;
  height: calc(100% - 2rem);
  pointer-events: none;
}
.lines line {
  stroke: var(--geraht-emerald);
  stroke-width: 0.4;
  stroke-dasharray: 2 1.5;
  animation: pulseLine 2.2s ease-in-out infinite;
}
.final {
  margin-top: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.sources {
  margin-top: 1rem;
  font-size: 0.68rem;
  max-width: 42rem;
  line-height: 1.4;
}
@media (max-width: 900px) {
  .stats { grid-template-columns: 1fr 1fr; }
  .diagram { grid-template-columns: 1fr 1fr; }
}
</style>
