<script lang="ts" setup>
  import HeadingSection from '~/components/ui/HeadingSection.vue';
  import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section class="projects__section">
    <div class="projects__container">
      <div class="projects__content">
      <HeadingSection>Things I’ve made</HeadingSection>
      <h4 class="projects__description">A featured showcase of technical solutions. Each projects details a problem, my solution, and the stack I used to ship it. Let’s dive in.</h4>
      <ProjectCard />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.projects {
  &__section {
    background-color: var(--bg-white-light);
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
    max-width: var(--container-max-width-sm);
  }

  &__description {
    font-size: var(--font-size-btn);
    font-weight: 600;
    letter-spacing: 0.025em;
    text-align: center;
  }
}
</style>