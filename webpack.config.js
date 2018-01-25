const path = require('path');
// const webpack = require('webpack');
/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* 
  Config Produccion
  Nota: siempre hay que copilar webpack la primera vez y luego si correr webpack-dev-server
*/

// https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');

// los [hash] se usan para generar diferentes versiones de nuestros archivos cuando existan cambios
/*Si aplico hashes a mis archivos de salida(js, css, img) como hago para 
que mi archivo html de actualice con las versiones nuevas?
  Con html webpack plugin https://github.com/jantimon/html-webpack-plugin

  Loas hash solo para producción
*/

/*
  Se agrego:
  npm i -D babel-polyfill babel-preset-stage-0
  Estos dos modules para poder transpilar async await y 
  resolver el error a la horra de correr webpack -p
  mas info -> https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
*/
module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin('css/[name].[hash].css'),
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  } 

  return {
    entry: {
      home: ['babel-polyfill', path.resolve(__dirname, 'src/js/index.js')],
      contacto: path.resolve(__dirname, 'src/js/contacto.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist')+'/', // Donde el navegador va buscar esos files
      chunkFilename: 'js/[id].[chunkhash].js',
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
              presets: ['es2015', 'es2016', 'stage-0', 'react']
            }
          }
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.css$/,
          exclude: /(node_modules)/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          }),
        },
        {
          test: /\.(sass|scss)$/,
          exclude: /(node_modules)/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }),
        }
      ]
    },
    plugins
  }
}
