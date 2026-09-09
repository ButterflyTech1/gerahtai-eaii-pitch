<script setup lang="ts">
import { ASSETS } from '../src/config/assets'

withDefaults(defineProps<{
  label?: string
}>(), {
  label: 'Open GerahtAI Platform →',
})
</script>

<template>
  <a
    class="btn-emerald"
    :href="ASSETS.platformUrl"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
  >
    {{ label }}
  </a>
</template>
