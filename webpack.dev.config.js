const path = require('path');
// const webpack = require('webpack');
/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* 
  Config Advanced dev
  Nota: siempre hay que copilar webpack la primera vez y luego si correr webpack-dev-server
*/
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
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
        exclude: /(node_modules)/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
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
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
  ]
}

/*module.exports = {
  entry: {
    invie: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  }
}*/
