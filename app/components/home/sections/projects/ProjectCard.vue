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

const { $animate, $stagger } = useNuxtApp();

const githubLinkRef = ref<HTMLElement | null>(null);
const liveLinkRef = ref<HTMLElement | null>(null);

const animateIconLink = (linkElement: any, labelElement: any) => {
  if (!$animate || !linkElement || !labelElement) return;

  const el = linkElement.$el || linkElement;
  const label = labelElement.$el || labelElement;
  if (!el || !label) return;

  const icon = el.querySelector('svg');
  const letters = label.querySelectorAll('.letter');
  
  if (!icon || !letters.length) return;

  el.addEventListener('mouseenter', () => {
    // Animate icon
    $animate(icon, {
      rotate: -10,
      scale: 1.1,
      duration: 400,
      ease: 'out(3)'
    });

    // Stagger animate letters
    $animate(letters, {
      translateY: [10, 0],
      opacity: [0, 1],
      duration: 400,
      delay: $stagger(30),
      ease: 'out(3)'
    });
  });

  el.addEventListener('mouseleave', () => {
    // Reset icon
    $animate(icon, {
      rotate: 0,
      scale: 1,
      duration: 400,
      ease: 'out(3)'
    });

    // Hide letters
    $animate(letters, {
      translateY: 0,
      opacity: 0,
      duration: 200,
      ease: 'out(2)'
    });
  });

  el.addEventListener('mousedown', () => {
    $animate(icon, {
      scale: 0.9,
      rotate: -5,
      duration: 100,
      ease: 'out(2)'
    });
  });

  el.addEventListener('mouseup', () => {
    $animate(icon, {
      scale: 1.1,
      rotate: -10,
      duration: 200,
      ease: 'out(2)'
    });
  });
};

const githubLabelRef = ref<HTMLElement | null>(null);
const liveLabelRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (githubLinkRef.value && githubLabelRef.value) {
    animateIconLink(githubLinkRef.value, githubLabelRef.value);
  }
  if (liveLinkRef.value && liveLabelRef.value) {
    animateIconLink(liveLinkRef.value, liveLabelRef.value);
  }
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
          <div class="project-card__link-item">
            <NuxtLink ref="githubLinkRef" :to="githubLink" target="_blank">
              <GithubCircle stroke-width="1.5" />
            </NuxtLink>
            <span ref="githubLabelRef" class="project-card__link-label">
              <span v-for="(char, index) in 'GitHub Code'.split('')" :key="index" class="letter">{{ char }}</span>
            </span>
          </div>
          <div class="project-card__link-item">
            <NuxtLink ref="liveLinkRef" :to="liveLink" target="_blank">
              <ArrowUpRightSquare stroke-width="1.5" />
            </NuxtLink>
            <span ref="liveLabelRef" class="project-card__link-label">
              <span v-for="(char, index) in 'Live Website'.split('')" :key="index" class="letter">{{ char }}</span>
            </span>
          </div>
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
  }

  &__link-item {
    display: grid;
    grid-template-columns: auto 0fr;
    align-items: center;
    transition: grid-template-columns 0.4s ease;

    &:hover {
      grid-template-columns: auto 1fr;
    }

    a {
      color: $token-black;
      display: inline-flex;
      cursor: pointer;
      
      svg {
        display: block;
      }
    }
  }

  &__link-label {
    display: inline-flex;
    font-size: $font-size-xs;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
    color: $token-black;
    overflow: hidden;
    padding-left: $space-xs;

    .letter {
      display: inline-block;
      opacity: 0;
      white-space: pre;
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