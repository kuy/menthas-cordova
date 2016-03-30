var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('sync', function () {
  return gulp.src('www/js/**/*.js')
    .pipe(watch('www/js/**/*.js'))
    .pipe(gulp.dest('platforms/browser/www/js'));
});

gulp.task('build', function () {
  return gulp.src('src/index.js')
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('www/js'));
});

gulp.task('default', ['build', 'sync']);
