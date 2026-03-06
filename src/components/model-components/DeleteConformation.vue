<script setup lang="ts">
import Button from '../Button.vue';

const emit = defineEmits<{ userChoice: [choice: boolean] }>()

function emitChoice(choice: boolean) {
  emit('userChoice', choice);
}

</script>
<template>
  <div class="flex flex-col align-middle justify-center">
    <p class="text-center">Are you sure you want to delete this?</p>
    <div class="flex justify-center gap-2">
      <Button @click="emitChoice(true)" class="bg-green-400 px-5 py-3">Yes</Button>
      <Button @click="emitChoice(false)" class="bg-red-400 px-5 py-3">No</Button>
    </div>
  </div>
</template>