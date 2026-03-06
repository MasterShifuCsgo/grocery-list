<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button.vue'
import ListItem from './components/ListItem.vue'
import { useGroceryListStore } from './store/useGroceryListStore'
import Modal from './components/singeltons/Modal.vue'

const store = useGroceryListStore();
const newItemName = ref('')

</script>
<template>      
  <Modal/>
  <div class="flex w-full flex-col justify-center px-10">
    <div class="my-7 flex w-full max-w-md gap-2">
      <input
        v-model="newItemName"
        type="text"
        placeholder="Name"
        class="w-full rounded border border-gray-300 px-2 py-1"
        @keydown.enter="store.addItem(newItemName)"
      />
      <Button @click="store.addItem(newItemName)" class="bg-green-500 text-white p-2">Add</Button>
    </div>
    <p class="text-sm text-gray-400">Long press item to delete</p>
    <ul class="w-full max-w-md list-none m-0 p-0 space-y-2">      
      <ListItem v-for="(item, index) in store.getItems()" :key="index" :name="item.name" v-model="item.isAvailable"
        @remove="(name) => store.deleteItem(name)" />
    </ul>
  </div>
</template>
