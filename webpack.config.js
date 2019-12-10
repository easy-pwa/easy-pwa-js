const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'easy-pwa': './src/ts/index.ts',
    'easy-pwa-sw': './src/ts/service-worker-base.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          //'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
      }
    ]
  },
  plugins: [new ProgressBarPlugin()]
};
