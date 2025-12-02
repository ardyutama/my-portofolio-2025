export const useButtonHover = () => {
  const { $animate } = useNuxtApp();

  const addButtonHoverEffect = (selector: string) => {
    if (!$animate) return;

    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        $animate(button, {
          scale: 1.05,
          duration: 300,
          ease: 'out(2)'
        });
      });

      button.addEventListener('mouseleave', () => {
        $animate(button, {
          scale: 1,
          duration: 300,
          ease: 'out(2)'
        });
      });
    });
  };

  return {
    addButtonHoverEffect
  };
};
