const path = require('path');

/* Sin path genera el bundle.js en la raiz de nuestro proyecto */

/*module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}*/

/* Nota: se debe correr webpack en la terminal ya que le estamos indicando el dist de donde se debe generar el bundle.js */

/* Usando path crea una carpeta de name dist y dentro genera el bundle.js*/

/*module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
*/

/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css') //name permite uusar el nombre original del entrypoint
  ]
}*/

/* Con este modulo podemos generar un file para los styles extract-text-webpack-plugin y se agregar al config como un plugin */
// https://www.npmjs.com/package/extract-text-webpack-plugin


/* Múltiples entry points */
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css') //name permite uusar el nombre original del entrypoint
  ]
}
