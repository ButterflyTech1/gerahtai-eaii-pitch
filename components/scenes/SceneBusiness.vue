<template>
  <SceneFrame
    kicker="05 · BUSINESS MODEL + GO-TO-MARKET"
    page="05"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Business logic: service-led entry, controlled restoration, then recurring monitoring and input programs."
  >
    <div class="biz">
      <div class="biz__head">
        <div class="g-title">
          Start with paid soil intelligence; expand into
          <span class="g-accent">verified restoration programs.</span>
        </div>
        <div class="g-sub">
          Intelligence creates the customer relationship. Controlled restoration
          and biological inputs create the long-term operating model.
        </div>
      </div>

      <div class="biz__grow">
        <div v-click="1" class="biz__layer g-panel-strong">
          <div class="g-kicker">01 · SOIL INTELLIGENCE</div>
          <div class="biz__layer-title">Commissioned studies</div>
          <div class="biz__layer-hint">Lab-linked analysis · AI reports · institutional dashboards</div>
        </div>

        <div v-click="2" class="biz__link">creates ↓</div>

        <div v-click="2" class="biz__layer g-panel">
          <div class="g-kicker">02 · RESTORATION PLANNING</div>
          <div class="biz__layer-title">Controlled field programs</div>
          <div class="biz__layer-hint">Recommendations · scientist review · monitoring · trials</div>
        </div>

        <div v-click="3" class="biz__link">connects ↓</div>

        <div v-click="3" class="biz__layer biz__bio g-panel">
          <div class="biz__orbit" aria-hidden="true" />
          <div class="g-kicker">03 · BIOLOGICAL INPUTS</div>
          <div class="biz__layer-title">Soil-specific input programs</div>
          <div class="biz__layer-hint">Compost · biochar · amendments</div>
        </div>
      </div>

      <div class="biz__bottom">
        <div v-click="4" class="biz__circular g-panel">
          <div class="g-kicker">CIRCULAR LAYER</div>
          <div class="biz__flow">
            <span>Organic waste</span>
            <span class="g-accent">→</span>
            <span>Compost / Biochar</span>
            <span class="g-accent">→</span>
            <span>Controlled use</span>
            <span class="g-accent">→</span>
            <span>Soil restoration</span>
          </div>
          <div class="biz__note">Only after scientific fit and controlled use are proven.</div>
        </div>

        <div v-click="5" class="biz__gtm g-panel-strong">
          <div class="g-kicker">BEACHHEAD GTM</div>
          <div class="biz__path">
            <span>Gov / institutional pilots</span>
            <span class="g-accent">→</span>
            <span>Commercial farms + NGOs</span>
            <span class="g-accent">→</span>
            <span>Recurring monitoring</span>
            <span class="g-accent">→</span>
            <span>Input programs</span>
          </div>
        </div>

        <div v-click="6" class="biz__logic">
          <strong>Business logic:</strong>
          service-led entry → controlled restoration → recurring monitoring + input programs
        </div>
      </div>
    </div>
  </SceneFrame>
</template>

<style scoped>
.biz { height: 100%; display: flex; flex-direction: column; gap: 16px; }
.biz__grow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 10px;
  align-items: stretch;
}
.biz__layer { padding: 16px; position: relative; overflow: hidden; min-height: 118px; }
.biz__layer-title { margin-top: 8px; font-size: 18px; font-weight: 720; letter-spacing: -0.02em; }
.biz__layer-hint { margin-top: 6px; font-size: 11px; color: #94A3B8; line-height: 1.35; }
.biz__link {
  align-self: center;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #059669;
  text-align: center;
  white-space: nowrap;
}
.biz__bio { border-color: rgba(5, 150, 105, 0.35); }
.biz__orbit {
  position: absolute;
  right: -30px;
  top: -30px;
  width: 110px;
  height: 110px;
  border: 1.5px dashed rgba(5, 150, 105, 0.45);
  border-radius: 50%;
  opacity: 0.85;
}
.biz__bottom { display: grid; gap: 10px; margin-top: 4px; }
.biz__circular,
.biz__gtm { padding: 14px 16px; }
.biz__flow,
.biz__path {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.01em;
}
.biz__note { margin-top: 8px; font-size: 11px; color: #64748B; }
.biz__logic {
  font-size: 13px;
  color: #94A3B8;
  padding-top: 4px;
}
</style>
