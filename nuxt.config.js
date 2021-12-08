export default {
  target: 'static',

  // Global page headers
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
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.min.js', body: true },
      { src: 'js/popper/popper.min.js', body: true },
      { src: 'js/tether/tether.min.js', body: true },
      { src: 'js/bootstrap/js/bootstrap.min.js', body: true },
      { src: 'js/smoothscroll/smooth-scroll.js', body: true },
      { src: 'js/viewportchecker/jquery.viewportchecker.js', body: true },
      { src: 'js/dropdown/js/nav-dropdown.js', body: true },
      { src: 'js/dropdown/js/navbar-dropdown.js', body: true },
      { src: 'js/touchswipe/jquery.touch-swipe.min.js', body: true },
      { src: 'js/parallax/jarallax.min.js', body: true },
      { src: 'js/formstyler/jquery.formstyler.js', body: true },
      { src: 'js/formstyler/jquery.formstyler.min.js', body: true },
      { src: 'js/theme/js/script.js', body: true }
    ]
  },

  css: [
    '@/assets/css/fontawesome.min.css',
    '@/assets/font-awesome-brands/css/brands.min.css',
    '@/assets/themify/css/themify-icons.min.css',
    '@/assets/tether/tether.min.css',
    '@/assets/bootstrap/css/bootstrap.min.css',
    '@/assets/bootstrap/css/bootstrap-grid.min.css',
    '@/assets/bootstrap/css/bootstrap-reboot.min.css',
    '@/assets/animatecss/animate.min.css',
    '@/assets/dropdown/css/style.min.css',
    '@/assets/formstyler/jquery.formstyler.min.css',
    '@/assets/formstyler/jquery.formstyler.theme.min.css',
    '@/assets/socicon/css/styles.min.css',
    '@/assets/theme/css/style.min.css',
    '@/assets/mobirise/css/mbr-additional.min.css',
    '@/assets/web/assets/mobirise-icons2/mobirise2.min.css'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  build: {
    extractCSS: true
  },

  server: {
    host: '0.0.0.0'
  }
}
