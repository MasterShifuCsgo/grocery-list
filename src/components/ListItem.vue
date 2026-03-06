<script setup lang="ts">
import { onLongPress } from '@vueuse/core';
import { useTemplateRef } from 'vue';
import { useModal } from '@/composables/useModal';
import DeleteConformation from './model-components/DeleteConformation.vue';

const htmlRef = useTemplateRef('HtmlRef');
const { open: openModal, close: closeModal } = useModal()

const props = defineProps<{ name: string }>()

const emit = defineEmits<{
  remove: [name: string]
}>()

const isAvailable = defineModel()

function handleLongPress() {
  console.log("long press")
  openModal(DeleteConformation, {
    userChoice: (choice: boolean) => {
      if (choice) emit('remove', props.name);
      closeModal();
    }
  });
}

onLongPress(htmlRef, handleLongPress, { delay: 200 })

</script>
<template>
  <li class="flex items-center py-1">
    <div ref='HtmlRef' class="flex items-center min-w-0 text-right">
      <span class="font-mono text-xl font-semibold mr-8 w-64 overflow-auto mx-2 whitespace-nowrap">{{ name }}</span>
      <input type="checkbox" class="h-6.25 w-6.25 shrink-0" v-model="isAvailable" />
    </div>
  </li>
</template>
