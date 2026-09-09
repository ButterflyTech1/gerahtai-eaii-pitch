<script setup lang="ts">
import { ref } from 'vue'
import PitchNav from './components/PitchNav.vue'
import VideoModal from './components/VideoModal.vue'

const videoOpen = ref(false)

function openVideo() {
  videoOpen.value = true
}

if (typeof window !== 'undefined') {
  ;(window as any).__gerahtOpenVideo = openVideo
}
</script>

<template>
  <PitchNav @open-video="openVideo" />
  <VideoModal :open="videoOpen" @close="videoOpen = false" />
</template>
