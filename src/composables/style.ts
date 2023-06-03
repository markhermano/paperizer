const useStyle = () => {
  const attachStyles = (window: Window, styles: string[] = []) => {
    if (styles.length) {
      styles.forEach((style) => {
        let link = window.document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('type', 'text/css')
        link.setAttribute('href', style)
        window.document.getElementsByTagName('head')[0].appendChild(link)
      })
    }
  }

  return { attachStyles }
}

export default useStyle
