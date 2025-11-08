<script lang="ts" setup>
import HeroButton from './HeroButton.vue';
import { Suitcase } from '@iconoir/vue';
import Header from '~/components/ui/Header.vue';
</script>

<template>
  <section class="hero" ref="heroSectionRef">
    <Header />
    <div class="hero__content">
      <div class="hero__image-card">
        <div class="hero__photo-container">
          <NuxtImg src="/images/ardy-putra-photo.png" alt="Ardy Putra" class="hero__photo" format="webp"
            height="200px" preload />
        </div>
        <NuxtImg src="/images/hero-image-flower.svg" alt="Hero Image Flower" class="hero__flower" height="150px"
          preload />
      </div>
      <h1 class="hero__headline">
        I'm <span class="hero__highlight">Ardy Putra</span>, I'm a
        software engineer focused on
        <span class="hero__highlight">website & applications</span>
      </h1>
    </div>
    <div class="hero__actions">
      <HeroButton to="#projects" variant="primary">
        View My Works
        <template #icon>
          <Suitcase />
        </template>
      </HeroButton>

      <div class="hero__actions-secondary">
        <HeroButton to="#contact" variant="outline">
          Get in Touch
        </HeroButton>

        <HeroButton to="#" variant="outline" target="_blank">
          My Resume
        </HeroButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.hero {
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

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: rgb(from var(--bg-primary) r g b / 10%);
    mask-image: url('/images/wavy-grid-bg.svg');
    mask-position: center top;
    mask-repeat: no-repeat;
    top: -10px;

    @include mq('sm') {
      -webkit-mask-size: 80%;
    }

    @include mq('lg') {
      -webkit-mask-size: 50%;
    }
  }
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--container-max-width-sm);

  @include mq('sm') {
    max-width: var(--container-max-width-md);
    flex-direction: row;
    align-items: flex-start;
  }
}

.hero__image-card {
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
  flex-shrink: 0;

  @include mq('sm') {
    margin: 0px var(--padding-card);
  }
}

.hero__photo-container {
  display: flex;
  height: 100%;
  position: relative;
  align-items: flex-end;
}

.hero__photo {
  object-fit: cover;
  z-index: 2;
  object-position: 10px;
}

.hero__flower {
  position: absolute;
  top: -40px;
  right: -40px;
}

.hero__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-md);
}

.hero__actions-secondary {
  display: flex;
  justify-content: center;
  gap: var(--gap-md);
}

.hero__headline {
  font-size: var(--font-size-h3);
  text-align: left;
  color: var(--text-main);
  margin-bottom: var(--margin-bottom-xxl);
  padding: 0 var(--padding-btn-y);

  @include mq('sm') {
    font-size: var(--font-size-h2);
  }

  @include mq('lg') {
    font-size: var(--font-size-h1);
  }
}

.hero__highlight {
  color: var(--text-primary);
}
</style>