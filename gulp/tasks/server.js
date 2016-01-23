'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  historyApiFallback = require('connect-history-api-fallback');



gulp.task('server', function() {
  connect.server({
    root: './app',
    hostname: '0.0.0.0',
    port: 5000,
    livereload: true,
    middleware: function(connect, opt) {
      return [historyApiFallback()];
    }
  });
});

gulp.task('html', function() {
  gulp.src('./app/**/*.html').pipe(connect.reload());
});

gulp.task('scss', function() {
  gulp.src('./assets/**/*.scss').pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./app/src/**/*.js').pipe(connect.reload());
});
