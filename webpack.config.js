const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [
          'url-loader',
          'file-loader',
        ],
      },
    ],
  },
};
