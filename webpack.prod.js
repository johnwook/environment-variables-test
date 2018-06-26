const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./test.js",
  output: {
    filename: "test.webpack-prod.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new webpack.EnvironmentPlugin(["NODE_ENV"])],
  target: "node",
  mode: "production"
};
