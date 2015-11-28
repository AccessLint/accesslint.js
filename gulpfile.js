var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var devConfig = Object.create(webpackConfig);
devConfig.devtool = "sourcemap";
devConfig.debug = true;

var devCompiler = webpack(devConfig);

gulp.task("webpack:build-dev", function(callback) {
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);

    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));

    callback();
  });
});

gulp.task("webpack:build", function(callback) {
  var config = Object.create(webpackConfig);

  config.plugins = config.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
      );

  webpack(config, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);

    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));

    callback();
  });
});

gulp.task("build", ["webpack:build"]);

gulp.task("build-dev", ["webpack:build-dev"], function() {
  gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});
