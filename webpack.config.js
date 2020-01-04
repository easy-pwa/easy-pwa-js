const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  devServer: {
    writeToDisk: true,
    before: () => {
      console.log('Go to http://localhost:8080/example/');
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.d.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new ProgressBarPlugin(),
  ],
};

const swConfig = Object.assign({}, config, {
  entry: {
    'sw': './src/ts/service-worker-base.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
    ]
  }
});

let frontConfig = Object.assign({}, config, {
  entry: {
    'front': './src/ts/index.ts',
  },
  output: {
    libraryTarget: 'umd',
    library: 'EasyPwaManager'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
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
});
/*
console.log(process.env.npm_lifecycle_event);
if (process.env.npm_lifecycle_event === 'build') {
  frontConfig.plugins.push(
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
  );
}
*/
module.exports = [
  frontConfig, swConfig
];
