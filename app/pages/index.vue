<template>
  <div class="app-viewport">
    <IconoirProvider
      :icon-props="{
        'stroke-width': 2,
      }"
    >
      <Hero />
      <Projects />
      <Experiences />
    </IconoirProvider>
  </div>
</template>

<script lang="ts" setup>
  import Hero from '~/components/sections/Hero.vue';
  import Projects from '~/components/sections/Projects.vue';
  import { IconoirProvider } from '@iconoir/vue';
  import Experiences from '~/components/sections/Experiences.vue';
</script>

<style lang="scss" scoped>
.app-viewport {
  width: 100%;
  height: 100%;
  display: relative;
}
</style>