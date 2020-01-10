const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  devServer: {
    writeToDisk: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    open: true,
    openPage: '/example/',
    onListening: (server) => {
      const port = server.listeningApp.address().port;
      console.info("\n\nGo to => http://localhost:"+port+"/example/\n");
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
    'sw': './src/ts/sw-index.ts'
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
    'front': './src/ts/front-index.ts',
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
