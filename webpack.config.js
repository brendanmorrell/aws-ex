const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  context: path.join(__dirname, 'client'),
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'template', template: 'template.html' }),
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
  },
};
