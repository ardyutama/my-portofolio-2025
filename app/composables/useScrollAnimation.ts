export const useScrollAnimation = () => {
  const { $animate, $stagger } = useNuxtApp();

  const observeSection = (
    sectionRef: Ref<HTMLElement | null>,
    animationConfig?: {
      selector?: string;
      stagger?: boolean;
      staggerDelay?: number;
      translateY?: number;
      translateX?: number;
      scale?: number;
      rotate?: number;
      duration?: number;
      ease?: string;
      threshold?: number;
    }
  ) => {
    const config = {
      selector: '[data-animate]',
      stagger: false,
      staggerDelay: 100,
      translateY: 30,
      translateX: 0,
      scale: 1,
      rotate: 0,
      duration: 800,
      ease: 'out(3)',
      threshold: 0.15,
      ...animationConfig
    };

    onMounted(() => {
      if (!sectionRef.value || !$animate) return;

      const elements = sectionRef.value.querySelectorAll(config.selector);
      
      if (elements.length === 0) return;

      // Set initial states
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
        if (config.translateY) {
          (el as HTMLElement).style.transform = `translateY(${config.translateY}px)`;
        }
        if (config.translateX) {
          (el as HTMLElement).style.transform = `translateX(${config.translateX}px)`;
        }
      });

      // Create intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animateElements = entry.target.querySelectorAll(config.selector);
              
              const animConfig: any = {
                opacity: [0, 1],
                duration: config.duration,
                ease: config.ease,
                delay: config.stagger ? $stagger(config.staggerDelay) : 0
              };

              if (config.translateY) animConfig.translateY = [config.translateY, 0];
              if (config.translateX) animConfig.translateX = [config.translateX, 0];
              if (config.scale !== 1) animConfig.scale = [config.scale, 1];
              if (config.rotate) animConfig.rotate = [config.rotate, 0];

              $animate(animateElements, animConfig);

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: config.threshold,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      observer.observe(sectionRef.value);

      onUnmounted(() => {
        observer.disconnect();
      });
    });
  };

  const observeElements = (
    elementRefs: Ref<HTMLElement[]>,
    animationConfig?: {
      translateY?: number;
      translateX?: number;
      scale?: number;
      rotate?: number;
      duration?: number;
      ease?: string;
      staggerDelay?: number;
      threshold?: number;
    }
  ) => {
    const config = {
      translateY: 30,
      translateX: 0,
      scale: 1,
      rotate: 0,
      duration: 800,
      ease: 'out(3)',
      staggerDelay: 100,
      threshold: 0.15,
      ...animationConfig
    };

    onMounted(() => {
      if (!elementRefs.value || !$animate) return;

      const elements = elementRefs.value;
      
      if (elements.length === 0) return;

      // Set initial states
      elements.forEach((el) => {
        if (el) {
          el.style.opacity = '0';
          if (config.translateY) {
            el.style.transform = `translateY(${config.translateY}px)`;
          }
          if (config.translateX) {
            el.style.transform = `translateX(${config.translateX}px)`;
          }
        }
      });

      // Create intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                const animConfig: any = {
                  opacity: [0, 1],
                  duration: config.duration,
                  ease: config.ease
                };

                if (config.translateY) animConfig.translateY = [config.translateY, 0];
                if (config.translateX) animConfig.translateX = [config.translateX, 0];
                if (config.scale !== 1) animConfig.scale = [config.scale, 1];
                if (config.rotate) animConfig.rotate = [config.rotate, 0];

                $animate(entry.target, animConfig);
              }, index * config.staggerDelay);

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: config.threshold,
          rootMargin: '0px 0px -10% 0px'
        }
      );

      elements.forEach((el) => {
        if (el) observer.observe(el);
      });

      onUnmounted(() => {
        observer.disconnect();
      });
    });
  };

  return {
    observeSection,
    observeElements
  };
};
