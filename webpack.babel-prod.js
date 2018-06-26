const merge = require("webpack-merge");

const prod = require("./webpack.prod");

module.exports = merge(prod, {
  mode: "production",
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
