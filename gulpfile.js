'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('sass', function() {
    return gulp.src('./assets/sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_dist/assets/css'))
        .pipe(connect.reload());
});

//look for changes in .sass files
gulp.task('sass:watch', function() {
    gulp.watch('./assets/sass/**/*.sass', ['sass'])
});

gulp.task('html', function () {
    gulp.src('./_dist/*.html')
        .pipe(connect.reload());
});

//look for changes in .html files
gulp.task('html:watch', function () {
    gulp.watch(['./_dist/*.html'], ['html']);
});

//task for running the server
gulp.task('connect', function() {
    connect.server({
        root: './_dist',
        livereload: true
    });
});

//group all watch tasks in one
gulp.task('watch', ['sass:watch', 'html:watch']);

gulp.task('default', ['sass', 'connect', 'watch']);