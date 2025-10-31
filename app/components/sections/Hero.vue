<script lang="ts" setup>
import Button from '../ui/Button.vue';
import { Suitcase } from '@iconoir/vue';
import AppHeader from '../global/AppHeader.vue';
</script>

<template>
  <section class="hero-section" ref="heroSectionRef">
    <AppHeader />
    <div class="hero-image-card">
      <div class="hero-photo__container">
        <NuxtImg src="/images/ardy-putra-photo.png" alt="Ardy Putra" class="hero-photo__image" format="webp"
          height="200px" preload />
      </div>
      <NuxtImg src="/images/hero-image-flower.svg" alt="Hero Image Flower" class="hero-photo__flower" height="150px"
        preload />
    </div>
    <h1 class="hero-headline">
      I’m <span>Ardy Putra</span>, I’m a
      software engineer focused on
      <span>website & applications</span>
    </h1>
    <div class="hero-actions">
      <Button to="#projects" variant="primary">
        View My Works
        <template #icon>
          <Suitcase />
        </template>
      </Button>

      <div class="hero-actions__secondary">
        <Button to="#contact" variant="outline">
          Get in Touch
        </Button>

        <Button to="#" variant="outline" target="_blank">
          My Resume
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/global' as *;

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--padding-section-y) var(--padding-section-x);
  min-height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: rgba($token-blue, 0.1);

  mask-image: url('/images/wavy-grid-bg.svg');
  mask-position: center top;
  mask-repeat: no-repeat;
  top: -10px;

  @include mq('md') {
    -webkit-mask-size: 80%;
  }

  @include mq('lg') {
    -webkit-mask-size: 50%;
  }

}

.hero-image-card {
  position: relative;
  width: 150px;
  height: 225px;

  border-radius: 24px;
  background-color: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: var(--margin-bottom-xl);
}

.hero-photo {
  &__container {
    display: flex;
    height: 100%;
    position: relative;
    align-items: flex-end;
  }

  &__image {
    object-fit: cover;
    z-index: 2;
    object-position: 10px;
  }

  &__flower {
    position: absolute;
    top: -40px;
    right: -40px;
  }
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-md);
}

.hero-actions__secondary {
  display: flex;
  justify-content: center;
  gap: var(--gap-md);
}

.hero-headline {
  font-size: var(--font-size-h3);
  text-align: left;
  color: var(--text-main);
  margin-bottom: var(--margin-bottom-xxl);
  padding: 0 $space-md;

  span {
    color: var(--text-primary);
  }
}
</style>