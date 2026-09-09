<template>
  <SceneFrame
    kicker="04 · TRACTION + TECHNOLOGY READINESS"
    page="04"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Internal product source: GerahtAI current scientific report and new feature handoff."
  >
    <div class="tech">
      <div class="tech__head">
        <div class="g-title">
          Functional prototype built; next step is
          <span class="g-accent">independent Ethiopian validation.</span>
        </div>
        <div class="g-sub">
          Not “validated at national scale.” Built, working, scientifically guarded,
          and ready for structured validation.
        </div>
      </div>

      <div class="tech__body">
        <div class="tech__stack">
          <div v-click="1" class="tech__brand">
            <GerahtAILogo :size="26" with-text />
          </div>

          <div class="tech__layers">
            <div
              v-for="(layer, i) in layers"
              :key="layer.id"
              v-click="2"
              class="tech__layer g-panel"
              :style="{ transitionDelay: `${i * 70}ms` }"
            >
              <div class="tech__layer-idx">{{ String(i + 1).padStart(2, '0') }}</div>
              <div>
                <div class="tech__layer-name">{{ layer.name }}</div>
                <div class="tech__layer-hint">{{ layer.hint }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="tech__detail">
          <div v-click="3" class="tech__signals">
            <div v-for="s in signals" :key="s" class="g-pill">
              <span class="g-dot" /> {{ s }}
            </div>
          </div>

          <div class="tech__pair">
            <div v-click="4" class="tech__compare g-panel">
              <div class="tech__compare-row">
                <div class="tech__chip">AI</div>
                <div class="tech__bidir">↕</div>
                <div class="tech__chip tech__chip--soft">LAB</div>
              </div>
              <div class="tech__compare-note">Scientist review · evidence-linked correction</div>
            </div>

            <div v-click="5" class="g-panel-strong tech__control">
              <div class="g-kicker">CONTROL</div>
              <div class="tech__control-title">Controlled Amendment</div>
              <div class="tech__control-hint">Matching · batch QC · approvals</div>
            </div>
          </div>

          <div v-click="6" class="g-panel-strong tech__transform">
            <div class="tech__transform-top">
              <div>
                <div class="g-kicker">STATUS</div>
                <div class="tech__status-row">
                  <span class="tech__transform-from">Functional Prototype</span>
                  <span class="tech__arrow">→</span>
                  <span class="tech__transform-to">Ready for Structured Validation</span>
                </div>
              </div>
            </div>
            <div class="tech__proof-list">
              <span>Ethiopian lab samples</span>
              <span class="g-accent">+</span>
              <span>Controlled field pilots</span>
              <span class="g-accent">+</span>
              <span>Measured outcomes</span>
            </div>
            <div class="tech__proof-note">Next proof milestone — not claimed as completed.</div>
          </div>
        </div>
      </div>
    </div>
  </SceneFrame>
</template>

<script setup>
const layers = [
  { id: 'ai', name: 'AI Output', hint: 'Probabilities · confidence · constraints' },
  { id: 'ev', name: 'Evidence', hint: 'Feature explanations · data quality' },
  { id: 'va', name: 'Validation', hint: 'Lab comparison · scientist correction' },
  { id: 'co', name: 'Control', hint: 'Amendment matching · batch QC' },
]

const signals = [
  'PROBABILITIES',
  'CONFIDENCE',
  'UNCERTAINTY',
  'DATA QUALITY',
  'SOIL CONSTRAINTS',
]
</script>

<style scoped>
.tech {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
  padding-bottom: 8px;
}
.tech__head .g-title { font-size: 32px; }
.tech__head .g-sub { margin-top: 10px; font-size: 14px; max-width: 700px; }
.tech__body {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
  flex: 1;
  min-height: 0;
  align-items: start;
}
.tech__brand { margin-bottom: 10px; }
.tech__layers { display: grid; gap: 7px; }
.tech__layer {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
}
.tech__layer-idx {
  font-size: 11px;
  color: #059669;
  letter-spacing: 0.14em;
  font-weight: 700;
}
.tech__layer-name { font-size: 15px; font-weight: 700; letter-spacing: -0.02em; }
.tech__layer-hint { margin-top: 2px; font-size: 11px; color: #94A3B8; }

.tech__detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 0;
}
.tech__signals { display: flex; flex-wrap: wrap; gap: 7px; }

/* AI↔Lab and Controlled Amendment sit side-by-side — no vertical stack clash */
.tech__pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: stretch;
}
.tech__compare,
.tech__control {
  padding: 14px 16px;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}
.tech__compare-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.tech__chip {
  min-width: 64px;
  text-align: center;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(5, 150, 105, 0.45);
  background: rgba(5, 150, 105, 0.16);
  font-weight: 750;
  letter-spacing: 0.08em;
  color: #ECFDF5;
  font-size: 13px;
}
.tech__chip--soft {
  background: rgba(236, 253, 245, 0.08);
  color: #CBD5E1;
  border-color: rgba(148, 163, 184, 0.3);
}
.tech__bidir { color: #059669; font-size: 20px; }
.tech__compare-note { margin-top: 8px; font-size: 11px; color: #94A3B8; line-height: 1.35; }
.tech__control-title { margin-top: 6px; font-size: 17px; font-weight: 720; }
.tech__control-hint { margin-top: 4px; font-size: 11px; color: #94A3B8; }

.tech__transform {
  padding: 14px 16px;
  flex-shrink: 0;
}
.tech__status-row {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}
.tech__transform-from {
  font-size: 14px;
  color: #94A3B8;
  text-decoration: line-through;
  text-decoration-color: rgba(148, 163, 184, 0.45);
}
.tech__arrow { color: #059669; font-size: 18px; }
.tech__transform-to {
  font-size: 20px;
  font-weight: 750;
  letter-spacing: -0.025em;
  color: #ECFDF5;
}
.tech__proof-list {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  font-size: 14px;
  font-weight: 650;
}
.tech__proof-note {
  margin-top: 8px;
  font-size: 10px;
  color: #64748B;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
</style>
