
export default defineNuxtConfig({
    compatibilityDate: '2026-02-03',
    ssr: false,
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    css: [
        '/assets/css/main.css',
        '/assets/css/noscript.css'
    ],
    app: {
        baseURL: '/',
        head: {
            title: 'Харків ортопед',
            link: [
               // { rel: 'canonical', href: 'https://0.0.0.0' }
            ],
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
             //   {name: "google-site-verification", content: "3PYM3TfL_GtQkBNeopppCRj5IDcdOGE5CDGMLYTz7EM"},
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                {src: "/assets/js/jquery.min.js", tagPosition: "bodyClose"},
                {src: "/assets/js/jquery.scrollex.min.js", tagPosition: "bodyClose"},
                {src: "/assets/js/browser.min.js", tagPosition: "bodyClose"},
                {src: "/assets/js/breakpoints.min.js", tagPosition: "bodyClose"},
                {src: "/assets/js/util.js", tagPosition: "bodyClose"},
                {src: "/assets/js/main.js", tagPosition: "bodyClose"}
            ],
            // please note that this is an area that is likely to change
            style: [
                // <style>:root { color: red }</style>
                //{textContent: ':root { color: red }'}
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                //{textContent: 'cargo'}
            ]
        },
    },
    postcss: {
        plugins: {
            //'@tailwindcss/postcss': {},
            autoprefixer: {},
        },
    },
    //public: '/docs',
    devtools: {enabled: true},
    nitro: {
        prerender: {
            routes: [],
            crawlLinks: false,
        },
        // Куди збирається сервер (за замовчуванням .output/)
       // output: {
       //     dir: '.output',
       //     serverDir: '.output/server',
       //     publicDir: '.output/public'
       // },

        // Пресет для деплоя
        preset: 'netlify', // 'static', 'node-server', 'vercel', 'netlify', 'cloudflare', ...

        // Шляхи, які будуть включені у збірку
       // include: [
       //     './server/**',    // всі твої API
       //     './utils/**'      // кастомні утиліти
       // ],

        // Ігноровані файли
        exclude: [
            '**/*.spec.ts'
        ],

        // Кастомні маршрути
        routeRules: {
            '/api/**': { cors: true },   // дозволити CORS
            '/admin/**': { prerender: false }, // не пререндерити адмінку
            '/blog/**': { swr: 60 }      // ISR (статичне оновлення раз на 60с)
        },

        // Proxy (наприклад, для API бекенду)
        //devProxy: {
        //    '/api/': {
        //        target: 'http://localhost:4000',
        //        changeOrigin: true
        //    }
        //}
    },
    modules: [
        '@nuxt/image',
        '@nuxt/content',
        'nuxt-og-image',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/seo'
    ],
    schemaOrg: {
        identity: 'Organization',
    },
    sitemap: {
        //hostname: '0.0.0.0',
        //gzip: true,
        //routes: [
        //    '/',
        //    '/about',
        //    '/contact',
        //    '/blog'
        //]
    },
    seo: {
        meta: {
            description: 'Харків ортопед',
        },
    },
    i18n: {
        //strategy: 'prefix_except_default',
       // locales: [
       //     {code: 'cs', name: 'Čeština', iso: 'cs-CZ', file: 'cs.json'},
       //     {code: 'en', name: 'English', iso: 'en-US', file: 'en.json'}
       // ],
       // defaultLocale: 'cs',
       // lazy: true,
       // vueI18n: './i18n.config.ts',
       // langDir: 'locales/'
    }
})