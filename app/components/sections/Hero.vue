<template>
  <section class="hero-section" ref="heroSectionRef">
    <div class="hero-actions">
      <Button to="#projects" variant="primary">
        View My Works
        <template #icon>
          <Suitcase />
        </template>
      </Button>

      <Button to="#contact" variant="outline">
        Get in Touch
      </Button>
      
      <Button 
        to="/ardy-putra-resume.pdf" 
        variant="outline"
        target="_blank"
      >
        My Resume
      </Button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from '../ui/Button.vue';
import { Suitcase } from '@iconoir/vue';

</script>

<style lang="scss" scoped>
  @use '~/assets/scss/global' as *;

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap-md);
  }

</style>