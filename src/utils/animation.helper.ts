type IAnimateVariants = keyof typeof animateObject;

const animateObject = {
  animateHeightWithOpacity: {
    hide: {
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: 'auto',
    },
  },

  animateErrors: {
    initial: {
      opacity: 0.1,
      height: 0,
    },
    animate: {
      opacity: 1,
      height: 'auto',
    },
    exit: {
      opacity: 0.1,
      height: 0,
    },
  },
};

export const animateHelper = (variant: IAnimateVariants) => animateObject[variant];
