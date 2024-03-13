import { variations } from './variations';

/**
 * Returns the variation from local storage or a random one if not defined
 */
export const getVariation = (): Variation | undefined => {
  if (process.server) {
    return;
  }

  const variation = localStorage.getItem('article_variation');

  if (variation == null) {
    const randomIndex = Math.floor(Math.random() * variations.length);
    localStorage.setItem('article_variation', variations[randomIndex].id);
    return variations[randomIndex];
  }

  return variations.find((v) => v.id === variation);
};
