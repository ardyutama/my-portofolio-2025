<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  variant: {
    type: String as () => 'primary' | 'outline',
    default: 'primary',
  },
});
</script>

<template>
  <NuxtLink :to="to" class="btn" :class="`btn--${variant}`">
    <span class="btn__text">
      <slot />
    </span>
    <span v-if="$slots.icon" class="btn__icon">
      <slot name="icon" />
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/global' as *;
@use 'sass:color';

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 0 0 var(--border-main);
  
  gap: var(--gap-xs);
  padding: var(--padding-btn-y) var(--padding-btn-x);
  
  border-radius: var(--border-radius-pill);
  border: 2px solid var(--border-main);
  
  font-family: var(--font-family-heading);
  font-size: var(--font-size-btn);
  font-weight: 600;
  
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;

  &--primary {
    background-color: var(--bg-primary);
    color: var(--text-light);
    border-color: var(--bg-primary);
    border: 2px solid var(--border-main) ;

    &:hover {
      background-color: color.adjust($token-blue, $lightness: -5%);
    }
  }

  &--outline {
    background-color: var(--bg-card);
    color: var(--text-main);
    border-color: var(--border-main);

    &:hover {
      background-color: var(--bg-main);
    }
  }

  .btn__icon {
    display: inline-flex;
    align-items: center;
  }
}

.btn:hover {
  box-shadow: 0 2px 0 0 var(--border-main);
  transform: translateY(2px);
}
</style>