<script lang="ts" setup>

</script>

<template>
  <div class="heading-section">
    <span class="heading-section__text">
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>

.heading-section {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 0 0 var(--border-main);
  background-color: var(--text-light);
  padding: var(--padding-section-heading-y) var(--padding-btn-x);
  
  border-radius: var(--border-radius-pill);
  border: 2px solid var(--border-main);
  
  &__text {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-btn);
    font-weight: 600;
    color: var(--text-primary);
  }
}

</style>