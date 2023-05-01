const common = require('./webpack.config')

module.exports = {
  mode: 'production',
  entry: common.entry,
  plugins: common.plugins,
  output: {
    filename: '[name].bundle.js',
    path: common.output.path
  },
  module:{
    rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {targets: "defaults"}]
                    ]
                }
            }
        }
    ]
  }
};