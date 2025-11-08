<script lang="ts" setup>
import { ArrowRight } from '@iconoir/vue';

interface ExperienceCardProps {
  imageUrl: string;
  imageAlt?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;

  companyName: string;
  buttonLink: string;
}

withDefaults(defineProps<ExperienceCardProps>(), {
  imageAlt: 'Experience Image',
  imageWidth: 400,
  imageHeight: 700
});
</script>

<template>
  <div class="experience-card">
    <div class="experience-card__image-wrapper">
      <NuxtImg :src="imageUrl" :alt="imageAlt" class="experience-card__image" format="webp" :width="imageWidth" :height="imageHeight"
        preload />
      <NuxtImg src="/images/hero-image-flower.svg" alt="Hero Image Flower" class="experience-card__flower" height="150px"
          preload />
    </div>

    <div class="experience-card__content">
      <div class="experience-card__company-info">
        <div v-if="$slots.logo" class="experience-card__logo">
          <slot name="logo" />
        </div>
        <div class="experience-card__duration">
          <slot name="duration"/>
        </div>
      </div>
    </div>
    <NuxtLink :to="buttonLink" class="experience-card__button">
        What I've do
        <ArrowRight class="experience-card__button--icon"/>
    </NuxtLink>
  </div>
</template>



<style lang="scss" scoped>

$token-hitachi-red: #FC2403;

.experience-card {
  @include shadow-card(4px);
  width: 100%;
  width: 240px;
  background-color: var(--bg-card);
  border: 3px solid var(--border-main);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @include mq('md') {
    width: 280px;
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 62.5%;
    background-color: var(--bg-accent);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    position: absolute;
    transform: scale(0.5) translate(40px, 70px);
    object-fit: cover;
    z-index: 2;

    @include mq('md') {
       transform: scale(0.6) translate(40px, 70px);
    }
  }

  &__flower {
    position: absolute;
    transform: scale(1.3) translate(0%, -50%);

    z-index: 1;
  }

  &__content {
    padding: var(--gap-md);
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
    flex-grow: 1;
    justify-content: space-between;
    border-top: 3px solid var(--border-main);
  }

  &__company-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--gap-xs);
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px; 

    :deep(img) {
      height: 100%;
      width: auto;
    }
  }

  &__company-name {
    font-size: var(--font-size-md);
    font-family: var(--font-family-heading);
    color: var(--text-main);
    margin: 0;
  }

  &__duration {
    font-family: var(--font-family-heading);
    font-weight: 600;
    color: var(--text-main);
    margin: 0;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xs);
    padding: var(--padding-btn-y) var(--padding-btn-x);
    font-family: var(--font-family-heading);
    font-size: var(--font-size-btn);
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    border-top: 3px solid var(--border-main);
    background-color: $token-hitachi-red;
    color: var(--text-light);

    &--icon {
      height: 18px;
      width: 18px;
    }
  }
}
</style>