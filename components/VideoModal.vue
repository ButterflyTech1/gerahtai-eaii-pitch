<script setup lang="ts">
import { computed, onUnmounted, watch } from 'vue'
import {
  ASSETS,
  hasYoutubePitch,
  resolveYoutubeId,
  youtubeEmbedUrl,
  youtubeWatchPageUrl,
} from '../src/config/assets'
import AssetGate from './AssetGate.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const videoId = computed(() => resolveYoutubeId())
const ready = computed(() => hasYoutubePitch())
const embedSrc = computed(() => (videoId.value ? youtubeEmbedUrl(videoId.value) : ''))
const watchUrl = computed(() => (videoId.value ? youtubeWatchPageUrl(videoId.value) : ''))

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(() => props.open, (v) => {
  if (v) document.addEventListener('keydown', onKey)
  else document.removeEventListener('keydown', onKey)
})

onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Pitch video"
      @click.self="emit('close')"
    >
      <div class="modal">
        <header>
          <h2>Watch the Pitch</h2>
          <button class="btn-ghost" type="button" aria-label="Close video" @click="emit('close')">Close</button>
        </header>

        <div v-if="ready" class="player-wrap">
          <iframe
            :src="embedSrc"
            title="GerahtAI pitch video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          />
          <div class="actions">
            <a class="btn-ghost" :href="watchUrl" target="_blank" rel="noopener noreferrer">Open on YouTube</a>
            <a class="btn-ghost" :href="ASSETS.videoPage" target="_blank" rel="noopener noreferrer">Board share page</a>
          </div>
        </div>

        <AssetGate
          v-else
          title="Add your unlisted YouTube link"
          detail="Set VITE_YOUTUBE_VIDEO_ID (or VITE_YOUTUBE_WATCH_URL) in .env, or paste the ID into src/config/assets.ts, then rebuild."
        >
          <p class="path">Example: VITE_YOUTUBE_VIDEO_ID=dQw4w9WgXcQ</p>
        </AssetGate>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(8px);
  display: grid;
  place-items: center;
  padding: 1.5rem;
}
.modal {
  width: min(960px, 100%);
  background: #0b1220;
  border: 1px solid rgba(5, 150, 105, 0.35);
  border-radius: 1rem;
  padding: 1.25rem 1.35rem 1.5rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
h2 {
  margin: 0;
  font-size: 1.15rem;
}
.player-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 0.6rem;
  overflow: hidden;
}
.player-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.actions {
  margin-top: 0.85rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: #E2E8F0;
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.5rem;
  padding: 0.55rem 0.9rem;
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
}
.path {
  margin-top: 0.75rem;
  font-family: ui-monospace, monospace;
  font-size: 0.78rem;
  color: #059669;
}
</style>
