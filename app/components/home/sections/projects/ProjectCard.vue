<script lang="ts" setup>
import { GithubCircle, ArrowUpRightSquare } from '@iconoir/vue';
import TechTag from './TechTag.vue';

defineProps({
  title: { type: String, required: true },
  tagline: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  tags: { type: Array as () => string[], default: () => [] },
  githubLink: { type: String, default: '#' },
  liveLink: { type: String, default: '#' }
});

</script>

<template>
  <div class="project-card__container">
    <div class="project-card__visual-container">
      <NuxtImg v-if="thumbnail" :src="thumbnail" :alt="title" class="project-card__visual-image" format="webp"
        quality="80" />
    </div>
    <div class="project-card__content-container">
      <div class="project-card__meta">
        <div class="project-card__tags" v-if="tags.length">
          <TechTag v-for="tag in tags" :key="tag" :label="tag" />
        </div>
        <div class="project-card__link">
          <NuxtLink :to="githubLink" target="_blank">
            <GithubCircle stroke-width="1.5" />
          </NuxtLink>
          <NuxtLink :to="liveLink" target="_blank">
            <ArrowUpRightSquare stroke-width="1.5" />
          </NuxtLink>
        </div>
      </div>
      <h3 class="project-card__title">
        {{ title }}
      </h3>
      <p class="project-card__description">{{ tagline }}</p>
      <div class="project-card__action">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  &__container {
    display: flex;
    flex-direction: column;
    height: 80vh;


    @include mq('md') {
      flex-direction: row;
    }
  }

  &__visual-container {
    display: flex;
    width: 100%;
    height: 50%;
    background-color: $token-gray-light;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    @include mq('md') {
      width: 50%;
      height: 100%;
      flex-direction: row;
    }
  }

  &__visual-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__content {
    display: flex;
    width: 50%;
    flex: 1;
  }

  &__title {
    font-family: var(--font-family-heading);
    font-size: $font-size-lg;
    font-weight: 700;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-xs);
  }

  &__link {
    padding-top: $space-sm;
    display: flex;
    gap: $space-xxs;

    a {
      color: $token-black;
    }
  }

  &__description {
    font-size: $font-size-sm;
    line-height: 1.5;
    color: var(--text-main);
  }

  &__content-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--gap-sm);
    justify-content: center;
    padding: $space-xxxl;
  }
}
</style>