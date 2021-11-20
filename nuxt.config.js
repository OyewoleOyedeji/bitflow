export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bitflow',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bootstrap 4 design for a online tech startup company' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;1,400;1,700&display=swap&display=swap' }
    ]
  },

  css: [
    '@/assets/font-awesome-brands/css/brands.min.css',
    '@/assets/themify/css/themify-icons.css',
    '@/assets/tether/tether.min.css',
    '@/assets/bootstrap/css/bootstrap.min.css',
    '@/assets/bootstrap/css/bootstrap-grid.min.css',
    '@/assets/bootstrap/css/bootstrap-reboot.min.css',
    '@/assets/animatecss/animate.css',
    '@/assets/dropdown/css/style.css',
    '@/assets/formstyler/jquery.formstyler.css',
    '@/assets/formstyler/jquery.formstyler.theme.css',
    '@/assets/socicon/css/styles.css',
    '@/assets/theme/css/style.css',
    '@/assets/mobirise/css/mbr-additional.css',
    '@/assets/web/assets/mobirise-icons2/mobirise2.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  build: {
    extractCSS: true
  }
}
