<script setup lang="ts">
import { SIGNUP_CLICK, VARIATION_TEST } from '~/utils/event-names';

const props = defineProps<{
  title: string;
  img?: string;
  body: string[];
}>();

const onActionButtonClick = async () => {
  const uid = await getUserId();
  const { fullPath } = useRoute();

  trackEvent({
    userId: uid,
    url: fullPath,
    eventName: SIGNUP_CLICK,
    variation: VARIATION_TEST,
  });
  console.log('Signed up');
};
</script>

<template>
  <!-- The test version has the action button moved up and action text changed -->
  <h1>{{ title }}</h1>
  <ActionBanner
    action-text="Interested in more?"
    button-text="Sign up for Blinkist"
    @onActionButtonClick="onActionButtonClick"
  />
  <CoverImage v-if="img" :img-url="img" :alt-text="title" />
  <p v-for="bodyText in body">{{ bodyText }}</p>
</template>
