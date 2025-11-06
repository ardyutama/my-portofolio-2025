<script lang="ts" setup>

</script>

<template>
  <div class="connect-marquee">
    <div class="connect-marquee__container">
      <div class="connect-marquee__content">
        <h1 class="connect-marquee__text">Let's Connect</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.connect-marquee {
  width: 100%;
  background-color: var(--bg-orange);
  padding: $space-md $space-lg;
  &__container {
    display: flex;
    align-items: center;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  &__text {
    color: $token-white;
    margin: 0;
  }
}
</style>