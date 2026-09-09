<script setup lang="ts">
import { computed } from 'vue'
import { CONTACT, isPlaceholder } from '../src/config/contact'

const address = computed(() => CONTACT.address)
const phone = computed(() => CONTACT.phone)
const phoneSecondary = computed(() => CONTACT.phoneSecondary)
</script>

<template>
  <section class="contact" aria-label="Company contact">
    <div class="brand-block">
      <p class="eyebrow">Company</p>
      <h3>{{ CONTACT.company }}</h3>
      <a class="email" :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a>
    </div>

    <div class="team-block">
      <p class="eyebrow">Team</p>
      <p><strong>Bisrat Seyoum</strong> — CEO / Strategy</p>
      <p><strong>Tomas Asefa</strong> — Software Engineering, Development, Research</p>
    </div>

    <div class="meta-block">
      <p class="eyebrow">Contact details</p>
      <p v-if="isPlaceholder(address)" class="placeholder">Address: {{ address }}</p>
      <p v-else>{{ address }}</p>

      <template v-if="isPlaceholder(phone)">
        <p class="placeholder">Phone: {{ phone }}</p>
      </template>
      <a v-else class="phone" :href="`tel:${phone}`">{{ phone }}</a>

      <template v-if="isPlaceholder(phoneSecondary)">
        <p class="placeholder">Secondary phone: {{ phoneSecondary }}</p>
      </template>
      <a v-else class="phone" :href="`tel:${phoneSecondary}`">{{ phoneSecondary }}</a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
h3 {
  margin: 0.35rem 0 0.5rem;
  font-size: 1.15rem;
}
.email, .phone {
  color: var(--geraht-emerald);
  text-decoration: none;
}
.team-block p, .meta-block p {
  margin: 0.35rem 0;
  color: var(--geraht-muted);
  font-size: 0.9rem;
}
.placeholder {
  opacity: 0.65;
  font-family: ui-monospace, monospace;
  font-size: 0.78rem !important;
}
@media (max-width: 900px) {
  .contact {
    grid-template-columns: 1fr;
  }
}
</style>
