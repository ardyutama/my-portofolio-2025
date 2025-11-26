<template>
  <div class="app-viewport">
    <IconoirProvider
      :icon-props="{
        'stroke-width': 2,
      }"
    >
      <Home />
    </IconoirProvider>
  </div>
</template>

<script lang="ts" setup>
  import { IconoirProvider } from '@iconoir/vue';
  import Home from '~/components/home/index.vue'

  useHead({
    title: 'Portofolio - Ardy Putra Utama',
    link: [{rel: 'icon', type: 'svg', href: '/ardy-putra-logo.svg'}]
  })
</script>

<style lang="scss" scoped>
.app-viewport {
  width: 100%;
  height: 100%;
  display: relative;
}
</style>