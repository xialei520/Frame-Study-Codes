var webpack = require("webpack");
var path = require("path");
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
}

module : {
  rules: [
    {
      test: /\.js[x]?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    }
  ]
}
