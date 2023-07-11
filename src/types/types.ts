export interface PaperizerOption {
  /**
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/open#syntax
   *
   * @param target same as target paramter for Window: open() method
   * @param features same as windowFeatures paramter
   *
   */
  target?: string
  features?: string[]

  /**
   *
   * Attaches the array of style urls to print preview window header.
   *
   * @default []
   *
   */
  styles?: string[]

  /**
   *
   * Auto closes the print preview window after print() is closed.
   *
   * @default true
   *
   */
  autoClose?: boolean

  /**
   *
   * Adds a custom title to the print preview window. Defaults is the current window title.
   *
   */
  windowTitle?: string

  /**
   *
   * Adds a custom body class to the print preview window.
   *
   */
  bodyClass?: string

  autoPrint?: boolean
}
