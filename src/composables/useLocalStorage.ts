import { ref, watch, type Ref } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
  const state = ref(defaultValue) as Ref<T>

  try {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      state.value = JSON.parse(storedValue) as T
    }
  } catch (error) {
    console.warn(`Unable to read localStorage key "${key}". Falling back to default value.`, error)
  }

  watch(
    state,
    (newValue) => {
      try {
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.warn(`Unable to write localStorage key "${key}".`, error)
      }
    },
    { deep: true }
  )

  return state
}
