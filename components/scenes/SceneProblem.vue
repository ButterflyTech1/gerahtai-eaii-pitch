<template>
  <SceneFrame
    kicker="02 · PROBLEM + MARKET OPPORTUNITY"
    page="02"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Sources: World Bank indicators via TheGlobalEconomy; World Bank IEG; Ethiopia News Agency; JAWMA 2024 systematic review."
  >
    <div class="prob">
      <!-- Always visible on enter — v-click hid the whole scene at click 0 -->
      <div class="prob__soil" />
      <div class="prob__veil" />

      <div class="prob__left">
        <div class="g-pill" style="margin-bottom: 14px">
          <span class="g-dot" /> ETHIOPIA · AGRICULTURE
        </div>

        <div class="g-title">
          Soil degradation is becoming an
          <span class="g-accent">intelligence problem</span>,
          not only an input problem.
        </div>

        <div class="g-sub">
          Farmers, institutions, and public programs need soil-specific evidence
          before they can restore productivity responsibly.
        </div>

        <div v-click="3" class="g-sub prob__opp">
          The opportunity is to reduce blind input use by creating trusted local soil intelligence
          — then linking diagnosis to safe, soil-specific restoration actions.
        </div>

        <div v-click="3" class="prob__gap">
          <div class="g-kicker">Unserved gap</div>
          <p>
            Soil testing, fertilizer advice, AI tools, compost/biochar, and field programs usually operate
            separately. GerahtAI connects them into one validation-aware system.
          </p>
        </div>

        <div v-click="4" class="prob__finale g-panel-strong">
          <div class="g-kicker">Local soil intelligence</div>
          <div class="prob__finale-title">
            + Validation-Aware System
          </div>
        </div>
      </div>

      <div class="prob__right">
        <div class="prob__stats">
          <div v-click="1" class="g-panel prob__stat">
            <div class="g-stat-num">~60%</div>
            <div class="g-stat-label">of workforce in agriculture</div>
          </div>
          <div v-click="1" class="g-panel prob__stat">
            <div class="g-stat-num">~33%</div>
            <div class="g-stat-label">of GDP from agriculture</div>
          </div>
          <div v-click="2" class="g-panel prob__stat">
            <div class="g-stat-num">&gt;85%</div>
            <div class="g-stat-label">of land reported degraded</div>
          </div>
          <div v-click="2" class="g-panel prob__stat">
            <div class="g-stat-num">15.5M</div>
            <div class="g-stat-label">quintals fertilizer imported</div>
          </div>
        </div>

        <div v-click="3" class="prob__eco">
          <svg class="prob__lines" viewBox="0 0 520 220" aria-hidden="true">
            <g v-click="4">
              <line
                v-for="(line, i) in clippedLines"
                :key="i"
                :x1="line.x1"
                :y1="line.y1"
                :x2="line.x2"
                :y2="line.y2"
                class="prob__line g-line-draw"
                pathLength="1"
                :style="{ animationDelay: `${i * 80}ms` }"
              />
            </g>
          </svg>

          <div
            v-for="node in nodes"
            :key="node.id"
            class="g-node-card prob__node"
            :style="{ left: node.x + 'px', top: node.y + 'px' }"
          >
            <div class="label">{{ node.label }}</div>
          </div>

          <div v-click="4" class="g-node-card is-center prob__hub">
            <GerahtAILogo :size="22" />
            <div class="label" style="margin-top: 8px">GerahtAI</div>
          </div>
        </div>
      </div>
    </div>
  </SceneFrame>
</template>

<script setup>
const NODE_W = 132
const NODE_H = 40
const HUB = { x: 198, y: 78, w: 124, h: 72 }

const nodes = [
  { id: 'labs', label: 'Soil Labs', x: 18, y: 18 },
  { id: 'fert', label: 'Fertilizer', x: 360, y: 18 },
  { id: 'ai', label: 'AI Tools', x: 18, y: 150 },
  { id: 'compost', label: 'Compost / Biochar', x: 340, y: 150 },
  { id: 'field', label: 'Field Programs', x: 190, y: 8 },
]

