const { series, parallel, watch, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del')
const sass = require('gulp-sass')(require('sass'));
const pipeline = require('readable-stream').pipeline;
const cleanCSS = require('gulp-clean-css');

function clean() {
    return del(['public/scripts.js', 'public/styles.css', 'public/styles.css.map']);
}

function cssTranspile() {
    return src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public'));
}

function cssMinify() {
    return src('build/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('build'));
}

function jsMinify() {
  return pipeline(
      src('./scripts.js'),
      uglify(),
      dest('public')
    );
}

exports.clean = clean;

exports.build = series(
  clean,
  cssTranspile,
  parallel(cssMinify, jsMinify),
);

exports.watch = function() {
  exports.build;
  watch('styles.scss', cssTranspile, cssMinify);
  watch('scripts.js', jsMinify);
}

exports.default = exports.build;