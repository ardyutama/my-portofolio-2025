<script lang="ts" setup>
const marqueeItems = 8;
</script>

<template>
  <div class="connect-marquee">
    <div class="connect-marquee__container">
      <div class="connect-marquee__content" aria-hidden="true">
        <div class="connect-marquee__track">
          <template v-for="i in marqueeItems" :key="i">
            <h2 class="connect-marquee__text">Let's Connect</h2>
            <NuxtImg src="/images/star.svg" alt="" class="connect-marquee__star" height="52" width="52" />
          </template>
        </div>
        <div class="connect-marquee__track" aria-hidden="true">
          <template v-for="i in marqueeItems" :key="`duplicate-${i}`">
            <h2 class="connect-marquee__text">Let's Connect</h2>
            <NuxtImg src="/images/star.svg" alt="" class="connect-marquee__star" height="52" width="52" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.connect-marquee {
  width: 100%;
  background-color: var(--bg-orange);
  padding: $space-md 0;
  overflow: hidden;

  &__container {
    display: flex;
    align-items: center;
  }

  &__content {
    display: flex;
    align-items: center;
    width: max-content;
    animation: marquee 20s linear infinite;
    
    &:hover {
      animation-play-state: paused;
    }
  }

  &__track {
    display: flex;
    align-items: center;
    gap: $space-xl;
    padding: 0 $space-lg;
  }

  &__text {
    color: $token-white;
    white-space: nowrap;
    margin: 0;
    font-size: $font-size-xxl;
    text-transform: uppercase;
  }

  &__star {
    flex-shrink: 0;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>