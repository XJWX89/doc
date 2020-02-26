const path = require('path')
module.exports = {
  title: "VeChain Docs",
  description: 'Everything you need to know about VeChainThor',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name:'keywords', content:'vechain, documentation, docs, thor, connex, sync, official'}]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@public': path.join(__dirname, '../public/')
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    smoothScroll: true,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false,
    algolia: {
      apiKey: '1cf3bcfcda8c87948b832b6aff064e7f',
      indexName: 'vechain'
    },
    nav: require('./nav/en'),
    sidebar: {
      '/thor/learn/': [
        'introduction',
        'two-token-design',
        'proof-of-authority',
        'builtin-contracts',
        'block',
        'transaction-model',
        'transaction-calculation',
        'fee-delegation'
      ],
      '/thor/get-started/': [
        'installation',
        'custom-network',
        'api'
      ],
      '/connex/': [
        'connex-intro',
        'compatible-client',
        'demos-and-service',
        'api'
      ],
      '/sync/user-guide/': [
        'wallet',
        'import-ledger',
        'browse-dapp-and-web',
        'interact-with-dapps',
        'activities',
        'settings',
        'report-issue'
      ]
    },
        repo: 'vechain',
        docsRepo:'vechain/docs',//TODO
        docsBranch: 'master',//TODO
        editLinks: true,
        
  },
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg'
      },
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true,
    }
    ]
  ]
}