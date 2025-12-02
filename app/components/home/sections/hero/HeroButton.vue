<script setup lang="ts">
const { $animate } = useNuxtApp();
const buttonRef = ref<HTMLElement | null>(null);

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

const handleMouseEnter = () => {
  if (!buttonRef.value || !$animate) return;
  
  $animate(buttonRef.value, {
    scale: 1.05,
    duration: 300,
    ease: 'out(2)'
  });

  // Animate icon if present
  const icon = buttonRef.value.querySelector('.btn__icon');
  if (icon) {
    $animate(icon, {
      translateX: [0, 5],
      duration: 300,
      ease: 'out(2)'
    });
  }
};

const handleMouseLeave = () => {
  if (!buttonRef.value || !$animate) return;
  
  $animate(buttonRef.value, {
    scale: 1,
    duration: 300,
    ease: 'out(2)'
  });

  const icon = buttonRef.value.querySelector('.btn__icon');
  if (icon) {
    $animate(icon, {
      translateX: 0,
      duration: 300,
      ease: 'out(2)'
    });
  }
};
</script>

<template>
  <NuxtLink 
    :to="to" 
    class="btn" 
    :class="`btn--${variant}`"
    ref="buttonRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span class="btn__text">
      <slot />
    </span>
    <span v-if="$slots.icon" class="btn__icon">
      <slot name="icon" />
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use 'sass:color';

.btn {
  @include shadow-button(6px);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  padding: var(--padding-btn-y) var(--padding-btn-x);

  border-radius: var(--border-radius-pill);
  border: 2px solid var(--border-main);

  font-family: var(--font-family-heading);
  font-size: var(--font-size-btn);
  font-weight: 600;

  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &--primary {
    background-color: var(--bg-primary);
    color: var(--text-light);
    border-color: var(--bg-primary);
    border: 2px solid var(--border-main);
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

</style>