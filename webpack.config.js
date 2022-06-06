const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    //new HtmlWebpackPlugin({
    //template: './src/index.html'
    //}),
    // new HtmlWebpackPlugin({
    //   template: "./src/promotions.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/cabinet.html'
    // }),
    new HtmlWebpackPlugin({
      template: "./src/pay.html",
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/basket.html",
    // }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: join(__dirname, "src"),
    },
    port: 3000,
  },
};
