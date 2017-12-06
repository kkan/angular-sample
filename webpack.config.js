var webpack = require('webpack');

module.exports = {
  context: __dirname +'/app',
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    filename: '[name].js'
  }
}
