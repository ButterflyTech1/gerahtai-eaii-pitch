<script setup lang="ts">
withDefaults(defineProps<{ opacity?: number }>(), { opacity: 0.18 })
</script>

<template>
  <svg class="grid" aria-hidden="true" :style="{ opacity }">
    <defs>
      <pattern id="sci-grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(5,150,105,0.35)" stroke-width="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#sci-grid)" />
  </svg>
</template>

<style scoped>
.grid {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
