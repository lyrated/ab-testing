import Article from '~/components/Article.vue';
import ArticleTest from '~/components/ArticleTest.vue';
import { VARIATION_CONTROL, VARIATION_TEST } from './event-names';

/**
 * List of available variations.
 * For this project, only the component changes. If a different article should be used,
 * we can extend this by adding the property 'article'.
 */
export const variations: Variation[] = [
  { id: VARIATION_CONTROL, component: Article },
  { id: VARIATION_TEST, component: ArticleTest },
];
