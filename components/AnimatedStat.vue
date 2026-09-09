<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  active?: boolean
  duration?: number
  label: string
}>(), {
  prefix: '',
  suffix: '',
  decimals: 0,
  active: false,
  duration: 1100,
})

const display = ref(props.prefix + (props.decimals ? props.value.toFixed(props.decimals) : String(props.value)) + props.suffix)
const shown = ref(false)

function animate() {
  if (shown.value) return
  shown.value = true
  const start = performance.now()
  const from = 0
  const to = props.value
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / props.duration)
    const eased = 1 - (1 - t) ** 3
    const current = from + (to - from) * eased
    const body = props.decimals > 0 ? current.toFixed(props.decimals) : String(Math.round(current))
    display.value = `${props.prefix}${body}${props.suffix}`
    if (t < 1) requestAnimationFrame(tick)
    else display.value = `${props.prefix}${props.decimals > 0 ? to.toFixed(props.decimals) : to}${props.suffix}`
  }
  requestAnimationFrame(tick)
}

watch(() => props.active, (v) => { if (v) animate() })
onMounted(() => { if (props.active) animate() })
</script>

<template>
  <div class="stat" :class="{ active }">
    <div class="value">{{ display }}</div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat {
  padding: 1rem 1.1rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 0.75rem;
  background: rgba(15, 23, 42, 0.55);
  opacity: 0.35;
  transform: translateY(8px);
  transition: opacity 0.45s var(--geraht-ease), transform 0.45s var(--geraht-ease), border-color 0.45s;
}
.stat.active {
  opacity: 1;
  transform: translateY(0);
  border-color: rgba(5, 150, 105, 0.45);
}
.value {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  color: var(--geraht-emerald);
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.label {
  margin-top: 0.4rem;
  color: var(--geraht-muted);
  font-size: 0.82rem;
  line-height: 1.35;
}
</style>
