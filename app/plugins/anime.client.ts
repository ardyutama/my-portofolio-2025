import { animate, stagger, Timeline, utils } from 'animejs'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      animate,
      stagger,
      Timeline,
      animeUtils: utils
    }
  }
})

declare module '#app' {
  interface NuxtApp {
    $animate: typeof animate
    $stagger: typeof stagger
    $Timeline: typeof Timeline
    $animeUtils: typeof utils
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $animate: typeof animate
    $stagger: typeof stagger
    $Timeline: typeof Timeline
    $animeUtils: typeof utils
  }
}
