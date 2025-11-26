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
  <div class="project-card">
    <div class="project-card__visuals">
      <div class="browser-frame">
        <div class="browser-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="image-wrapper">
          <NuxtImg v-if="thumbnail" :src="thumbnail" :alt="title" class="project-image" format="webp" quality="80"
            fit="cover" />
        </div>
      </div>
    </div>

    <div class="project-card__body-wrapper">
      <div class="project-card__content">
        <div class="project-card__header">
          <h3 class="project-card__title">{{ title }}</h3>
          <div class="project-card__tags" v-if="tags.length">
            <TechTag v-for="tag in tags" :key="tag" :label="tag" />
          </div>
        </div>
        <p class="project-card__description">{{ tagline }}</p>
      </div>

      <div class="project-card__actions">
        <NuxtLink :to="githubLink" target="_blank" class="action-btn github">
          <span>Source Code</span>
          <GithubCircle stroke-width="1.5" />
        </NuxtLink>
        <NuxtLink :to="liveLink" target="_blank" class="action-btn live">
          <span>Live Website</span>
          <ArrowUpRightSquare stroke-width="1.5" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$local-mac-red: #FF5F56;
$local-mac-yellow: #FFBD2E;
$local-mac-green: #27C93F;
$local-frame-height: 200px;
$local-frame-radius: 6px;
$border-value: 3px solid var(--border-main);

.project-card {
  width: 100%;
  background-color: var(--bg-main);
  display: flex;
  flex-direction: column;
  border: $border-value;
  overflow: hidden;

  @include shadow-card;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px 0px var(--border-main);

    .browser-frame {
      transform: translateY(-2px);
    }

    .project-image {
      transform: scale(1.03);
    }
  }

  &__visuals {
    background-color: var(--bg-white-light);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .browser-frame {
    width: 100%;
    height: $local-frame-height;
    background: var(--bg-main);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }

  .browser-header {
    height: 24px;
    background-color: var(--bg-white-light);
    display: flex;
    align-items: center;
    border-bottom: $border-value;
    gap: var(--gap-xs);
    padding-left: 10px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid var(--border-main);

      &.red {
        background-color: $local-mac-red;
      }

      &.yellow {
        background-color: $local-mac-yellow;
      }

      &.green {
        background-color: $local-mac-green;
      }
    }
  }

  .image-wrapper {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.5s ease;
  }

  &__body-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__content {
    padding: $space-md;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
    border-top: $border-value;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: var(--gap-xs);
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

  &__description {
    font-size: $font-size-sm;
    line-height: 1.5;
    color: var(--text-main);
  }

  &__actions {
    display: flex;
    border-top: $border-value;
  }

  .action-btn {
    flex: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-xs);
    padding: $space-sm;
    font-family: var(--font-family-heading);
    font-weight: 700;
    text-decoration: none;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(1.1);
    }

    &.github {
      background-color: $token-gray-dark;
      color: $token-white;
      border-right: $border-value;
    }

    &.live {
      background-color: $token-green;
      color: var(--text-main);
    }

    span {
      font-size: $font-size-sm;
    }
  }
}
</style>