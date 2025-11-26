<script lang="ts" setup>
import { ArrowRight, ArrowDown } from '@iconoir/vue';

const props = defineProps({
  company: { type: String, required: true },
  role: { type: String, required: true },
  period: { type: String, required: true },
  location: { type: String, default: '' },
  logo: { type: String, default: '' },
  bullets: { type: Array as () => string[], default: () => [] },
  colorTheme: { type: String, default: '#F0DB4F' },
  image: { type: String, default: '' }
});

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="exp-card" :class="{ 'is-open': isOpen }">
    
    <div class="exp-card__header" :style="{ backgroundColor: colorTheme }">
      <NuxtImg 
        src="/images/hero-image-flower.svg" 
        class="exp-card__pattern" 
        alt=""
      />
      
      <div v-if="image" class="exp-card__photo-wrapper">
        <NuxtImg :src="image" class="exp-card__photo" alt="Company Photo" />
      </div>

      <div class="exp-card__logo-badge">
        <NuxtImg v-if="logo" :src="logo" :alt="company" />
        <span v-else class="exp-card__logo-text">🏢</span>
      </div>
    </div>

    <div class="exp-card__body">
      <h3 class="exp-card__role">{{ role }}</h3>
      <h4 class="exp-card__company">{{ company }}</h4>
      <div class="exp-card__meta">
        <span class="exp-card__period">{{ period }}</span>
        <span class="exp-card__location" v-if="location"> | {{ location }}</span>
      </div>
    </div>

    <button class="exp-card__toggle-btn" @click="toggleOpen">
      <span v-if="!isOpen">What I've done</span>
      <span v-else>Close Details</span>
      <component :is="isOpen ? ArrowDown : ArrowRight" stroke-width="2" width="18" />
    </button>

    <div class="exp-card__details" :style="{ maxHeight: isOpen ? '500px' : '0px' }">
      <div class="exp-card__details-inner">
        <ul>
          <li v-for="(item, index) in bullets" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';

.exp-card {
  position: relative;
  width: 100%;
  background: var(--bg-main);
  border: 3px solid var(--border-main);
  box-shadow: 6px 6px 0px 0px var(--border-main);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px 0px var(--border-main);
  }

  &__header {
    position: relative;
    height: 140px;
    overflow: hidden;
    border-bottom: 3px solid var(--border-main);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__pattern {
    position: absolute;
    width: 80%;
    opacity: 0.5;
    pointer-events: none;
  }

  &__photo-wrapper {
    position: absolute;
    inset: 0;
    mix-blend-mode: multiply;
  }

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }

  &__logo-badge {
    position: relative;
    z-index: 2;
    background: var(--bg-main);
    border: 2px solid var(--border-main);
    padding: 8px 16px;
    border-radius: 50px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.2);

    img {
      height: 20px;
      width: auto;
    }
  }

  &__body {
    padding: var(--gap-md);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__role {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-md);
    font-weight: 700;
    line-height: 1.2;
  }

  &__company {
    font-family: var(--font-family-body);
    font-size: var(--font-size-sm);
    font-weight: 600;
  }

  &__meta {
    margin-top: 4px;
    font-size: var(--font-size-xs);
    color: var(--text-main);
    opacity: 0.7;
  }

  &__toggle-btn {
    width: 100%;
    padding: 12px;
    background: #FF4B4B;
    color: white;
    border: none;
    border-top: 3px solid var(--border-main);
    font-family: var(--font-family-heading);
    font-weight: 700;
    font-size: var(--font-size-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: color.adjust(#FF4B4B, $lightness: -10%);
    }
  }

  &__details {
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    background: var(--bg-white-light);
  }

  &__details-inner {
    padding: var(--gap-md);
    border-top: 2px dashed var(--border-main);
    
    ul {
      padding-left: 20px;
      list-style-type: square;
      text-align: start;
    }

    li {
      font-size: var(--font-size-xs);
      margin-bottom: 8px;
      line-height: 1.5;
    }
  }
}
</style>