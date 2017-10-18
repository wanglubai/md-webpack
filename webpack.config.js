var path = require('path');

const config = {
  entry: './src/bar.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }
};


module.exports = config;
console.log(config);