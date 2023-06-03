import { ref } from 'vue'

const useComponent = (id: string) => {
  const selectedElement = ref<HTMLElement>()

  const element = window.document.getElementById(id)

  if (element) {
    selectedElement.value = element
  } else {
    throw new Error(`Element with id '${id}' was not found.`)
  }

  return { selectedElement }
}

export default useComponent
