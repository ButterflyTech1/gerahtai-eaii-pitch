<template>
  <svg class="ac" :viewBox="`0 0 ${w} ${h}`" :width="w" :height="h" aria-hidden="true">
    <line
      :x1="x1"
      :y1="y1"
      :x2="x2"
      :y2="y2"
      class="ac__line"
      :class="{ 'ac__line--on': active }"
      pathLength="1"
    />
  </svg>
</template>

<script setup>
defineProps({
  x1: { type: Number, default: 0 },
  y1: { type: Number, default: 0 },
  x2: { type: Number, default: 100 },
  y2: { type: Number, default: 0 },
  w: { type: Number, default: 100 },
  h: { type: Number, default: 40 },
  active: { type: Boolean, default: false },
})
</script>

<style scoped>
.ac {
  display: block;
  overflow: visible;
}
.ac__line {
  stroke: #059669;
  stroke-width: 1.5;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  opacity: 0.35;
  transition: opacity 0.3s ease;
}
.ac__line--on {
  opacity: 1;
  animation: ac-draw 0.85s cubic-bezier(0.22, 0.75, 0.2, 1) forwards;
}
@keyframes ac-draw {
  to { stroke-dashoffset: 0; }
}
</style>
