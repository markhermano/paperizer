import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Paperizer',
  description: 'Vue js composable to print components.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/get-started' },
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'What is paperizer?', link: '/overview/what-is-paperizer' },
          { text: 'Get Started', link: '/overview/get-started' },
        ],
      },
      {},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      copyright: 'Copyright © 2023-present Mark Hermano',
      message: 'Released under the MIT License.',
    },
  },
})
