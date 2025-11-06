<script lang="ts" setup>
import type { StyleValue } from 'vue'
defineProps({
  to: {
    type: String,
    required: true
  },
  style: {
    type: [String, Object] as PropType<StyleValue>,
    default: ''
  }
})
</script>

<template>
  <NuxtLink :to="to" class="social-media-button" target="_blank" :style="style">
    <span class="social-media-button__icon">
      <slot name="icon" />
    </span>
    <span class="social-media-button__text">
      <slot />
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>

$icon-size: 2rem;
$padding-social-media-card: 12px;

.social-media-button {
  @include shadow-card(4px);
  display: flex;
  align-items: center;
  padding: $padding-social-media-card;
  width: 100%;
  justify-content: center;
  gap: var(--gap-sm);
  border: 3px solid var(--border-main);
  background-color: $token-white;
  color: $token-black;

  &__icon {
    display: flex;
  }

  &__text {
    font-family: var(--font-family-heading);
    font-weight: 600;
  }
}
</style>