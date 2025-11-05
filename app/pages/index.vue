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
      <Connect />
    </IconoirProvider>
  </div>
</template>

<script lang="ts" setup>
  import Hero from '~/components/sections/Hero.vue';
  import Projects from '~/components/sections/Projects.vue';
  import Experiences from '~/components/sections/Experiences.vue';
  import Connect from '~/components/sections/Connect.vue';
  import { IconoirProvider } from '@iconoir/vue';
</script>

<style lang="scss" scoped>
.app-viewport {
  width: 100%;
  height: 100%;
  display: relative;
}
</style>