const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' },
      { src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js', id: 'snipcart', 'data-api-key': 'YmM5NGE1ZDQtZDAwMi00NWI0LTkzMWMtZmU4NjZmOGMxZjQwNjM3MTkyMTc5Mzk2MTY2OTg2' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', { accessToken: 'PQXYXd5PdqQ5TaUdTyYgzAtt', cacheProvider: 'memory' }]
  ],

  /*
  ** Router middleware
  */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
