<script setup lang="ts">
defineProps<{
  title?: string
  detail?: string
}>()
</script>

<template>
  <div class="asset-gate soft-panel" role="status">
    <p class="eyebrow">{{ title || 'Asset pending' }}</p>
    <p class="detail">{{ detail || 'Drop the production file into the documented public path.' }}</p>
    <slot />
  </div>
</template>

<style scoped>
.asset-gate {
  padding: 1.25rem 1.5rem;
  max-width: 28rem;
}
.detail {
  margin: 0.6rem 0 0;
  color: var(--geraht-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
