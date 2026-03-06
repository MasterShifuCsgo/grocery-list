import { computed, ref, type Component } from 'vue'

type ModalEvents = Record<string, (...args: unknown[]) => void>


const isOpen = ref(false)
const component = ref<Component | null>(null)
const componentEvents = ref<Object | null>(null)

export const useModal = () => {
  const close = () => {
    isOpen.value = false
  }

  const open = (newComponent: Component, events: ModalEvents) => {
    component.value = newComponent
    componentEvents.value = events
    isOpen.value = true
  }

  const getModalComponent = computed(() => component.value)

  return {
    componentEvents,
    isOpen,
    close,
    open,
    getModalComponent,
  }
}
