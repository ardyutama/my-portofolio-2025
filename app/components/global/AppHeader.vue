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
@use '~/assets/scss/global' as *;

.header {
  &__container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: $space-sm;
  }
}
</style>