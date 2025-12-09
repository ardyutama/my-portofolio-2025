export const useIconLinkHover = () => {
  const { $animate } = useNuxtApp();

  const addIconLinkHoverEffect = (element: any) => {
    if (!$animate || !element) return;

    const el = element.$el || element;
    if (!el || typeof el.querySelector !== 'function') return;

    const icon = el.querySelector('svg');
    if (!icon) return;

    el.addEventListener('mouseenter', () => {
      $animate(icon, {
        rotate: -10,
        scale: 1.1,
        duration: 400,
        ease: 'out(3)'
      });
    });

    el.addEventListener('mouseleave', () => {
      $animate(icon, {
        rotate: 0,
        scale: 1,
        duration: 400,
        ease: 'out(3)'
      });
    });

    el.addEventListener('mousedown', () => {
      $animate(icon, {
        scale: 0.9,
        rotate: -5,
        duration: 100,
        ease: 'out(2)'
      });
    });

    el.addEventListener('mouseup', () => {
      $animate(icon, {
        scale: 1.1,
        rotate: -10,
        duration: 200,
        ease: 'out(2)'
      });
    });
  };

  return {
    addIconLinkHoverEffect
  };
};
