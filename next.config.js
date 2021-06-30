const APP_BRAND = process.env.APP_BRAND;

module.exports = {
  env: {
    APP_BRAND: APP_BRAND,
  },
  reactStrictMode: true,
  /**
   * Redirects are applied server side. We want to keep our "custom" /pages protected
   * @See: https://nextjs.org/docs/api-reference/next.config.js/redirects
   */
  redirects: async () => {
    return [
      {
        source: '/(tk|ww)/(.*)',
        destination: '/404',
        permanent: true,
      },
    ]
  },
  /**
   * Rewrites are applied to client-side routing
   * @See: https://nextjs.org/docs/api-reference/next.config.js/rewrites
   */
   rewrites: async () => {  
    let routes = [];
    if (APP_BRAND === 'tk') {
        routes = require('./seo/tk')       
    } 

    if (APP_BRAND === 'ww') {
      routes = require('./seo/ww')
    }

    return routes
  }
}
