import { ref } from 'vue'

const useWindow = (target: string, features: string) => {
  const previewWindow = ref<Window>()

  const windowObject = window.open('', target, features)

  if (windowObject) {
    if (!windowObject.opener) {
      windowObject.opener = self
    }
    windowObject.focus()
    previewWindow.value = windowObject
  }

  return {
    previewWindow,
  }
}

export default useWindow
