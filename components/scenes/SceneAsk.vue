<template>
  <SceneFrame
    kicker="08 · TEAM + FINANCIAL PROJECTION + THE ASK"
    page="08"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Projection is illustrative until pilots and contracts close."
  >
    <div class="ask">
      <div class="ask__head">
        <div class="g-title">
          Use EAII to convert a working prototype into
          <span class="g-accent">validated deployment infrastructure</span>
        </div>
        <div class="g-sub">
          The 4–6 month program should unlock data, compute, scientific validation,
          pilots, and investor/grant readiness.
        </div>
      </div>

      <div class="ask__grid">
        <div v-click="1" class="ask__team g-panel">
          <div class="g-kicker">Core team</div>
          <p><strong>Bisrat Seyoum</strong> — Software engineer · CEO / strategy</p>
          <p><strong>Tomas Asefa</strong> — Software engineer · development & research</p>
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
            Validate with Ethiopian samples, compare AI to lab interpretation,
            run controlled pilots, refine reports, prepare first institutional deployments.
          </p>
        </div>
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
  gap: 10px;
  min-height: 0;
}
.ask__head { flex: 0 0 auto; }
.ask__head .g-title { font-size: 30px; max-width: 920px; }
.ask__head .g-sub { margin-top: 8px; }
.ask__grid {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
  align-content: start;
}
.ask__team,
.ask__plan,
.ask__ms {
  padding: 12px 14px;
}
.ask__team p,
.ask__plan p {
  margin-top: 6px;
  font-size: 13px;
  color: #E2E8F0;
  line-height: 1.35;
}
.ask__advisors,
.ask__note {
  color: #94A3B8 !important;
  font-size: 11px !important;
}
.ask__resources {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.ask__pills {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ask__ms p {
  margin-top: 6px;
  font-size: 12px;
  color: #CBD5E1;
  line-height: 1.4;
}
.ask__outcome {
  flex: 0 0 auto;
}
.ask__line {
  margin-top: 6px;
  font-size: 20px;
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.25;
}
.ask__cta {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 2px;
}
.btn-emerald,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px;
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
@media (max-width: 900px) {
  .ask__grid { grid-template-columns: 1fr; }
  .ask__head .g-title { font-size: 26px; }
}
</style>
