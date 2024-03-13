<script setup lang="ts">
const props = defineProps<{
  imgUrl: string;
  altText: string;
}>();
</script>

<template>
  <v-img
    :src="`/img/${imgUrl}`"
    max-width="900"
    max-height="400"
    cover
    class="d-block mx-auto my-2"
    :alt="altText"
  />
</template>
