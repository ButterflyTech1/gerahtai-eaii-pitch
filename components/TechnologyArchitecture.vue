<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import ScientificGrid from './ScientificGrid.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const assets = [
  'ML-backed soil status prototype',
  'FastAPI model service pattern',
  'Report metadata: model + knowledge-base versions',
  'Confidence, uncertainty, OOD and data-quality signals',
  'AI-vs-lab comparison and scientist review',
  'Research-controlled amendment catalog',
]
</script>

<template>
  <div class="pitch-scene tech">
    <ScientificGrid :opacity="0.12" />
    <div class="content">
      <p class="eyebrow">Traction + Technology Readiness</p>
      <h2 class="headline">
        Functional prototype built; next step is
        <span class="accent">independent Ethiopian validation</span>
      </h2>
      <p class="lede">
        The right message is not “validated at national scale.” It is “built, working, scientifically
        guarded, and ready for structured validation.”
      </p>

      <div class="arch">
        <div class="engine" :class="{ on: c >= 1 }">GerahtAI Engine</div>

        <div class="layers">
          <div class="layer" :class="{ on: c >= 2 }">
            <h3>AI Output</h3>
            <ul v-show="c >= 3">
              <li>class probabilities</li>
              <li>confidence + uncertainty</li>
              <li>soil constraints</li>
              <li>feature-driven explanations</li>
            </ul>
          </div>
          <div class="layer" :class="{ on: c >= 4 }">
            <h3>Evidence Layer</h3>
            <p>confidence + uncertainty · soil constraints · explanations</p>
          </div>
          <div class="layer" :class="{ on: c >= 5 }">
            <h3>Validation Layer</h3>
            <p>lab comparison · scientist correction</p>
          </div>
          <div class="layer" :class="{ on: c >= 6 }">
            <h3>Control Layer</h3>
            <p>amendment matching · batch QC + approvals</p>
          </div>
        </div>

        <div v-show="c >= 7" class="bridge fade-rise">
          <span>AI</span>
          <span class="arrows">↕</span>
          <span>Lab</span>
          <span class="sep">→</span>
          <span>Scientist Review</span>
          <span class="sep">→</span>
          <span>Controlled Amendment</span>
        </div>
      </div>

      <div v-show="c >= 8" class="bottom fade-rise">
        <div>
          <p class="eyebrow">Current technical assets</p>
          <ul class="assets">
            <li v-for="a in assets" :key="a">{{ a }}</li>
          </ul>
        </div>
        <div class="morph soft-panel">
          <p class="from" :class="{ dim: c >= 9 }">Functional prototype</p>
          <p class="to" v-show="c >= 9">Ready for structured validation</p>
          <p v-show="c >= 10" class="next">
            Next proof milestone:<br />
            Independent lab-labeled Ethiopian samples + controlled field pilots +
            measured soil outcome tracking.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  max-width: 44rem;
  font-size: 0.95rem;
  line-height: 1.45;
}
.arch { margin-top: 0.5rem; }
.engine {
  display: inline-block;
  padding: 0.45rem 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(5, 150, 105, 0.45);
  color: var(--geraht-emerald);
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  text-transform: uppercase;
  opacity: 0.25;
  transition: opacity 0.45s var(--geraht-ease);
}
.engine.on { opacity: 1; }
.layers {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.65rem;
  margin-top: 0.85rem;
}
.layer {
  padding: 0.85rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(30, 41, 59, 0.45);
  min-height: 8.5rem;
  opacity: 0.2;
  transform: translateY(12px);
  transition: opacity 0.5s var(--geraht-ease), transform 0.5s var(--geraht-ease), border-color 0.5s;
}
.layer.on {
  opacity: 1;
  transform: none;
  border-color: rgba(5, 150, 105, 0.4);
}
.layer h3 {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  color: var(--geraht-emerald-soft);
  letter-spacing: 0.04em;
}
.layer p, .layer li {
  margin: 0;
  color: var(--geraht-muted);
  font-size: 0.78rem;
  line-height: 1.4;
}
.layer ul {
  margin: 0;
  padding-left: 1rem;
}
.bridge {
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  font-size: 0.8rem;
  text-transform: uppercase;
}
.arrows, .sep { color: var(--geraht-emerald); }
.bottom {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 1rem;
}
.assets {
  margin: 0.4rem 0 0;
  padding-left: 1.1rem;
  color: var(--geraht-muted);
  font-size: 0.82rem;
  line-height: 1.45;
}
.morph {
  padding: 1rem 1.1rem;
}
.from {
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: opacity 0.4s;
}
.from.dim { opacity: 0.35; text-decoration: line-through; }
.to {
  margin: 0.55rem 0 0;
  color: var(--geraht-emerald);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.95rem;
}
.next {
  margin: 0.75rem 0 0;
  color: var(--geraht-muted);
  font-size: 0.8rem;
  line-height: 1.45;
}
@media (max-width: 900px) {
  .layers, .bottom { grid-template-columns: 1fr 1fr; }
}
</style>
