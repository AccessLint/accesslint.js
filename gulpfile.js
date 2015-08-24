"use strict";

var watchify = require("watchify");
var browserify = require("browserify");
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var gutil = require("gulp-util");
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");
var assign = require("lodash").assign;

var customOpts = {
  entries: ["./src/index.coffee"],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

b.transform("coffeeify");
gulp.task("js", bundle);
b.on("update", bundle);
b.on("log", gutil.log);

function bundle() {
  return b.bundle()
    .on("error", gutil.log.bind(gutil, "Browserify Error"))
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist"));
}
