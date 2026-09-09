<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { ASSETS } from '../src/config/assets'

const emit = defineEmits<{ openVideo: [] }>()
const { go, currentPage } = useNav()

const sections = [
  { id: 1, label: 'Problem' },
  { id: 2, label: 'Solution' },
  { id: 3, label: 'Technology' },
  { id: 4, label: 'Business' },
  { id: 5, label: 'Differentiation' },
  { id: 6, label: 'Team' },
  { id: 7, label: 'The Ask' },
]

const active = computed(() => currentPage.value)
</script>

<template>
  <nav class="pitch-nav" aria-label="Pitch navigation">
    <button class="brand" type="button" @click="go(1)">
      <img src="/brand/gerahtai-mark.png" alt="" width="22" height="22" />
      <span>GERAHTAI</span>
    </button>

    <div class="links">
      <button
        v-for="s in sections"
        :key="s.id"
        type="button"
        class="link"
        :class="{ active: active === s.id }"
        @click="go(s.id)"
      >
        {{ s.label }}
      </button>
    </div>

    <div class="actions">
      <button type="button" class="action" @click="emit('openVideo')">Watch Pitch</button>
      <a class="action" :href="ASSETS.videoPage" target="_blank" rel="noopener noreferrer">Share Video</a>
      <a class="action" :href="ASSETS.platformUrl" target="_blank" rel="noopener noreferrer">Platform</a>
      <a
        class="action action--emerald"
        :href="ASSETS.pdf"
        download="gerahtai-eaii-pitch-deck.pdf"
      >PDF</a>
    </div>
  </nav>
</template>

<style scoped>
.pitch-nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 80;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: min(1100px, calc(100vw - 48px));
  width: max-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(5, 150, 105, 0.28);
  backdrop-filter: blur(12px);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #ECFDF5;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  cursor: pointer;
}
.brand img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  border-radius: 4px;
}
.links {
  display: flex;
  gap: 2px;
}
.link {
  background: none;
  border: none;
  color: #94A3B8;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 8px;
  border-radius: 999px;
  cursor: pointer;
}
.link.active,
.link:hover {
  color: #ECFDF5;
  background: rgba(5, 150, 105, 0.22);
}
.actions {
  display: flex;
  gap: 4px;
}
.action {
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: transparent;
  color: #E2E8F0;
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 9px;
  border-radius: 999px;
  cursor: pointer;
}
.action--emerald {
  border-color: rgba(5, 150, 105, 0.55);
  color: #ECFDF5;
  background: rgba(5, 150, 105, 0.2);
}
@media (max-width: 980px) {
  .links { display: none; }
}
</style>
