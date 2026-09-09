<template>
  <SceneFrame
    kicker="08 · TEAM + FINANCIAL PROJECTION + THE ASK"
    page="08"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Projection is an illustrative planning framework; final financial model depends on validated pilots and signed contracts."
  >
    <div class="ask">
      <div class="g-title">
        Use EAII to convert a working prototype
        into <span class="g-accent">validated deployment infrastructure</span>
      </div>
      <div class="g-sub">
        The 4–6 month program should unlock data, compute, scientific validation, pilots, and
        investor/grant readiness.
      </div>

      <div class="ask__top">
        <div v-click="1" class="ask__team g-panel">
          <div class="g-kicker">Core team</div>
          <p><strong>Bisrat Seyoum</strong> — CEO / strategy</p>
          <p><strong>Tomas Asefa</strong> — software engineering, development, research</p>
          <p class="ask__advisors">
            Advisors needed: soil science, agronomy, lab QA, waste processing
          </p>
        </div>

        <div v-click="1" class="ask__plan g-panel-strong">
          <div class="g-kicker">3-year planning case</div>
          <p><strong>Y1:</strong> pilots + paid studies</p>
          <p><strong>Y2:</strong> institutional contracts</p>
          <p><strong>Y3:</strong> recurring monitoring + input programs</p>
          <p class="ask__note">Numbers remain assumption-based until pilots close.</p>
        </div>
      </div>

      <div v-click="2" class="ask__resources">
        <div class="g-kicker">EAII partnership ask</div>
        <div class="ask__pills">
          <div v-for="r in resources" :key="r" class="g-pill">
            <span class="g-dot" /> {{ r }}
          </div>
        </div>
      </div>

      <div v-click="3" class="ask__ms g-panel">
        <div class="g-kicker">4–6 month milestones</div>
        <p>
          validate with real Ethiopian samples, compare AI to lab interpretation,
          run controlled pilots, refine scientific reports, and prepare first institutional deployments.
        </p>
      </div>

      <div v-click="4" class="ask__outcome">
        <div class="g-kicker">Outcome</div>
        <div class="ask__line">
          Prototype
          <span class="g-accent">→</span>
          validated pilot system
          <span class="g-accent">→</span>
          commercial readiness
        </div>
      </div>

      <div v-click="5" class="ask__cta">
        <a class="btn-emerald" href="/downloads/gerahtai-eaii-pitch-deck.pdf" download="gerahtai-eaii-pitch-deck.pdf">
          Download Pitch Deck (PDF)
        </a>
        <a
          class="btn-ghost"
          href="https://gerahtai-frontend.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open GerahtAI Platform →
        </a>
        <button class="btn-ghost" type="button" @click="openVideo">Watch the Pitch</button>
      </div>
    </div>
  </SceneFrame>
</template>

<script setup>
const resources = [
  'HPC/GPU infrastructure',
  'AI/ML mentorship',
  'soil dataset access',
  'lab partnerships',
  'controlled field pilots',
  'investor/grant introductions',
]

function openVideo() {
  window.__gerahtOpenVideo?.()
}
</script>

<style scoped>
.ask {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 18px;
}
.ask__top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 4px;
}
.ask__team,
.ask__plan {
  padding: 14px 16px;
}
.ask__team p,
.ask__plan p {
  margin-top: 8px;
  font-size: 14px;
  color: #E2E8F0;
  line-height: 1.4;
}
.ask__advisors,
.ask__note {
  color: #94A3B8 !important;
  font-size: 12px !important;
}
.ask__resources { margin-top: 2px; }
.ask__pills {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ask__ms {
  padding: 12px 14px;
}
.ask__ms p {
  margin-top: 8px;
  font-size: 13px;
  color: #CBD5E1;
  line-height: 1.45;
}
.ask__line {
  margin-top: 8px;
  font-size: 24px;
  font-weight: 750;
  letter-spacing: -0.02em;
}
.ask__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}
.btn-emerald,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 650;
  text-decoration: none;
  cursor: pointer;
}
.btn-emerald {
  background: #059669;
  color: #fff;
  border: none;
}
.btn-ghost {
  background: transparent;
  color: #E2E8F0;
  border: 1px solid rgba(148, 163, 184, 0.35);
}
</style>
