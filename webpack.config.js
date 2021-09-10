const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  entry: [
    './src/components/HelloWorld/HelloWorld.scss',
    './src/components/ImageItem/ImageItem.scss',
    './src/components/InputTags/index.scss',
    './src/components/Pricetags/Pricetags.scss',
    './src/modules/Comment/comment.scss',
  ],
  output: { path: path.join(__dirname, "src"), filename: "[name].css" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    // extensions: [".tsx", ".ts", ".js"],
    extensions: [".scss"],
  },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css'
    })
  ],

};