/** Clip line from outer point toward hub center so it ends on the hub rectangle edge. */
function lineToHubEdge(x1, y1, hub = HUB) {
  const cx = hub.x + hub.w / 2
  const cy = hub.y + hub.h / 2
  const dx = cx - x1
  const dy = cy - y1
  const left = hub.x
  const right = hub.x + hub.w
  const top = hub.y
  const bottom = hub.y + hub.h

  const ts = []
  if (dx !== 0) {
    ts.push((left - x1) / dx)
    ts.push((right - x1) / dx)
  }
  if (dy !== 0) {
    ts.push((top - y1) / dy)
    ts.push((bottom - y1) / dy)
  }

  let bestT = 1
  const eps = 0.75
  for (const t of ts) {
    if (t <= 0.02 || t > 1) continue
    const x = x1 + t * dx
    const y = y1 + t * dy
    if (x >= left - eps && x <= right + eps && y >= top - eps && y <= bottom + eps) {
      bestT = Math.min(bestT, t)
    }
  }

  return {
    x1,
    y1,
    x2: x1 + bestT * dx,
    y2: y1 + bestT * dy,
  }
}

function nodeAnchor(node) {
  const nx = node.x + NODE_W / 2
  const ny = node.y + NODE_H / 2
  const cx = HUB.x + HUB.w / 2
  const cy = HUB.y + HUB.h / 2
  // Start from the node’s inner edge facing the hub
  const dx = cx - nx
  const dy = cy - ny
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len
  // Approximate half-extents toward hub
  const hw = NODE_W / 2
  const hh = NODE_H / 2
  const tx = Math.abs(ux) > 1e-6 ? hw / Math.abs(ux) : Infinity
  const ty = Math.abs(uy) > 1e-6 ? hh / Math.abs(uy) : Infinity
  const t = Math.min(tx, ty)
  return { x: nx + ux * t, y: ny + uy * t }
}

const clippedLines = nodes.map((node) => {
  const a = nodeAnchor(node)
  return lineToHubEdge(a.x, a.y)
})
</script>

<style scoped>
.prob {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
}
.prob__soil {
  position: absolute;
  inset: -20px -20px -40px -20px;
  background:
    linear-gradient(120deg, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.55)),
    url('/images/soil-field.jpg') center / cover no-repeat;
  opacity: 0.55;
  z-index: 0;
  pointer-events: none;
  filter: saturate(0.85) contrast(1.05);
}
.prob__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.55) 55%, rgba(15, 23, 42, 0.35) 100%);
  z-index: 0;
  pointer-events: none;
}
.prob__left,
.prob__right {
  position: relative;
  z-index: 1;
}
.prob__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.prob__stat { padding: 16px; min-height: 98px; }
.prob__eco {
  position: relative;
  margin-top: 18px;
  height: 220px;
}
.prob__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: visible;
}
.prob__line {
  stroke: #059669;
  stroke-width: 1.6;
  fill: none;
  opacity: 0.85;
  stroke-linecap: round;
}
.prob__node {
  position: absolute;
  width: 132px;
  padding: 10px 8px;
  z-index: 2;
}
.prob__hub {
  position: absolute;
  left: 198px;
  top: 78px;
  width: 124px;
  height: 72px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-sizing: border-box;
}
.prob__finale {
  margin-top: 14px;
  padding: 14px 16px;
  max-width: 480px;
}
.prob__finale-title {
  margin-top: 8px;
  font-size: 20px;
  font-weight: 720;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.prob__opp {
  margin-top: 12px !important;
  font-size: 13px !important;
}
.prob__gap {
  margin-top: 12px;
  max-width: 480px;
}
.prob__gap p {
  margin-top: 6px;
  font-size: 12px;
  color: #94A3B8;
  line-height: 1.4;
}
</style>
