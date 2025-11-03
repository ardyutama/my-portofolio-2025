<script lang="ts" setup>
import ExperienceCard from '../ui/ExperienceCard.vue';
</script>

<template>
  <section class="experiences">
    <div class="experiences__grid"></div>
    <div class="experiences__radial-overlay"></div>
    <div class="experiences__content">
      <div class="experience-cards-grid">
        <ExperienceCard imageUrl="/images/ardy-putra-hitachi-photo.png" imageAlt="Hitachi Energy Project"
          companyName="Hitachi Energy" duration="Feb 2024 - Current (1 Year X Month)" buttonText="What I've do"
          buttonLink="#hitachi-details">
          <template #logo>
            <NuxtImg src="/images/logo-hitachi.svg" alt="Hitachi Logo" width="24" height="24" />
          </template>
        </ExperienceCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experiences {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  justify-content: center;
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

  &__content {
    position: relative;
    z-index: 20;
  }
}
</style>