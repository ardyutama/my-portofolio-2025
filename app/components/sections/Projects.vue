<script lang="ts" setup>
  import HeadingSection from '../ui/HeadingSection.vue';
</script>

<template>
  <section class="projects__section">
    <div class="projects__container">
      <div class="projects__content">
      <HeadingSection>Things I’ve made</HeadingSection>
      <div class="projects__caption">
        Figma ipsum component variant main layer. Variant rotate layout auto fill arrow. Overflow rectangle thumbnail list distribute pixel underline component editor invite.
      </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/global' as *;

.projects {
  &__section {
    background-color: $token-gray-light;
    min-height: 100vh;
  }

  &__container {
    padding: var(--padding-section-x) var(--padding-section-y);
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--gap-lg);
    max-width: $breakpoint-sm;
  }

  &__caption {
    font-family: var(--font-family-body);
    font-weight: 600;
  }
}
</style>