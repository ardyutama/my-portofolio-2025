<script lang="ts" setup>
import ExperienceCard from '../ui/ExperienceCard.vue';
import HeadingSection from '../ui/HeadingSection.vue';
</script>

<template>
  <section class="experiences">
    <div class="experiences__grid"></div>
    <div class="experiences__radial-overlay"></div>
    <div class="experiences__container">
      <div class="experiences__content">
        <HeadingSection>Experience</HeadingSection>
        <div class="experiences__caption">
          Figma ipsum component variant main layer. Variant rotate layout auto fill arrow. Overflow rectangle thumbnail list distribute pixel underline component editor invite.
        </div>
        <div class="experiences__card-grid">
          <ExperienceCard imageUrl="/images/ardy-putra-hitachi-photo.png" imageAlt="Hitachi Energy Project"
            companyName="Hitachi Energy" buttonLink="#hitachi-details">
            <template #logo>
              <NuxtImg src="/images/logo-hitachi.svg" alt="Hitachi Logo" width="24" height="24" />
            </template>
            <template #duration>
              <span>Feb 2024 - Current <br /> (1 Year X Month)</span>
            </template>
          </ExperienceCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.experiences {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #fff;

  &__grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px);
    background-size: 80px 80px;
    margin: 0 auto;
  }

  &__radial-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    mask-image: radial-gradient(ellipse at center, transparent 20%, black);
    -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
  }

  &__container {
    padding: var(--padding-section-x) var(--padding-section-y);
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    align-items: center;
    gap: var(--gap-lg);
    z-index: 20;
    max-width: var(--container-max-width-sm);
  }

  &__caption {
    font-family: var(--font-family-body);
    font-weight: 600;
  }

  &__grid {
    display: flex;

  }
}
</style>