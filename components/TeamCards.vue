<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { ASSETS } from '../src/config/assets'
import ScientificGrid from './ScientificGrid.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const advisors = ['Soil Science', 'Agronomy', 'Lab QA', 'Waste Processing']
</script>

<template>
  <div class="pitch-scene team">
    <ScientificGrid :opacity="0.12" />
    <div class="content">
      <div v-show="c >= 1" class="brand fade-rise">
        <img :src="ASSETS.logo" alt="" width="48" height="48" />
        <p class="eyebrow">Team</p>
        <h2>GERAHTAI</h2>
      </div>

      <div class="cards">
        <article v-show="c >= 2" class="card soft-panel fade-rise">
          <div class="avatar" aria-hidden="true">BS</div>
          <h3>Bisrat Seyoum</h3>
          <p class="role">CEO / Strategy</p>
        </article>

        <article v-show="c >= 3" class="card soft-panel fade-rise">
          <div class="avatar" aria-hidden="true">TA</div>
          <h3>Tomas Asefa</h3>
          <p class="role">Software Engineering</p>
          <p class="sub">Development · Research</p>
        </article>
      </div>

      <div v-show="c >= 4" class="advisors fade-rise">
        <p class="eyebrow">Advisors needed</p>
        <div class="slots">
          <div v-for="a in advisors" :key="a" class="slot">{{ a }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  z-index: 1;
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
}
.brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.brand h2 {
  margin: 0.25rem 0 0;
  letter-spacing: 0.14em;
  font-size: 2rem;
}
.cards {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: left;
}
.card {
  padding: 1.35rem 1.4rem;
}
.avatar {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(5, 150, 105, 0.2);
  color: var(--geraht-emerald-soft);
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 0.85rem;
}
.card h3 {
  margin: 0;
  font-size: 1.2rem;
}
.role {
  margin: 0.35rem 0 0;
  color: var(--geraht-emerald);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.78rem;
}
.sub {
  margin: 0.25rem 0 0;
  color: var(--geraht-muted);
  font-size: 0.85rem;
}
.advisors {
  margin-top: 2rem;
}
.slots {
  margin-top: 0.7rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;
}
.slot {
  padding: 0.85rem 0.5rem;
  border: 1px dashed rgba(5, 150, 105, 0.45);
  border-radius: 0.6rem;
  color: #cbd5e1;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
@media (max-width: 800px) {
  .cards, .slots { grid-template-columns: 1fr 1fr; }
}
</style>
