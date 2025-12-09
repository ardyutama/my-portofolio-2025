<template>
  <Hero />
  <div data-scroll-section id="projects">
    <Projects />
  </div>
  <div data-scroll-section id="experiences">
    <Experiences />
  </div>
  <div data-scroll-section id="connect">
    <Connect />
  </div>
</template>

<script lang="ts" setup>
  import Hero from '~/components/home/sections/hero/Hero.vue';
  import Projects from '~/components/home/sections/projects/Projects.vue';
  import Experiences from '~/components/home/sections/experiences/Experiences.vue';
  import Connect from '~/components/home/sections/connect/Connect.vue';

  const { $animate } = useNuxtApp();

  onMounted(() => {
    if (!$animate) return;

    const sections = document.querySelectorAll('[data-scroll-section]');
    
    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              $animate(entry.target, {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000,
                ease: 'out(4)'
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      (section as HTMLElement).style.opacity = '0';
      observer.observe(section);
    });
  });
</script>

<style lang="scss">
[data-scroll-section] {
  will-change: opacity, transform;
  min-height: 100vh;
}
</style>