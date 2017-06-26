'use script';

var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell')
var webserver = require('gulp-webserver');
var webpack = require('webpack-stream');

gulp.task('serve', function(){
  gulp.src('dist/.')
    .pipe(webserver({
      https: false,
      port: '8080',
      host: 'localhost',
      directoryListing: false,
      fallback: 'dist/index.html'
    }))
});

gulp.task('sass', function(){
  return gulp.src('static/style/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/static/style'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./static/style/**/*.scss', ['sass']);
});

gulp.task('webpack', function(callback) {
    return gulp.src('react/index.jsx')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('.'));
});

gulp.task('webpack:watch', function() {
    gulp.watch('./react/**', function() {
        return gulp.src('react/index.jsx')
            .pipe(webpack(require('./webpack.config.js')))
            .pipe(gulp.dest('.'));
    });
});

gulp.task('copy', function() {
  gulp.watch(['./react/**', './style/**'], function() {
    gulp.src('react/index.html')
      .pipe(gulp.dest('dist/'));

    gulp.src('./static/images/*')
      .pipe(gulp.dest('dist/static/images'));

    gulp.src('./static/style/*.css')
      .pipe(gulp.dest('dist/static/style'));
  });
});

gulp.task('default', ['webpack', 'webpack:watch', 'sass', 'copy', 'sass:watch', 'serve']);
