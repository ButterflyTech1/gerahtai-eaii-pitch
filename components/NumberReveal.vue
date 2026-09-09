<template>
  <div class="nr" :class="{ 'nr--in': active }">
    <div class="nr__value">{{ value }}</div>
    <div class="nr__label">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
  active: { type: Boolean, default: true },
})
</script>

<style scoped>
.nr {
  padding: 16px 18px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.55);
  opacity: 0;
  transform: translateY(10px) scale(0.96);
  transition: opacity 0.5s cubic-bezier(0.22, 0.75, 0.2, 1), transform 0.55s cubic-bezier(0.22, 0.75, 0.2, 1);
}
.nr--in {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.nr__value {
  font-size: 40px;
  line-height: 1;
  font-weight: 750;
  letter-spacing: -0.04em;
  color: #059669;
  font-variant-numeric: tabular-nums;
}
.nr__label {
  margin-top: 8px;
  font-size: 12px;
  color: #CBD5E1;
  line-height: 1.3;
}
</style>
