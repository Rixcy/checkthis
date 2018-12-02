const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Check This',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#af2b1e' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
    ],
    bodyAttrs: {
      class: 'landed'
    }
  },
  /*
  ** TODO: Config manifest with the following:
  ** <link rel="manifest" href="/site.webmanifest">
  ** <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#af2b1e">
  */

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#af2b1e' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/scss/libs/_vars.scss',
        '@/assets/scss/libs/_mixins.scss',
        '@/assets/scss/libs/_functions.scss'
      ]
    ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
