const sass = require('@stencil/sass');

exports.config = {
  namespace: 'gradient-button',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/_variables.scss',
        'src/globals/_mixins.scss'
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
