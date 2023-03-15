// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false,
  },
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },
        // { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js' },
        // { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js' }
      ],
    }
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
    // { src: '~/plugins/typed-js', mode: 'client' }
  ],
});
