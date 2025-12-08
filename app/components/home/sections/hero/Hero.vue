<script lang="ts" setup>
import HeroButton from './HeroButton.vue';
import { Suitcase } from '@iconoir/vue';
import Header from '~/components/ui/Header.vue';

const { $animate, $stagger, $Timeline, $animeUtils } = useNuxtApp();
const heroSectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!heroSectionRef.value || !$animate) return;

  const isMobile = window.innerWidth < 640;

  const headlineEl = heroSectionRef.value.querySelector('.hero__headline');
  if (headlineEl) {
    const text = headlineEl.textContent || '';
    const words = text.split(' ');
    
    headlineEl.innerHTML = words.map((word, index) => {
      if (word === 'Ardy' || word === 'Putra,') {
        return `<span class="hero__word hero__highlight">${word}</span>`;
      } else if (word === 'website' || word === '&' || word === 'applications') {
        return `<span class="hero__word hero__highlight">${word}</span>`;
      }
      return `<span class="hero__word">${word}</span>`;
    }).join(' ');
  }

  $animeUtils.set('.hero__bg-dots', {
    opacity: 0
  });

  $animeUtils.set('.hero__word', {
    opacity: 0,
    translateY: 20
  });

  if (isMobile) {
    $animeUtils.set('.hero__image-card', {
      opacity: 0,
      translateY: 100
    });
  } else {
    $animeUtils.set('.hero__image-card', {
      opacity: 0,
      translateX: 100
    });
  }

  $animeUtils.set('.hero__flower', {
    opacity: 0,
    scale: 0.5,
    rotate: -20
  });

  $animeUtils.set('.hero__actions', {
    opacity: 0,
    translateY: 30
  });

  const heroTimeline = new $Timeline();

  heroTimeline.add('.hero__bg-dots', {
    opacity: [0, 1],
    duration: 800,
    ease: 'out(3)'
  })
  .add('.hero__word', {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    ease: 'out(3)',
    delay: $stagger(80)
  }, '+=200')
  .add('.hero__image-card', 
    isMobile ? {
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      ease: 'out(4)'
    } : {
      opacity: [0, 1],
      translateX: [100, 0],
      duration: 1000,
      ease: 'out(4)'
    }, 
  '+=400')
  .add('.hero__flower', {
    opacity: [0, 1],
    scale: [0.5, 1],
    rotate: [-20, 0],
    duration: 800,
    ease: 'outElastic(1, .8)'
  }, '-=600')
  .add('.hero__actions', {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 700,
    ease: 'out(3)'
  }, '-=400')
  .add('.hero__highlight', {
    color: ['var(--text-primary)'],
    duration: 800,
    ease: 'out(3)',
    delay: $stagger(150)
  }, '+=300');

  setTimeout(() => {
    $animate('.hero__image-card', {
      translateY: [-5, 5],
      duration: 3000,
      alternate: true,
      loop: true,
      ease: 'inOut'
    });

    $animate('.hero__flower', {
      rotate: [-5, 5],
      duration: 4000,
      alternate: true,
      loop: true,
      ease: 'inOut(2)'
    });
  }, 3500);
});
</script>

<template>
  <section class="hero" ref="heroSectionRef">
    <div class="hero__bg">
      <div class="hero__bg-dots"></div>
      <div class="hero__bg-mask"></div>
    </div>
    <Header />
    
    <div class="hero__content">
      <div class="hero__image-card">
        <div class="hero__photo-container">
          <NuxtImg src="/images/ardy-putra-photo.png" alt="Ardy Putra" class="hero__photo" format="webp"
            height="200px" preload />
        </div>
        <NuxtImg src="/images/hero-image-flower.svg" alt="Hero Image Flower" class="hero__flower" height="150px"
          preload />
      </div>
      <h1 class="hero__headline">
        I'm Ardy Putra, I'm a
        software engineer focused on
        website & applications
      </h1>
    </div>
    <div class="hero__actions">
      <HeroButton to="#projects" variant="primary">
        View My Works
        <template #icon>
          <Suitcase />
        </template>
      </HeroButton>

      <div class="hero__actions-secondary">
        <HeroButton to="#connect" variant="outline">
          Get in Touch
        </HeroButton>

        <HeroButton to="#" variant="outline" target="_blank">
          My Resume
        </HeroButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--padding-section-y) var(--padding-section-x);
  min-height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero__bg {
  position: absolute;
  inset: 0; 
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.hero__bg-dots {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-size: 20px 20px;
  
  background-image: radial-gradient(#d4d4d4 1px, transparent 1px);
}

.hero__bg-mask {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-main);

  mask-image: radial-gradient(ellipse at center, transparent 20%, black);
  -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
}

.hero__content {
  position: relative;
  z-index: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--container-max-width-sm);

  @include mq('sm') {
    max-width: var(--container-max-width-md);
    flex-direction: row;
    align-items: flex-start;
  }
}

.hero__image-card {
  position: relative;
  width: 150px;
  height: 225px;
  border-radius: 24px;
  background-color: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: var(--margin-bottom-xl);
  flex-shrink: 0;

  @include mq('sm') {
    margin: 0px var(--padding-card);
  }
}

.hero__photo-container {
  display: flex;
  height: 100%;
  position: relative;
  align-items: flex-end;
}

.hero__photo {
  object-fit: cover;
  z-index: 2;
  object-position: 10px;
}

.hero__flower {
  position: absolute;
  top: -40px;
  right: -40px;
}

.hero__actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-md);
}

.hero__actions-secondary {
  display: flex;
  justify-content: center;
  gap: var(--gap-md);
}

.hero__headline {
  font-size: var(--font-size-h3);
  text-align: left;
  color: var(--text-main);
  margin-bottom: var(--margin-bottom-xxl);
  padding: 0 var(--padding-btn-y);

  @include mq('sm') {
    font-size: var(--font-size-h2);
  }

  @include mq('lg') {
    font-size: var(--font-size-h1);
  }
}

.hero__word {
  display: inline-block;
  white-space: nowrap;
}

.hero__highlight {
  color: var(--text-primary);
}
</style>