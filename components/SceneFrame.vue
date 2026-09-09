<template>
  <div class="g-frame">
    <div class="g-grid" />
    <div class="g-topbar">
      <div class="g-topbar-left">
        <GerahtAILogo :size="24" />
        <div class="g-kicker">{{ kicker }}</div>
      </div>
      <div class="g-page">{{ page }}</div>
    </div>
    <div class="g-frame__body">
      <slot />
    </div>
    <div v-if="footerLeft || footerRight" class="g-footer">
      <span>{{ footerLeft }}</span>
      <span>{{ footerRight }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  kicker: { type: String, default: '' },
  page: { type: String, default: '' },
  footerLeft: { type: String, default: 'GerahtAI · EAII Round 2' },
  footerRight: { type: String, default: '' },
})
</script>

<style scoped>
.g-topbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.g-frame__body {
  position: relative;
  z-index: 2;
  height: calc(100% - 72px);
  padding-top: 16px;
  padding-bottom: 8px;
  box-sizing: border-box;
}
</style>
