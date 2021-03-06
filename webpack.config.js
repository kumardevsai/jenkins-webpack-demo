const WebpackHtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: 'dist',
    pathinfo: true
  },
  plugins: [
    new WebpackHtmlPlugin(),
    new webpack.DefinePlugin({
      'JENKINS_URL': JSON.stringify('ok')
    }),
    new webpack.ExtendedAPIPlugin(),
    new webpack.EnvironmentPlugin([
      "GIT_COMMIT",
      "BUILD_URL",
      "GIT_BRANCH",
      "BUILD_ID"
    ])
  ]
}