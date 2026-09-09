<template>
  <SceneFrame
    kicker="06 · COMPETITION + DEFENSIBILITY"
    page="06"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Internal product source: current GerahtAI workflow and controlled amendment architecture."
  >
    <div class="diff">
      <div class="diff__head">
        <div class="g-title">
          GerahtAI integrates what competitors
          <span class="g-accent">usually separate.</span>
        </div>
        <div class="g-sub">
          Defensibility is not one feature — it is the closed loop between local data,
          scientific validation, controlled interventions, and field outcomes.
        </div>
      </div>

      <div class="diff__stage">
        <div
          v-for="(island, i) in islands"
          :key="island.id"
          v-click="1"
          class="diff__island g-panel"
          :style="islandStyle(i)"
        >
          <div class="diff__island-name">{{ island.name }}</div>
          <div v-click="2" class="diff__island-weak">{{ island.weak }}</div>
        </div>

        <!-- Hub + loop share one geometric center -->
        <div v-click="3" class="diff__core">
          <svg class="diff__spokes" viewBox="0 0 420 210" aria-hidden="true">
            <line
              v-for="(p, i) in spokeEdges"
              :key="`s-${i}`"
              :x1="p.x1"
              :y1="p.y1"
              :x2="p.x2"
              :y2="p.y2"
              class="diff__spoke g-line-draw"
              pathLength="1"
              :style="{ animationDelay: `${i * 70}ms` }"
            />
          </svg>

          <svg v-click="4" class="diff__loop" viewBox="0 0 420 210" aria-hidden="true">
            <path
              id="geraht-loop"
              d="M60,105 A150,72 0 1,1 360,105 A150,72 0 1,1 60,105"
              class="diff__loop-path g-line-draw"
              pathLength="1"
            />
            <circle v-click="5" r="3.5" fill="#059669">
              <animateMotion dur="4.5s" repeatCount="1" fill="freeze">
                <mpath href="#geraht-loop" />
              </animateMotion>
            </circle>
            <circle v-click="5" r="2.5" fill="#047857" opacity="0.75">
              <animateMotion dur="4.5s" begin="0.8s" repeatCount="1" fill="freeze">
                <mpath href="#geraht-loop" />
              </animateMotion>
            </circle>
          </svg>

          <div class="diff__hub g-node-card is-center">
            <GerahtAILogo :size="22" />
            <div class="label" style="margin-top: 6px">GerahtAI</div>
          </div>

          <div v-click="4" class="diff__loop-labels">
            <span v-for="step in loopSteps" :key="step">{{ step }}</span>
          </div>
        </div>

        <div v-click="6" class="diff__why g-panel-strong">
          Every new validated sample and treatment outcome improves the system’s data advantage —
          while safe approval workflows create trust with institutions.
        </div>
      </div>
    </div>
  </SceneFrame>
</template>

<script setup>
const islands = [
  { id: 'labs', name: 'Soil Labs', weak: 'Measure chemistry · limited AI workflow' },
  { id: 'fert', name: 'Fertilizer Suppliers', weak: 'Sell inputs · not soil-specific validation' },
  { id: 'adv', name: 'Agronomic Advisors', weak: 'Expert advice · limited scalable data loop' },
  { id: 'comp', name: 'Compost / Biochar', weak: 'Produce inputs · not intelligence-led' },
  { id: 'ai', name: 'AI Agri Tools', weak: 'Software insight · weak lab + field control' },
]

const positions = [
  { x: '0%', y: '4%' },
  { x: '76%', y: '4%' },
  { x: '0%', y: '52%' },
  { x: '76%', y: '52%' },
  { x: '38%', y: '0%' },
]

function islandStyle(i) {
  return { left: positions[i].x, top: positions[i].y }
}

/** Spokes end on the ellipse rim (shared core viewBox 420×210, center 210,105). */
function ellipseEdge(angleDeg, rx = 150, ry = 72, cx = 210, cy = 105) {
  const a = (angleDeg * Math.PI) / 180
  return {
    x: cx + rx * Math.cos(a),
    y: cy + ry * Math.sin(a),
  }
}

const spokeEdges = [
  { ...outer(30, 20), ...toRim(ellipseEdge(-140)) },
  { ...outer(390, 20), ...toRim(ellipseEdge(-40)) },
  { ...outer(30, 190), ...toRim(ellipseEdge(140)) },
  { ...outer(390, 190), ...toRim(ellipseEdge(40)) },
  { ...outer(210, 8), ...toRim(ellipseEdge(-90)) },
]

function outer(x1, y1) {
  return { x1, y1 }
}
function toRim({ x, y }) {
  return { x2: x, y2: y }
}

const loopSteps = [
  'LOCAL DATA',
  'AI',
  'LAB',
  'SCIENTIST',
  'CONTROL',
  'FIELD',
  'VALIDATED DATA',
]
</script>

<style scoped>
.diff { height: 100%; display: flex; flex-direction: column; gap: 8px; }
.diff__stage {
  position: relative;
  flex: 1;
  min-height: 340px;
}
.diff__island {
  position: absolute;
  width: 200px;
  padding: 11px 13px;
  z-index: 2;
}
.diff__island-name {
  font-size: 13px;
  font-weight: 720;
  letter-spacing: 0.02em;
}
.diff__island-weak {
  margin-top: 6px;
  font-size: 11px;
  color: #94A3B8;
  line-height: 1.35;
}

/* Single aligned composition: ellipse + hub share center */
.diff__core {
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 210px;
  z-index: 3;
}
.diff__spokes,
.diff__loop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}
.diff__spoke {
  stroke: rgba(5, 150, 105, 0.5);
  stroke-width: 1.4;
  fill: none;
}
.diff__loop-path {
  fill: rgba(5, 150, 105, 0.04);
  stroke: #059669;
  stroke-width: 1.8;
  opacity: 0.95;
}
.diff__hub {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  width: 112px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.diff__loop-labels {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: #94A3B8;
}
.diff__why {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px 16px;
  font-size: 13px;
  line-height: 1.4;
  color: #CBD5E1;
  z-index: 5;
}
</style>
