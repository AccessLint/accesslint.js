var path = require("path");

module.exports = {
  entry: [
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "accesslint.js"
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
