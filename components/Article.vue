<script setup lang="ts">
import { SIGNUP_CLICK, VARIATION_CONTROL } from '~/utils/event-names';

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
    variation: VARIATION_CONTROL,
  });
  console.log('Signed up');
};
</script>

<template>
  <h1>{{ title }}</h1>
  <CoverImage v-if="img" :img-url="img" :alt-text="title" />
  <p v-for="bodyText in body">{{ bodyText }}</p>
  <ActionBanner
    action-text="Thanks a lot for reading the article!"
    button-text="Sign up for Blinkist"
    @onActionButtonClick="onActionButtonClick"
  />
</template>
