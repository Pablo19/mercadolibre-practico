'use strict';

var bundle = require('gulp-bundle-assets');
var gulp = require('gulp');


gulp.task('compress', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./app/dist/lib'));
});
