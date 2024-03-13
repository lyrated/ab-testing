<script setup lang="ts">
const props = defineProps<{
  actionText?: string;
  buttonText: string;
}>();
const emit = defineEmits(['onActionButtonClick']);
const clicked = ref(false);

const onClickEvent = () => {
  clicked.value = true;
  // For this project a simple 'Success' message is shown to give feedback
  setTimeout(() => {
    emit('onActionButtonClick');
    clicked.value = false;
  }, 1500);
};
</script>

<template>
  <v-container class="bg-green-accent-1 p-4 my-2 text-center">
    <h3 v-if="actionText">{{ actionText }}</h3>
    <v-btn @click="onClickEvent" color="primary" rounded="0">
      {{ clicked ? 'Success!' : buttonText }}
    </v-btn>
  </v-container>
</template>
