const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

// The following line adds code completion and hints
/** @type {import('webpack').Configuration} */
const prod = {
  mode: "production",
};

module.exports = merge(common, prod);
