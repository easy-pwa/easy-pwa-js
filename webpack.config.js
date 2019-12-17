const path = require('path');
//const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'easy-pwa': './src/ts/index.ts',
    'easy-pwa-sw': './src/ts/service-worker-base.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'EasyPwaManager'
  },
  resolve: {
    extensions: ['.ts', '.js', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
          options: {
            // See options section below
          },
        }
      }
    ]
  },
  plugins: [new LodashModuleReplacementPlugin()],//, new ProgressBarPlugin()],
  optimization: {
    //minimizer: [new UglifyJsPlugin()],
  },
};
