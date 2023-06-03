const useWindowContent = () => {
  const writeWindowContent = (window: Window, element: HTMLElement) => {
    window.document.write(`
      <html>
        <head>
          <title>${window.document.title}</title>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `)
  }

  return { writeWindowContent }
}

export default useWindowContent
