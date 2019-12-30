const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.d.ts', '.js'],
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
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

const swConfig = Object.assign({}, config, {
  entry: {
    'easy-pwa-sw': './src/ts/service-worker-base.ts'
  },
});

const frontConfig = Object.assign({}, config, {
  entry: {
    'easy-pwa': './src/ts/index.ts',
  },
  output: {
    libraryTarget: 'umd',
    library: 'EasyPwaManager'
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    //new ProgressBarPlugin(),
    new TypedocWebpackPlugin({
      out: '../docs',
      mode: 'file',
      excludePrivate: true,
      excludeProtected: true,
      excludeExternals: true,
      includeDeclarations: false,
      readme: 'none',
      hideBreadcrumbs: true,
      name: 'Easy PWA'
    }, ['./src/ts/manager', './src/ts/push'])
  ],
});

module.exports = [
  frontConfig, swConfig
];
