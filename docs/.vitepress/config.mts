import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cool Python Tricks",
  description: "A personal collection of cool and best python tricks and one-liner code snippets",
  lastUpdated: true,
  ignoreDeadLinks: 'localhostLinks',
  base: '/python-tricks/',
  head: [
    // ['meta', { property: 'og:image', content: 'https://docs.testbeats.com/logo.png' }]
    ["link", { rel: "icon", href: "/python-tricks/favicon.svg", type: "image/svg+xml" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Practice Problems', link: '/practice/problems' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guides/getting-started' },
        ]
      },
      {
        text: 'Python Tricks',
        items: [
          { text: 'Strings', link: '/snippets/strings' },
          // { text: 'Lists', link: '/snippets/lists' },
          // { text: 'Dictionaries', link: '/snippets/dictionaries' },
          // { text: 'Sets', link: '/snippets/sets' },
          // { text: 'Tuples', link: '/snippets/tuples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leelaprasadv/python-tricks' }
    ],

    footer: {
      message: 'Made with ❤️ by Leela Prasad | Icons by https://iconify.design/',
      copyright: 'Copyright © 2024'
    }
  }
})
