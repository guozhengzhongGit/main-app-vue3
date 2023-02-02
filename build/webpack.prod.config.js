const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

const projectDir = process.cwd();

console.log(projectDir);
console.log(process.env.NODE_ENV);
console.log(process.env.BUILD_TARGET);
module.exports = {
  mode: 'production',
  entry: {
    index: path.join(projectDir, 'src/index.js')
  },
  output: {
    path: path.join(projectDir, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
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
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader', options: {} }]
      },
      {
        test: /\.less$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
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
          { loader: MiniCssExtractPlugin.loader },
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
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Vue',
      filename: 'index.html',
      template: path.resolve(projectDir, 'index.html'),
      minify: false,
    })
  ],
  // externals: {
  //   vue: 'window.Vue'
  // },
  devtool: false,
  target: 'web',
  // stats: 'summary',
};
