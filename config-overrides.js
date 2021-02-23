const { override, addDecoratorsLegacy, addWebpackAlias } = require("customize-cra")
const path = require("path");
module.exports = override(
  addDecoratorsLegacy(),
  // addLessLoader({
  //   strictMath: true,
  //   compress: true
  // }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  })
)