import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useGroceryList, type GroceryItem } from '@/composables/useGroceryList'

const DEFAULT_GROCERY_LIST: GroceryItem[] = [
  { name: 'potato', isAvailable: true },
  { name: 'hakkliha', isAvailable: true },
  { name: 'sink', isAvailable: true },
  { name: 'tomato', isAvailable: false },
  { name: 'cucumber', isAvailable: true },
]

export const useGroceryListStore = defineStore('grocery-list', () => {
  const groceryList = useGroceryList(DEFAULT_GROCERY_LIST)

  function getItems(): GroceryItem[] {
    return groceryList.value
  }

  function addItem(name: string, isAvailable = false): void {
    const trimmedName = name.trim()
    if (!trimmedName) return

    groceryList.value.push({ name: trimmedName, isAvailable })
  }

  function deleteItem(name: string): void {
    const index = groceryList.value.findIndex((item) => item.name === name)
    if (index === -1) return

    groceryList.value.splice(index, 1)
  }

  const items = computed(() => groceryList.value)
  
  return {
    addItem,
    deleteItem,
    getItems,
    items,
  }
})
