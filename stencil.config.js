const sass = require('@stencil/sass');

exports.config = {
  namespace: 'gradient-button',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
