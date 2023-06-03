import { PaperizerOption } from '@/types/types'
import { ref } from 'vue'

const useOptions = (options?: PaperizerOption) => {
  const defaultTarget = '_blank'
  const defaultFeatures = ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes']
  const defaultWindowTitle = window.document.title

  const target = ref<string>('')
  const features = ref<string>('')
  const windowTitle = ref<string | undefined>('')

  const filteredFeatures = (features: string[]) => {
    return features?.filter((feature) => feature)
  }

  target.value = options?.target || defaultTarget
  features.value = filteredFeatures(options?.features || defaultFeatures)?.join(
    ','
  )
  windowTitle.value = options?.windowTitle || defaultWindowTitle

  return {
    target: target.value,
    features: features.value,
    windowTitle: windowTitle.value,
  }
}

export default useOptions
