<template>
  <SceneFrame
    kicker="07 · TEAM"
    page="07"
    footer-left="GerahtAI | EAII Round 2"
    footer-right="Advisors needed to complete the scientific loop"
  >
    <div class="team">
      <div class="g-kicker">Core team</div>
      <h2 class="team__title">Butterfly Tech / GerahtAI</h2>

      <div class="team__core">
        <div v-click="1" class="team__card g-panel-strong">
          <div class="team__avatar">BS</div>
          <div>
            <div class="team__name">Bisrat Seyoum</div>
            <div class="team__role">CEO / strategy</div>
            <div class="team__tags">
              <span class="team__tag">Software engineer</span>
            </div>
          </div>
        </div>
        <div v-click="1" class="team__card g-panel-strong">
          <div class="team__avatar">TA</div>
          <div>
            <div class="team__name">Tomas Asefa</div>
            <div class="team__role">Software engineering, development, research</div>
          </div>
        </div>
      </div>

      <div v-click="2" class="team__advisors">
        <div class="g-kicker" style="margin-bottom: 12px">Advisors needed</div>
        <div class="team__grid">
          <div v-for="a in advisors" :key="a" class="team__advisor g-panel">
            {{ a }}
          </div>
        </div>
      </div>
    </div>
  </SceneFrame>
</template>

<script setup>
const advisors = ['Soil science', 'Agronomy', 'Lab QA', 'Waste processing']
</script>

<style scoped>
.team {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  text-align: center;
  padding-bottom: 12px;
}
.team__title {
  font-size: 28px;
  font-weight: 720;
  letter-spacing: -0.02em;
}
.team__core {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  width: min(760px, 100%);
}
.team__card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 24px;
  text-align: left;
}
.team__avatar {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(5, 150, 105, 0.18);
  border: 1px solid rgba(5, 150, 105, 0.4);
  color: #ECFDF5;
  font-weight: 750;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}
.team__name { font-size: 22px; font-weight: 720; letter-spacing: -0.02em; }
.team__role { margin-top: 6px; font-size: 13px; color: #94A3B8; line-height: 1.35; }
.team__tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.team__tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(5, 150, 105, 0.45);
  background: rgba(5, 150, 105, 0.14);
  color: #ECFDF5;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.team__advisors { width: min(760px, 100%); }
.team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.team__advisor {
  padding: 14px 10px;
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
@media (max-width: 900px) {
  .team__core, .team__grid { grid-template-columns: 1fr 1fr; }
}
</style>
