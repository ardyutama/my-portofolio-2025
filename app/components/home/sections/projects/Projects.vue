<script lang="ts" setup>
import HeadingSection from '~/components/ui/HeadingSection.vue';
import ProjectCard from './ProjectCard.vue';

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects')
    .order('date', 'DESC')
    .select('path', 'title', 'tagline', 'thumbnail', 'tags', 'githubLink', 'liveLink')
    .all()
});
</script>

<template>
  <section class="projects__section">
    <div class="projects__container">
      <div class="projects__content">
        <HeadingSection>Things I’ve made</HeadingSection>
        <h4 class="projects__description">
          A featured showcase of technical solutions. Each project details a problem, my solution, and the stack I used to ship it. Let’s dive in.
        </h4>
        
        <div class="projects__grid">
          <ProjectCard 
            v-for="project in projects" 
            :key="project._path"
            :title="project.title"
            :tagline="project.tagline"
            :thumbnail="project.thumbnail"
            :tags="project.tags"
            :github-link="project.githubLink"
            :live-link="project.liveLink"
          />
        </div>
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
    max-width: var(--container-max-width-lg); 
    width: 100%;
  }

  &__description {
    font-size: var(--font-size-btn);
    font-weight: 600;
    letter-spacing: 0.025em;
    text-align: center;
    max-width: var(--container-max-width-sm);
    color: var(--text-secondary);
  }

  &__grid {
    display: grid;
    width: 100%;
    gap: var(--gap-md);
    
    grid-template-columns: 1fr;
    
    @include mq('md') {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>