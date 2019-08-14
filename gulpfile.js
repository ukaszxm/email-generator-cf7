'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSyncWatchFiles = [
    'css/style.css',
    './js/*.js',
    './**/*.php',
    '*.html'
];


// browser-sync options
// see: https://www.browsersync.io/docs/options/
var browserSyncOptions = {
    proxy: "localhost/email-generator-cf7/",
    notify: false
};

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init(browserSyncWatchFiles, browserSyncOptions);
});

var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	gulp.src('scss/style.scss')
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'));

});

gulp.task('sass:watch', ['browser-sync'], function () {
	gulp.watch('./scss/**/**/*.scss', ['sass']);
});