import { stringify } from 'postcss'
import i18n from './config/i18n'
const path = require('path')
export default {
  components: true,
  loading: false,
  
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css' },
    ]
  },
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/tailwind.css', 
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
   '~/plugins/veeValidate','~/plugins/i18n','~/plugins/axios','~/plugins/skeleton','~/plugins/checkRoutes','~/plugins/globalUrl'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
 

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n','@nuxtjs/axios',['nuxt-leaflet', {ssr: false}], 'nuxt-vue-multiselect','cookie-universal-nuxt',
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
      
       
      ]
    }]
    
  ],

  i18n:{
      locales: [
       {
        code:'fa',
        name:'persian'
       }

      ],
      defaultLocale: 'fa',
       vueI18n: i18n
    
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile:['vee-validate/dist/rules'],
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    }
  },
  router:{
    middleware:['load-auth','load-user-data'],
    parsQuery(query){
      return require('qs').parse(query)
    },
    stringifyQuery(query){
      const result=require('qs').stringify(query)
      return result? '?'+result :''
    }
  },
  env:{
    authRoutes:[
      '/crud',
      {regex:[/\/profile/.source]},
    ]
  }
}
