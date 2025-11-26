<script lang="ts" setup>
import HeadingSection from '~/components/ui/HeadingSection.vue';
import ExperienceCard from './ExperienceCard.vue';

const { data: experiences } = await useAsyncData('experience', () => {
    return queryCollection('experience').all()
  }
);
</script>

<template>
  <section class="experiences">
    <div class="experiences__grid-bg"></div>
    
    <div class="experiences__container">
      <div class="experiences__content">
        <HeadingSection>Experience</HeadingSection>
        <h4 class="experiences__description">
          My professional timeline. Building software, breaking bugs, and learning daily.
        </h4>

        <div class="timeline">
          <div class="timeline__line"></div>

          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.company" 
            class="timeline__item"
            :class="{ 'timeline__item--left': index % 2 === 0, 'timeline__item--right': index % 2 !== 0 }"
          >
            <div class="timeline__dot"></div>
            
            <ExperienceCard
              :company="exp.company"
              :role="exp.role"
              :period="exp.period"
              :location="exp.location"
              :logo="exp.logo"
              :bullets="exp.achievements"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experiences {
  position: relative;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;

  &__grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, #e4e4e7 1px, transparent 1px),
      linear-gradient(to bottom, #e4e4e7 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: 0;
    opacity: 0.5;
  }

  &__container {
    position: relative;
    z-index: 1;
    padding: var(--padding-section-y) var(--padding-section-x);
    display: flex;
    justify-content: center;
  }

  &__content {
    width: 100%;
    max-width: var(--container-max-width-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-xl);
  }

  &__description {
    font-size: var(--font-size-btn);
    font-weight: 600;
    letter-spacing: 0.025em;
    text-align: center;
    max-width: var(--container-max-width-sm);
    color: var(--text-secondary);
  }
}

.timeline {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;

  &__line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--border-main);
    border-radius: 4px;
    
    left: 30px; 

    @include mq('md') {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__item {
    position: relative;
    width: 100%;
    
    padding-left: 80px; 
    
    @include mq('md') {
      width: 50%;
      padding-left: 0;
    }
  }

  &__dot {
    position: absolute;
    top: 24px;
    width: 16px;
    height: 16px;
    background: var(--bg-accent);
    border: 3px solid var(--border-main);
    border-radius: 50%;
    z-index: 2;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.2);
    left: 23px;

    @include mq('md') {
      left: auto; 
      right: auto;
    }
  }

  @include mq('md') {
    
    &__item--left {
      left: 0;
      padding-right: 60px;
      text-align: right;

      .timeline__dot {
        right: -8px; 
      }
    }

    &__item--right {
      left: 50%;
      padding-left: 60px;
      
      .timeline__dot {
        left: -8px; 
      }
    }
  }
}
</style>