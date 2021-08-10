const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

// The following line adds code completion and hints
/** @type {import('webpack').Configuration} */
const dev = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
  },
  target: "web",
  devtool: "eval-source-map",
};

module.exports = merge(common, dev);
