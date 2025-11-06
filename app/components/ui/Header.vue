<script lang="ts" setup>

</script>

<template>
  <div class="header__container">
    <NuxtImg 
      src="/ardy-putra-logo.svg" 
      alt="Logo" 
      class="header__logo" 
      height="32px"
      preload />
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: var(--gap-sm);
  }
}
</style>