require("coffee-script/register")

var gulp = require("gulp");
var mocha = require("gulp-mocha");

gulp.task("default", function() {
  return gulp.src("test/*-test.coffee", { read: false })
    .pipe(mocha());
});
