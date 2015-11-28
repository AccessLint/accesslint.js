module.exports = function(config) {
  config.set({
    frameworks: [
      "chai",
      "mocha",
    ],
    files: [
      "test/*_test.js",
      "test/**/*_test.js",
    ],
    plugins: [
      require("karma-chai"),
      require("karma-phantomjs-launcher"),
      require("karma-mocha"),
      require("karma-webpack"),
    ],
    preprocessors: {
      "test/*_test.js": ["webpack"],
      "test/**/*_test.js": ["webpack"],
    },
    webpack: {
      devtool: "source-map",
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
      node: {
        console: true,
        fs: "empty",
        net: "empty",
        tls: "empty",
      },
    },
    webpackMiddleware: {
      stats: {
        colors: true,
      },
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false,
    concurrency: Infinity,
  });
};
