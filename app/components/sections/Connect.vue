<script lang="ts" setup>
</script>

<template>
  <section class="connect">
    <div class="connect__grid"></div>
    <div class="connect__section">
      <div class="connect__marquee"></div>
      <div class="connect__container">
        <div class="connect__content">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

$background-black-shadow: rgb(from var(--text-main) r g b / 10%);

.connect {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: var(--bg-accent);

  &__container {
    padding: var(--padding-section-x) var(--padding-section-y);
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

   &__grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: linear-gradient(to right, $background-black-shadow 1px, transparent 1px), linear-gradient(to bottom, $background-black-shadow 1px, transparent 1px);
    background-size: 80px 80px;
    margin: 0 auto;
  }

  &__section {
    display: flex;
    flex-direction: column;
    z-index: 20;
  }

  &__marquee {
    width: 100%;
    height: 128px;
    background-color: var(--bg-orange);
  }

   &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
    max-width: var(--container-max-width-sm);
  }
}
</style>