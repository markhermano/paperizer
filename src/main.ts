import { App } from 'vue'
import { PaperizerOption } from './types/types'
import useComponent from '@/composables/component'
import useOptions from '@/composables/options'
import useStyle from '@/composables/style'
import useWindow from '@/composables/window'
import useWindowContent from '@/composables/windowContent'

export const usePaperizer = (
  elementId: string,
  options?: PaperizerOption,
  callBack: Function = () => {}
): { paperize: () => void } => {
  const windowWithLocalOptions = (options?: PaperizerOption) => {
    const { target, features, windowTitle } = useOptions(options)
    const { previewWindow } = useWindow(target, features)

    return { defaultWindow: previewWindow.value, target, windowTitle }
  }

  const paperize = (): void => {
    const { selectedElement } = useComponent(elementId)
    const { defaultWindow, target, windowTitle } =
      windowWithLocalOptions(options)
    const { writeWindowContent } = useWindowContent()
    const { attachStyles } = useStyle()

    if (defaultWindow && selectedElement.value) {
      defaultWindow.document.title = windowTitle || document.title
      writeWindowContent(defaultWindow, selectedElement.value)
      attachStyles(defaultWindow, options?.styles)
      setTimeout(() => {
        defaultWindow.document.close()
        defaultWindow.focus()
        defaultWindow.print()
        setTimeout(function () {
          if (target !== '_blank') return

          defaultWindow.close()
        }, 1)
        callBack()
      }, 1000)
    }
  }

  return { paperize }
}

export default {
  install: (app: App) => {
    const instance = (
      elementId: string,
      options?: PaperizerOption,
      callBack?: Function
    ) => {
      const { paperize } = usePaperizer(elementId, options, callBack)
      paperize()
    }
    app.config.globalProperties.$paperize = instance
  },
}
