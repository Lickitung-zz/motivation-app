
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css'},
      { rel: 'stylesheet', href: 'https://unpkg.com/buefy/dist/buefy.min.css'}
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js" },
      { src: "https://use.fontawesome.com/releases/v5.2.0/css/all.css" },
      { src: "https://unpkg.com/buefy/dist/buefy.min.js"}
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
    // '~plugins/buefy'
    '~plugins/firebase'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-buefy',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
