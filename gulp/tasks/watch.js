'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', function() {
  gulp.watch(['./app/src/**/*.js'], ['js']);
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./assets/**/*.scss'], ['sass','scss']);
});
