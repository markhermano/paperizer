const useWindowContent = () => {
  const writeWindowContent = (window: Window, element: HTMLElement, bodyClass: string) => {
    window.document.write(`
      <html>
        <head>
          <title>${window.document.title}</title>
        </head>
        <body class="${bodyClass}">
          ${element.innerHTML}
        </body>
      </html>
    `)
  }

  return { writeWindowContent }
}

export default useWindowContent
