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

/* css-loaders */
module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      }
    ]
  }
}
