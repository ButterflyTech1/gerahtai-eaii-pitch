<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import ScientificGrid from './ScientificGrid.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const stages = [
  'Working Prototype',
  'Validation',
  'Controlled Pilots',
  'Commercial Readiness',
]

const asks = [
  'HPC / GPU',
  'Data',
  'AI / ML',
  'Lab',
  'Field Pilots',
  'Investor / Grant',
]

const milestones = [
  'validate with real Ethiopian samples',
  'compare AI to lab interpretation',
  'run controlled pilots',
  'refine scientific reports',
  'prepare first institutional deployments',
]
</script>

<template>
  <div class="pitch-scene ask">
    <ScientificGrid :opacity="0.1" />
    <div class="content">
      <p class="eyebrow">Team + Financial Projection + The Ask</p>
      <h2 class="headline">
        Use EAII to convert a working prototype
        into <span class="accent">validated deployment infrastructure</span>
      </h2>
      <p class="lede">
        The 4–6 month program should unlock data, compute, scientific validation, pilots, and
        investor/grant readiness.
      </p>

      <div class="pathway">
        <div
          v-for="(s, i) in stages"
          :key="s"
          class="stage"
          :class="{ on: c >= i + 1 }"
        >
          <span class="dot" />
          <span class="label">{{ s }}</span>
        </div>
        <div class="rail" :style="{ width: `${Math.min(100, Math.max(0, (c - 1) / 3) * 100)}%` }" />
      </div>

      <div v-show="c >= 5" class="asks fade-rise">
        <p class="eyebrow">EAII partnership ask</p>
        <div class="ask-grid">
          <div v-for="(a, i) in asks" :key="a" class="ask-item" :class="{ on: c >= 5 }" :style="{ transitionDelay: `${i * 60}ms` }">
            {{ a }}
          </div>
        </div>
      </div>

      <div class="mid">
        <div v-show="c >= 6" class="milestones fade-rise">
          <p class="eyebrow">4–6 month milestones</p>
          <ol>
            <li v-for="(m, i) in milestones" :key="m" :class="{ on: c >= 6 + Math.min(i, 1) }">{{ m }}</li>
          </ol>
        </div>

        <div v-show="c >= 6" class="plan soft-panel fade-rise">
          <p class="eyebrow">3-year planning case</p>
          <p><strong>Y1:</strong> pilots + paid studies</p>
          <p><strong>Y2:</strong> institutional contracts</p>
          <p><strong>Y3:</strong> recurring monitoring + input programs</p>
          <p class="caution">
            Numbers remain assumption-based until pilots close.
            Projection is an illustrative planning framework; final financial model depends on validated pilots and signed contracts.
          </p>
        </div>
      </div>

      <p v-show="c >= 8" class="climax fade-rise">
        <span>Prototype</span>
        <span class="arrow">→</span>
        <span>Validated pilot system</span>
        <span class="arrow">→</span>
        <span class="accent">Commercial readiness</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.content { position: relative; z-index: 1; }
.headline {
  margin: 0.35rem 0 0;
  font-size: clamp(1.2rem, 2.4vw, 1.8rem);
  max-width: 42rem;
  line-height: 1.25;
}
.lede {
  margin: 0.65rem 0 1rem;
  color: var(--geraht-muted);
  max-width: 44rem;
  font-size: 0.9rem;
  line-height: 1.45;
}
.pathway {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
  padding: 0.5rem 0 1.25rem;
}
.pathway::before {
  content: '';
  position: absolute;
  left: 4%;
  right: 4%;
  top: 1.05rem;
  height: 2px;
  background: rgba(148, 163, 184, 0.25);
}
.rail {
  position: absolute;
  left: 4%;
  top: 1.05rem;
  height: 2px;
  background: var(--geraht-emerald);
  transition: width 0.55s var(--geraht-ease);
  max-width: 92%;
}
.stage {
  position: relative;
  z-index: 1;
  text-align: center;
  opacity: 0.3;
  transition: opacity 0.4s;
}
.stage.on { opacity: 1; }
.dot {
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: #334155;
  border: 2px solid #64748b;
  margin-bottom: 0.45rem;
}
.stage.on .dot {
  background: var(--geraht-emerald);
  border-color: var(--geraht-emerald-soft);
  box-shadow: 0 0 0 4px rgba(5, 150, 105, 0.2);
}
.label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.3;
}
.asks { margin-top: 0.35rem; }
.ask-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.45rem;
  margin-top: 0.45rem;
}
.ask-item {
  text-align: center;
  padding: 0.55rem 0.35rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(5, 150, 105, 0.35);
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s var(--geraht-ease), transform 0.4s var(--geraht-ease);
}
.ask-item.on {
  opacity: 1;
  transform: none;
  background: rgba(5, 150, 105, 0.1);
}
.mid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1rem;
}
.milestones ol {
  margin: 0.4rem 0 0;
  padding-left: 1.1rem;
  color: var(--geraht-muted);
  font-size: 0.85rem;
  line-height: 1.55;
}
.plan {
  padding: 0.9rem 1rem;
}
.plan p {
  margin: 0.35rem 0;
  font-size: 0.85rem;
  color: #e2e8f0;
}
.caution {
  margin-top: 0.65rem !important;
  color: var(--geraht-muted) !important;
  font-size: 0.75rem !important;
  line-height: 1.4 !important;
}
.climax {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.arrow { color: var(--geraht-emerald); }
@media (max-width: 900px) {
  .ask-grid { grid-template-columns: 1fr 1fr 1fr; }
  .mid { grid-template-columns: 1fr; }
}
</style>
