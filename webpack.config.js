const path = require('path');

/* Sin path genera el bundle.js en la raiz de nuestro proyecto */

/*module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}
*/

/* Usando path crea una carpeta de name dist y dentro genera el bundle.js*/
module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
