<script lang="ts" setup>
import { ArrowRight } from '@iconoir/vue';

interface ExperienceCardProps {
  imageUrl: string;
  imageAlt?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;

  companyName: string;
  duration: string;
  buttonText: string;
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
      <div class="experience-card__flower"></div>
    </div>

    <div class="experience-card__content">
      <div class="experience-card__company-info">
        <div v-if="$slots.logo" class="experience-card__logo">
          <slot name="logo" />
        </div>
        <h3 class="experience-card__company-name">{{ companyName }}</h3>
        <p class="experience-card__duration">{{ duration }}</p>
      </div>

      <NuxtLink :to="buttonLink" class="experience-card__button">
        {{ buttonText }}
        <ArrowRight />
      </NuxtLink>

    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '~/assets/scss/global' as *;

.experience-card {
  width: 100%;
  max-width: 320px;
  border-radius: var(--border-radius-card);
  background-color: var(--bg-card);
  border: 2px solid var(--border-main);
  overflow: hidden;
  box-shadow: 0 4px 0 0 var(--border-main);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 0 var(--border-main);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 0 0 var(--border-main);
  }

  @include mq('md') {
    max-width: 360px;
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 62.5%;
    background-color: $token-yellow;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    position: absolute;
    transform: translateY(30px) scale(0.5) translateX(30px);
    object-fit: cover;
    z-index: 2;
  }

  &__flower {
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: $token-orange;
    border-radius: 50% 50% 0 50%;
    transform: rotate(45deg);
    top: -30px;
    right: -30px;
    z-index: 1;
  }

  &__content {
    padding: var(--gap-md);
    display: flex;
    flex-direction: column;
    gap: var(--gap-md);
    flex-grow: 1;
    justify-content: space-between;
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
    font-size: var(--font-size-small);
    color: var(--text-main);
    margin: 0;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xs);
    padding: var(--padding-btn-y) var(--padding-btn-x);
    border-radius: var(--border-radius-pill);
    border: 2px solid;
    font-family: var(--font-family-heading);
    font-size: var(--font-size-btn);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transform: translateY(0);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    width: 100%;

    background-color: $token-red;
    border-color: $token-red;
    color: var(--text-light);
    box-shadow: 0 4px 0 0 darken($token-red, 15%);

    &:hover {
      background-color: darken($token-red, 5%);
      border-color: darken($token-red, 5%);
      transform: translateY(-2px);
      box-shadow: 0 6px 0 0 darken($token-red, 15%);
    }
    &:active {
      transform: translateY(1px);
      box-shadow: 0 3px 0 0 darken($token-red, 15%);
    }
  }
}
</style>