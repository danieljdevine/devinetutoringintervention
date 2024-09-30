export default defineNuxtConfig({
    head: {
      title: 'Devine Intervention Tutoring',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Devine Intervention Tutoring Site' }
      ]
    },
    build: {
      loaders: {
        sass: {
          implementation: require('sass'),
        },
        scss: {
          implementation: require('sass'),
        },
      },
    },
    plugins: ['~/plugins/google-recaptcha'],
    modules: [
      '@bootstrap-vue-next/nuxt',
      '@nuxtjs/google-fonts'
    ],
    googleFonts: {
      families: {Poppins: true}
    },
    css: ['bootstrap/dist/css/bootstrap.min.css'],
    srcDir: 'src/frontend/',
    performance: {
      gzip: false
    },
    router: {
      base: `/`
    },
    components: true
  });