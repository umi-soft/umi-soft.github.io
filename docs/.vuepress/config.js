module.exports = {
  title: '一路向北',
  description: '介绍一路向北的开源人生',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}