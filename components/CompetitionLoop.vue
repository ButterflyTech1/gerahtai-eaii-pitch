<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import ScientificGrid from './ScientificGrid.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const competitors = [
  { name: 'Soil Labs', strength: 'measure chemistry', limit: 'but limited AI workflow' },
  { name: 'Fertilizer Suppliers', strength: 'sell inputs', limit: 'but not soil-specific validation' },
  { name: 'Agronomic Advisors', strength: 'expert advice', limit: 'but limited scalable data loop' },
  { name: 'Compost / Biochar Producers', strength: 'produce inputs', limit: 'but not intelligence-led' },
  { name: 'AI Agri Tools', strength: 'software insight', limit: 'but weak lab + field control' },
]

const diffs = [
  'Localized Soil Intelligence',
  'AI Confidence / Uncertainty',
  'Lab Validation',
  'Scientist Review',
  'Controlled Amendment QC',
  'Field Traceability',
]

const loop = [
  'Local Data',
  'AI',
  'Lab',
  'Scientist',
  'Controlled Intervention',
  'Field Outcome',
  'Validated Data',
]
</script>

<template>
  <div class="pitch-scene competition">
    <ScientificGrid :opacity="0.1" />
    <div class="content">
      <p class="eyebrow">Competition + Defensibility</p>
      <h2 class="headline">
        GerahtAI integrates what competitors
        <span class="accent">usually separate</span>
      </h2>
      <p class="lede">
        The defensibility is not one feature. It is the closed loop between local data, scientific
        validation, controlled interventions, and field outcomes.
      </p>

      <div class="grid-comp">
        <div
          v-for="(comp, i) in competitors"
          :key="comp.name"
          class="comp soft-panel"
          :class="{ on: c >= i + 1, dim: c >= 6 }"
        >
          <h3>{{ comp.name }}</h3>
          <p>{{ comp.strength }}</p>
          <p v-show="c >= i + 1" class="limit">{{ comp.limit }}</p>
        </div>
      </div>

      <div v-show="c >= 6" class="diff fade-rise">
        <p class="eyebrow">GerahtAI differentiation</p>
        <div class="diff-row">
          <span v-for="(d, i) in diffs" :key="d">
            {{ d }}<template v-if="i < diffs.length - 1"> + </template>
          </span>
        </div>
      </div>

      <div v-show="c >= 7" class="loop-wrap fade-rise">
        <svg class="loop-svg" viewBox="0 0 640 220" role="img" aria-label="Closed defensibility loop">
          <defs>
            <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#047857" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
          </defs>
          <ellipse
            cx="320"
            cy="110"
            rx="280"
            ry="78"
            fill="none"
            stroke="url(#loopGrad)"
            stroke-width="2"
            stroke-dasharray="6 4"
            class="orbit"
          />
          <circle r="4" fill="#ECFDF5">
            <animateMotion dur="6s" repeatCount="indefinite" path="M320,32 A280,78 0 1 1 319.9,32" />
          </circle>
          <circle r="3" fill="#059669">
            <animateMotion dur="6s" begin="2s" repeatCount="indefinite" path="M320,32 A280,78 0 1 1 319.9,32" />
          </circle>
          <g v-for="(label, i) in loop" :key="label">
            <text
              :x="320 + Math.cos((-Math.PI / 2) + (i / loop.length) * Math.PI * 2) * 280"
              :y="110 + Math.sin((-Math.PI / 2) + (i / loop.length) * Math.PI * 2) * 78"
              text-anchor="middle"
              dominant-baseline="middle"
              class="node-label"
            >
              {{ label }}
            </text>
          </g>
          <text x="320" y="110" text-anchor="middle" dominant-baseline="middle" class="hub">GERAHTAI</text>
        </svg>
        <p class="why">
          Every new validated sample and treatment outcome improves the system’s data advantage — while safe approval workflows create trust with institutions.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content { position: relative; z-index: 1; }
.headline {
  margin: 0.35rem 0 0;
  font-size: clamp(1.25rem, 2.5vw, 1.9rem);
  max-width: 38rem;
  line-height: 1.25;
}
.lede {
  margin: 0.65rem 0 0.9rem;
  color: var(--geraht-muted);
  max-width: 44rem;
  font-size: 0.9rem;
  line-height: 1.45;
}
.grid-comp {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.5rem;
}
.comp {
  padding: 0.7rem 0.65rem;
  min-height: 6.5rem;
  opacity: 0.2;
  transition: opacity 0.45s var(--geraht-ease), transform 0.45s, filter 0.45s;
}
.comp.on { opacity: 1; }
.comp.dim { filter: saturate(0.7); opacity: 0.55; }
.comp h3 {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #e2e8f0;
}
.comp p {
  margin: 0;
  font-size: 0.72rem;
  color: var(--geraht-muted);
  line-height: 1.35;
}
.limit {
  margin-top: 0.35rem !important;
  color: #fca5a5 !important;
}
.diff { margin-top: 0.9rem; }
.diff-row {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--geraht-emerald-soft);
  font-weight: 600;
}
.loop-wrap { margin-top: 0.5rem; }
.loop-svg {
  width: 100%;
  max-width: 720px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.orbit {
  animation: pulseLine 3s ease-in-out infinite;
}
.node-label {
  fill: #cbd5e1;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.hub {
  fill: var(--geraht-emerald);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.why {
  margin: 0.35rem auto 0;
  max-width: 44rem;
  text-align: center;
  color: var(--geraht-muted);
  font-size: 0.82rem;
  line-height: 1.45;
}
@media (max-width: 1000px) {
  .grid-comp { grid-template-columns: 1fr 1fr; }
}
</style>
