<script setup lang="ts">
import { ASSETS } from '../src/config/assets'

withDefaults(defineProps<{
  intensity?: number
  showPhoto?: boolean
}>(), {
  intensity: 0.35,
  showPhoto: true,
})
</script>

<template>
  <div class="soil-bg" aria-hidden="true">
    <div
      v-if="showPhoto"
      class="photo"
      :style="{ backgroundImage: `url(${ASSETS.images.hero})`, opacity: intensity }"
    />
    <div class="gradient" />
    <div class="particles">
      <span v-for="n in 18" :key="n" class="p" :style="{ left: `${(n * 17) % 100}%`, animationDelay: `${n * 0.35}s` }" />
    </div>
  </div>
</template>

<style scoped>
.soil-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.photo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.7) contrast(1.05);
}
.gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(5, 150, 105, 0.18), transparent 50%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.92) 70%, #0F172A);
}
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.p {
  position: absolute;
  bottom: 10%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(236, 253, 245, 0.55);
  animation: particleDrift 7s linear infinite;
}
</style>
