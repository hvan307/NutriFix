const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './frontend/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./backend/dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif)$/, loader: ['url-loader', 'file-loader'] }
    ]
  },
  devServer: {
    contentBase: path.resolve('./frontend/src'),
    hot: true,
    open: true,
    port: 8001,
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'frontend/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
