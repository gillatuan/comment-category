const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./src/index.ts",
  entry: [
    './src/components/HelloWorld/HelloWorld.scss',
    './src/components/ImageItem/ImageItem.scss',
    './src/components/InputTags/index.scss',
    './src/components/Pricetags/Pricetags.scss',
    './src/modules/Comment/comment.scss',
  ],
  output: { path: path.join(__dirname, "src"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    // extensions: [".tsx", ".ts", ".js"],
    extensions: [".scss"],
  },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      /* {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      }, */
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "css-modules-typescript-loader"],
      },
      /* {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      }, */
    ],
  },
  /* plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ], */
};