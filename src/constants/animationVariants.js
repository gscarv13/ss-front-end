// This file contains the configuration used in framer motion config

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.6,
    },
  },
  exit: {
    x: '-100vw',
    transition: { duration: 5, ease: 'easeInOut' },
  },
};

export const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.9 },
};

export const activitiesSliderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
