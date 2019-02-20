const path = require('path');

module.exports = {
  entry: './src/ui/umd.js',
  output: {
    filename: 'main.dev.js',
    library: 'JScad',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: false
  },
  mode: 'development'
};