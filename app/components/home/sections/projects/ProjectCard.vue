<script lang="ts" setup>
import { GithubCircle, ArrowUpRightSquare } from '@iconoir/vue';
import TechTag from './TechTag.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    default: '',
  },
  thumbnail: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as () => string[],
    default: () => [],
  },
  githubLink: {
    type: String,
    default: '#',
  },
  liveLink: {
    type: String,
    default: '#',
  }
});
</script>

<template>
  <div class="project-card">
    <div class="project-card__image-container">
      <NuxtImg
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="project-card__image"
        fit="cover"
      />
    </div>
    
    <div class="project-card__content-container">
      <div class="project-card__content">
        <div class="project-card__title-container">
          <h3 class="project-card__title">
            {{ title }}
          </h3>
          
          <div class="project-card__tag-container" v-if="tags.length">
            <div class="project-card__tag-grid">
              <TechTag 
                v-for="tag in tags" 
                :key="tag" 
                :label="tag" 
              />
            </div>
          </div>
        </div>
        
        <p class="project-card__description">
          {{ tagline }}
        </p>
      </div>

      <div class="project-card__action-footer">
        <NuxtLink :to="githubLink" target="_blank" class="project-card__action-github">
          Source Code <GithubCircle stroke-width="1.5"/>
        </NuxtLink>
        <NuxtLink :to="liveLink" target="_blank" class="project-card__action-live">
          Live Website <ArrowUpRightSquare stroke-width="1.5"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$image-placeholder-height-phone: 200px; 

.project-card {
  width: 100%;
  border: 2px solid var(--border-main);
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-main);
  overflow: hidden;

  @include shadow-card; 
  
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); 
  }

  &__image-container {
    height: $image-placeholder-height-phone;
    border-bottom: 2px solid var(--border-main);
    background-color: rgba($color: $token-green, $alpha: 0.1);
    width: 100%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover &__image {
    transform: scale(1.05);
  }

  &__content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    flex: 1; 
  }

  &__content {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid var(--border-main);
    padding: $space-md;
    flex-grow: 1; 
    gap: $space-sm;
  }

  &__title {
    margin-bottom: $space-xs;
    font-family: var(--font-family-heading);
    font-size: 1.25rem;
  }

  &__tag-grid {
    display: flex;
    flex-wrap: wrap;
    gap: $space-xs; // Increased gap slightly for the hard shadows
  }

  &__description {
    font-size: $font-size-sm;
    line-height: 1.5;
    color: var(--text-main);
  }

  &__action-footer {
    width: 100%;
    height: 56px;
    display: flex;
    font-family: var(--font-family-heading);
    font-weight: 700;
    flex-shrink: 0; 
    
    a {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: $token-white;
      gap: $space-xxs;
      padding: $space-xs;
      font-size: $font-size-xs;
      text-decoration: none; // Remove underline
      border: none;
      border-right: 2px solid var(--border-main); // Thicker border for brutalism
      transition: background-color 0.2s ease;

      @include mq('sm') {
        font-size: $font-size-base;
      }
      
      &:last-child {
        border-right: none;
      }

      // Hover states for buttons
      &:hover {
        filter: brightness(1.1); // Simple hover effect
      }
    }
  }

  &__action-github {
    background-color: $token-gray-dark;
    color: $token-white;
  }

  &__action-live {
    background-color: $token-green;
    color: #000;
  }
}
</style>