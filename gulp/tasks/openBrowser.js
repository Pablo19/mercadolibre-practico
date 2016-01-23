var gulp = require('gulp');
var open = require('gulp-open');
var os = require('os');

var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
    os.platform() === 'win32' ? 'chrome' : 'firefox'));


gulp.task('open', function() {
  gulp.src('./app/index.html')
    .pipe(open({
      uri: 'http://localhost:5000',
      app: browser
    }));
});
