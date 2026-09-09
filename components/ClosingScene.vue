<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useNav } from '@slidev/client'
import {
  ASSETS,
  hasYoutubePitch,
  resolveYoutubeId,
  youtubeWatchPageUrl,
} from '../src/config/assets'
import SoilBackground from './SoilBackground.vue'
import PlatformCTA from './PlatformCTA.vue'
import ContactSection from './ContactSection.vue'

const { clicks } = useNav()
const c = computed(() => clicks.value)

const hasVideo = ref(false)
const hasPdf = ref(true)
const ytUrl = computed(() => {
  const id = resolveYoutubeId()
  return id ? youtubeWatchPageUrl(id) : ASSETS.videoPage
})

onMounted(() => {
  hasVideo.value = hasYoutubePitch()
})

function openVideo() {
  ;(window as any).__gerahtOpenVideo?.()
}
</script>

<template>
  <div class="pitch-scene closing">
    <SoilBackground :intensity="0.3" />

    <div class="content">
      <p v-show="c >= 1" class="question fade-rise">“What does this soil actually need?”</p>

      <div v-show="c >= 2" class="brand-block fade-rise">
        <img :src="ASSETS.logo" alt="" class="logo" width="56" height="56" />
        <h2>GERAHTAI</h2>
        <p class="tagline">AI-assisted soil intelligence<br />for Ethiopian agriculture</p>
      </div>

      <p v-show="c >= 3" class="eyebrow fade-rise">EAII Startup Support Program — Round 2</p>
      <p v-show="c >= 3" class="company muted fade-rise">Butterfly Tech / GerahtAI</p>

      <div v-show="c >= 4" class="platform fade-rise">
        <p class="eyebrow">The GerahtAI Platform</p>
        <PlatformCTA />
      </div>

      <div v-show="c >= 5" class="downloads fade-rise">
        <button class="btn-emerald" type="button" @click="openVideo">Watch the Pitch</button>
        <a class="btn-ghost" :href="ASSETS.videoPage" target="_blank" rel="noopener noreferrer">Board video page</a>
        <a
          v-if="hasVideo"
          class="btn-ghost"
          :href="ytUrl"
          target="_blank"
          rel="noopener noreferrer"
        >Open on YouTube</a>
        <a class="btn-ghost" :href="ASSETS.pdf" download>Download Pitch Deck</a>
      </div>

      <div v-show="c >= 6" class="fade-rise">
        <ContactSection />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  z-index: 1;
  max-width: 52rem;
}
.question {
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0 0 1.5rem;
  max-width: 28rem;
  line-height: 1.25;
}
.brand-block {
  margin-bottom: 1.25rem;
}
.logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
}
h2 {
  margin: 0.5rem 0 0.35rem;
  letter-spacing: 0.1em;
  font-size: 2.2rem;
}
.tagline {
  margin: 0;
  color: #e2e8f0;
  line-height: 1.4;
}
.company {
  margin: 0.35rem 0 1rem;
}
.platform {
  margin: 1.25rem 0;
}
.downloads {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
</style>
