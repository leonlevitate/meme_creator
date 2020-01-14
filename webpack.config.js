const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    general: "./src/js/general.js",
    memes: "./src/js/memes.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "es2015"]
          }
        }
      }
    ]
  }
};
