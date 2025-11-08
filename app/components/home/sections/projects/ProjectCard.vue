<script lang="ts" setup>
import { GithubCircle, ArrowUpRightSquare } from '@iconoir/vue';
</script>

<template>
  <div class="project-card">
    <div class="project-card__image-placeholder">

    </div>
    <div class="project-card__content-container">
      <div class="project-card__content">
        <div class="project-card__title-container">
          <h3 class="project-card__title">
            Spotify Listening Dashboard
          </h3>
          <div class="project-card__tag-container">
            <div class="project-card__tag-grid">

            </div>
          </div>
        </div>
        <p class="project-card__description">
          A dashboard to visualize Spotify listening habits. Built to solve the problem of ephemeral streaming data using the Spotify API and anime.js for staggered animations
        </p>
      </div>
      <div class="project-card__action-footer">
        <NuxtLink to="" class="project-card__action-github">
          Source Code <GithubCircle stroke-width="1.5"/>
        </NuxtLink>
        <NuxtLink to="" class="project-card__action-live">
          Live Website <ArrowUpRightSquare stroke-width="1.5"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$image-placeholder-height-phone: 140px;
$image-placeholder-height-tablet: 240px;

.project-card {
  width: 100%;
  border: 2px solid var(--border-main);
  position: relative;
  display: flex;
  flex-direction: column;

  @include shadow-card;

  &__image-placeholder {
    height: $image-placeholder-height-phone;
    border-bottom: 2px solid var(--border-main);
    background-color: rgba($color: $token-green, $alpha: 0.1);

    @include mq('sm') {
      height: $image-placeholder-height-tablet;
    }
  }

  &__content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__content {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid var(--border-main);
    background-color: var(--bg-main);
    padding: $space-md;
  }

  &__action-footer {
    width: 100%;
    height: 64px;
    display: flex;
    font-family: var(--font-family-heading);
    font-weight: 600;
    
    a {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: $token-white;
      gap: $space-xxs;
      padding: $space-xs;
      font-size: $font-size-xs;
      border: 1px solid var(--border-main);

      @include mq('sm') {
        font-size: $font-size-base;
      }
    }
  }

  &__action-github {
    background-color: $token-gray-dark;
  }

  &__action-live {
    background-color: $token-green;
  }
}
</style>