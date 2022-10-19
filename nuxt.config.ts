// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1', 
      title: 'Imprime Facil HP',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Imprime Facil HP' },
        { name: 'language', content: 'es' },
        { name: 'og:type', content: 'website' },
      ],
    }
  },
  title: 'Imprime Facil HP',
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    css: [
      "~/assets/css/tailwind.css"
    ],
  })