const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

// The following line adds code completion and hints
/** @type {import('webpack').Configuration} */
const prod = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /.(css)$/,
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = merge(common, prod);
