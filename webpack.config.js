var path = require("path");
var PACKAGE = require("./package.json");

module.exports = {
  entry: [
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: PACKAGE.name + "-" + PACKAGE.version + ".js"
  },
  plugins: [],
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015"]
      }
    },
    {
      test: /\.json$/,
      loader: "json",
    }
    ]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"]
  },
  node: {
    console: true,
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
  devServer: {
    contentBase: "./src",
  },
};
