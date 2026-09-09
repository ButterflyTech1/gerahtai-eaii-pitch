<template>
  <SceneFrame
    kicker="03 · SOLUTION"
    page="03"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Internal product source: current GerahtAI design handoff and scientific report architecture."
  >
    <div class="sol">
      <div class="g-title">
        A controlled soil-intelligence workflow —
        <span class="g-accent">not a black-box recommendation app</span>
      </div>
      <div class="g-sub">
        GerahtAI turns field and laboratory evidence into decision-support outputs that can be
        reviewed, corrected, approved, and traced.
      </div>

      <div class="sol__steps">
        <div v-click="1" class="sol__step g-panel">
          <div class="sol__num">1</div>
          <div>
            <h3>Field + Lab Data</h3>
            <p>Samples, site, indicators, method</p>
          </div>
        </div>
        <div v-click="2" class="sol__step g-panel">
          <div class="sol__num">2</div>
          <div>
            <h3>AI Diagnosis</h3>
            <p>Status, probabilities, confidence</p>
          </div>
        </div>
        <div v-click="3" class="sol__step g-panel">
          <div class="sol__num">3</div>
          <div>
            <h3>Scientific Validation</h3>
            <p>AI vs lab, scientist review</p>
          </div>
        </div>
        <div v-click="4" class="sol__step g-panel">
          <div class="sol__num">4</div>
          <div>
            <h3>Controlled Restoration</h3>
            <p>amendment match, batch QC, treatment</p>
          </div>
        </div>
      </div>

      <div v-click="5" class="sol__core g-panel-strong">
        <span class="g-kicker">Core proposition</span>
        <p>AI supports science; science supervises AI.</p>
      </div>
    </div>
  </SceneFrame>
</template>

<style scoped>
.sol {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
}
.sol__steps {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.sol__step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 18px;
  min-height: 92px;
}
.sol__num {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(5, 150, 105, 0.18);
  color: #059669;
  font-weight: 750;
  flex-shrink: 0;
}
.sol__step h3 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.sol__step p {
  margin-top: 6px;
  color: #94A3B8;
  font-size: 14px;
  line-height: 1.35;
}
.sol__core {
  margin-top: auto;
  padding: 16px 18px;
}
.sol__core p {
  margin-top: 8px;
  font-size: 20px;
  font-weight: 650;
  color: #ECFDF5;
}
</style>
