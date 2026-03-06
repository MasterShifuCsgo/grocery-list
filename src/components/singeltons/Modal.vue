<script setup lang="ts">
import { useModal } from '@/composables/useModal';
import { watch } from 'vue';

const { close, isOpen, componentEvents, getModalComponent: comp } = useModal();


</script>
<template>
  <div v-if="isOpen" class="absolute w-full h-full bg-black opacity-35"></div>
  <div class="absolute border-2 w-full h-full flex flex-col align-middle justify-center" v-if="isOpen">
    <div class="relative flex flex-col justify-center align-middle bg-white rounded-3xl px-10 py-20">      
      <button @click="close()" class="absolute top-5">Close</button>
      <component v-if="comp" :is="comp" v-on="componentEvents" />
    </div>
  </div>
</template>