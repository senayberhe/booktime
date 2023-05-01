const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'development',
  entry: {
    imageswitcher: './frontend/imageswitcher.js',
  },
  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'main/static/bundles'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
