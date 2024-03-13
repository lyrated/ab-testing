<script setup lang="ts">
import { article1 } from '../utils/articles.json';

const { fullPath } = useRoute();
const variation = getVariation();

watchEffect(async () => {
  const uid = await getUserId();

  trackPageview({
    userId: uid,
    url: fullPath,
    variation: variation?.id,
  });
});
</script>

<template>
  <v-container>
    <component
      v-if="variation"
      :is="variation.component"
      v-bind="article1"
    ></component>
  </v-container>
</template>
