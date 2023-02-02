const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const projectDir = process.cwd();

console.log(projectDir);
console.log(process.env.NODE_ENV);
console.log(process.env.BUILD_TARGET);
module.exports = {
  mode: 'development',
  entry: {
    index: path.join(projectDir, 'src/index.js')
  },
  output: {
    path: path.join(projectDir, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(projectDir, 'src'),
      'vue$': 'vue/dist/vue.esm-bundler.js',
    },
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      },
      {
        test: /\.js(\?.*)?$/,
        loader: 'babel-loader',
        include: path.resolve(projectDir, 'src'),
        options: {
          cacheDirectory: true,
          presets: [['@babel/preset-env', { targets: "defaults" }]],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: {} }]
      },
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {} },
          {
            loader: 'less-loader',
            options: {
              lessOptions: { modifyVars: {}, javascriptEnabled: true }
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {} },
          {
            loader: 'sass-loader',
            options: {
              // 使用 dart-sass
              implementation: require('sass'),
              sassOptions: {
                charset: false
              }
            },
          },
        ]
      },
      {
        // 默认 8kb
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(projectDir, 'index.html')
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      'process.env.buildTarget': JSON.stringify(process.env.BUILD_TARGET),
    }),
  ],

  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.join(projectDir, 'dist'),
      publicPath: '/',
    },
    compress: true,
    port: 6001,
    open: true,
    proxy: {},
    hot: true,
  },
  devtool: 'inline-cheap-module-source-map',
  target: 'web',
  stats: 'summary',
};
