const path = require('path');
const webpack = require('webpack');

// https://github.com/webpack/webpack/tree/master/examples/dll

/* Config Advanced */
module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['es2015', 'es2016', 'react']
  //         }
  //       }
  //     },
  //     {
  //       test: /\.json$/,
  //       use: 'json-loader'
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ExtractTextPlugin.extract({
  //         fallback: 'style-loader',
  //         use: 'css-loader'
  //       }),
  //     },
  //     {
  //       test: /\.(sass|scss)$/,
  //       use: ExtractTextPlugin.extract({
  //         fallback: 'style-loader',
  //         use: ['css-loader', 'sass-loader']
  //       }),
  //     }
  //   ]
  // },
  plugins: [
    // new ExtractTextPlugin('css/styles.css'),
    // new webpack.optimize.CommosChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity
    // })
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', '[name]-manifest.json')
    })
  ]
}
