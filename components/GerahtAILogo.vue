<template>
  <div class="g-logo" :class="{ 'g-logo--with-text': withText }" :style="{ '--logo-size': size + 'px' }">
    <img
      src="/brand/gerahtai-mark.png"
      alt="GerahtAI"
      width="48"
      height="48"
      class="g-logo__mark"
      decoding="async"
    />
    <span v-if="withText" class="g-logo__text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 28 },
  withText: { type: Boolean, default: false },
  text: { type: String, default: 'GerahtAI' },
})
</script>

<style scoped>
.g-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.g-logo__mark {
  width: var(--logo-size);
  height: var(--logo-size);
  object-fit: contain;
  border-radius: 6px;
  image-rendering: auto;
}
.g-logo__text {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #ECFDF5;
}
</style>
