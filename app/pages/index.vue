<template>
  <div>
    <IconoirProvider
      :icon-props="{
        'stroke-width': 2,
      }"
    >
      <Hero />
    </IconoirProvider>
  </div>
</template>

<script lang="ts" setup>
  import Hero from '~/components/sections/Hero.vue';
  import { IconoirProvider } from '@iconoir/vue';
</script>

<style>

</style>