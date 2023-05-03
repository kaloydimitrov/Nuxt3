export default {
    css: [
      "primevue/resources/themes/lara-light-blue/theme.css",
      "primevue/resources/primevue.css",
      'primeicons/primeicons.css',
      'primeflex/primeflex.css'
    ],
    build: {
      transpile: ["primevue"]
    },
    serverMiddleware: [
        { path: '/api/coupon-options', handler: '~/api/couponOptions.ts' },
        { path: '/api/coupons', handler: '~/api/coupons.ts' },
        { path: '/api/food', handler: '~/api/food.ts' },
        { path: '/api/menu', handler: '~/api/menu.ts' }
      ],
  }
