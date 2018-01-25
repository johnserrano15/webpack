const path = require('path');
const webpack = require('webpack');
/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* 
  Config Advanced 

  Nota: tener en cuenta que hay que correr primero webpack y luego webpack-dev-server
*/
module.exports = {
  entry: {
    // vendor: [
    //   'react',
    //   'react-dom',
    // ],
    home: path.resolve(__dirname, 'src/js/index.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2016', 'react']
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    // new webpack.optimize.CommosChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity
    // })
    new webpack.DllReferencePlugin({
      manifest: require('./dist/modules-manifest.json')
    })
  ]
}
