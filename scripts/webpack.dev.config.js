const portfinder = require('portfinder');
const path = require('path');
// const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const projectDir = process.cwd();
const serverConfig = {
  port: 6202,
  client: {
    overlay: {
      errors: true,
      warnings: false
    }
  },
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  static: {
    directory: path.join(projectDir, 'dist'),
    publicPath: '/'
  },
  compress: true,
  open: true,
  proxy: {},
  hot: true
};

console.log(process.env.NODE_ENV);
console.log(process.env.BUILD_TARGET);

const webpackDevConfig = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.join(projectDir, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-cheap-module-source-map'
});

module.exports = () =>
  new Promise((resolve, reject) => {
    portfinder.basePort = serverConfig.port;
    portfinder.getPort((err, port) => {
      if (err) return reject(err);
      serverConfig.port = port;
      resolve({ webpackDevConfig, serverConfig });
    });
  });
