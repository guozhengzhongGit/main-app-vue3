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
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { importLoaders: 1} }, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                  ['autoprefixer']
              ],
            }}}
          ]
      },
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {
              importLoaders: 2
            } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer']
                ],
              }}},
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
          { loader: 'css-loader', options: {
              importLoaders: 2
            } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                  ['postcss-px-to-viewport-8', {
  unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 375, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*','!font-size'], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
                              // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
                              // 下面配置表示类名中含有'keep-px'都不会被转换
      selectorBlackList: ['keep-px'],
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      replace: true, //  是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1338, // 横屏时使用的视口宽度
}]
                ],
              }}},
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
