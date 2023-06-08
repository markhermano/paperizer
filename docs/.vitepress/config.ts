import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/paperizer/',
  lang: 'en-US',
  title: 'Paperizer',
  description: 'Vue js composable to easily print components',
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Usage', link: '/guide/usage' },
          { text: 'Examples', link: '/guide/examples' }
        ],
      },
      {
        text: 'API',
        items: [
          {
            text: 'API Reference', link: '/api/api-reference'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/markhermano/paperizer' },
    ],

    footer: {
      copyright: 'Copyright © 2023-present Mark Hermano',
      message: 'Released under the MIT License.',
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Mark Hermano' }],
    ['meta', { property: 'og:title', content: 'Paperizer' }],
    // ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:description', content: 'Vue js composable to easily print components' }],
    // ['meta', { name: 'twitter:card', content: '' }],
    // ['meta', { name: 'twitter:creator', content: '' }],
    // ['meta', { name: 'twitter:image', content: '' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],

    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap' }],
  ],
})
