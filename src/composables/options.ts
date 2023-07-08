import { PaperizerOption } from '@/types/types'
import { ref } from 'vue'

const useOptions = (options?: PaperizerOption) => {
  const defaultTarget = '_blank'
  const defaultFeatures = ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes']
  const defaultWindowTitle = window.document.title
  const defaultAutoClose = true
  const defaultAutoPrint = true

  const target = ref<string>('')
  const features = ref<string>('')
  const windowTitle = ref<string | undefined>('')
  const autoClose = ref(true)
  const bodyClass = ref<string>('')
  const autoPrint = ref(true)

  const filteredFeatures = (features: string[]) => {
    return features?.filter((feature) => feature)
  }

  target.value = options?.target || defaultTarget
  features.value = filteredFeatures(options?.features || defaultFeatures)?.join(
    ','
  )
  windowTitle.value = options?.windowTitle || defaultWindowTitle
  autoClose.value = options?.autoClose ?? defaultAutoClose
  bodyClass.value = options?.bodyClass ?? ''
  autoPrint.value = options?.autoPrint ?? defaultAutoPrint

  return {
    target: target.value,
    features: features.value,
    windowTitle: windowTitle.value,
    autoClose: autoClose.value,
    bodyClass: bodyClass.value,
    autoPrint: autoPrint.value,
  }
}

export default useOptions
