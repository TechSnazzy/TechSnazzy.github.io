const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function cssTask() {
  return gulp
    .src('assets/css/*.css') // update this path to match your project structure
    .pipe(sourcemaps.init())
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css')); // update this path to where you want the combined and minified file to go
}
exports.default = cssTask;
