const merge = require("webpack-merge");

const dev = require("./webpack.dev");

module.exports = merge(dev, {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader?cacheDirectory=true"
        }
      }
    ]
  },
  plugins: []
});
